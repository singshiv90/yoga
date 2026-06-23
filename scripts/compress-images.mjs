/**
 * Compress public/ images using sharp.
 * - Resizes to max 1920px on longest side (skip if already smaller)
 * - PNGs  → lossless compression (effort 10)
 * - JPGs  → quality 85 (visually lossless)
 * - Logos / small icons (<50KB) are left untouched
 */

import sharp from "sharp";
import { readdir, stat, rename } from "node:fs/promises";
import { join, extname } from "node:path";

const PUBLIC = new URL("../public", import.meta.url).pathname;
const MAX_DIMENSION = 1920;
const SKIP_BELOW = 50 * 1024; // skip files < 50 KB

const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

const files = (await readdir(PUBLIC)).filter((f) => {
  const ext = extname(f).toLowerCase();
  return EXTENSIONS.has(ext) && !f.includes("Zone.") && !f.includes("sec.");
});

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = join(PUBLIC, file);
  const { size: before } = await stat(filePath);

  if (before < SKIP_BELOW) {
    console.log(`⏭  ${file} — ${fmt(before)} (skip, too small)`);
    continue;
  }

  const ext = extname(file).toLowerCase();
  const img = sharp(filePath);
  const meta = await img.metadata();

  // Resize if larger than MAX_DIMENSION
  const needsResize =
    (meta.width && meta.width > MAX_DIMENSION) ||
    (meta.height && meta.height > MAX_DIMENSION);

  let pipeline = sharp(filePath);

  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const tmpPath = filePath + ".tmp";

  if (ext === ".png") {
    await pipeline.png({ effort: 10, compressionLevel: 9 }).toFile(tmpPath);
  } else {
    await pipeline.jpeg({ quality: 85, mozjpeg: true }).toFile(tmpPath);
  }

  const { size: after } = await stat(tmpPath);
  await rename(tmpPath, filePath);

  totalBefore += before;
  totalAfter += after;

  const pct = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `✅ ${file}  ${fmt(before)} → ${fmt(after)}  (−${pct}%)${needsResize ? "  [resized]" : ""}`
  );
}

console.log(`\n📊 Total: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (saved ${fmt(totalBefore - totalAfter)})`);

function fmt(bytes) {
  if (bytes < 1024) return bytes + " B";
  return (bytes / 1024).toFixed(0) + " KB";
}
