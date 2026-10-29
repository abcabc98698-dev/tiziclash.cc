import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('../node_modules/.pnpm/node_modules/sharp');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const avatarPath = path.join(publicDir, 'avatar.webp');

async function main() {
  const avatarBuffer = fs.readFileSync(avatarPath);

  // 1. Generate PNG sizes
  const png16 = await sharp(avatarBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(avatarBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(avatarBuffer).resize(48, 48).png().toBuffer();
  const png180 = await sharp(avatarBuffer).resize(180, 180).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon-16.png'), png16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);

  // 2. Build multi-resolution ICO file
  const images = [
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ];

  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + images.length * entrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(images.length, 4); // count

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(img.buffer.length, 8); // bytes in res
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += img.buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...images.map((img) => img.buffer)]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // 3. Generate favicon.svg with embedded image
  const base64Webp = avatarBuffer.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <clipPath id="c">
    <rect width="100" height="100" rx="20"/>
  </clipPath>
  <image width="100" height="100" clip-path="url(#c)" href="data:image/webp;base64,${base64Webp}"/>
</svg>`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');

  console.log('Successfully generated all favicons (ICO, SVG, PNG 16/32/180)!');
}

main().catch(console.error);
