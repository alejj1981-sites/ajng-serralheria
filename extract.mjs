import fs from 'fs';
import path from 'path';

const htmlPath = 'C:/Users/Alexsandro/Desktop/ANDERSON/ARQUIVOS/ajng-serralheria.html';
const outDir = 'C:/Users/Alexsandro/Desktop/ANDERSON/ARQUIVOS/ajng-react/src/assets/images';

const html = fs.readFileSync(htmlPath, 'utf8');

const regex = /data:image\/(png|jpeg|jpg);base64,([^"'\s\)]+)/g;
let match;
let extracted = [];
while ((match = regex.exec(html)) !== null) {
  const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
  const base64Data = match[2];
  
  // Find context
  const start = Math.max(0, match.index - 50);
  const end = Math.min(html.length, match.index + 50);
  const context = html.substring(start, end);
  
  extracted.push({ ext, base64Data, context });
}

console.log(`Found ${extracted.length} data URIs`);

const names = [
  'hero-team.png',
  'telha-03.jpg',
  'mezanino-09.jpg',
  'mezanino-13.jpg',
  'mezanino-12.jpg',
  'mezanino-09.jpg',
  'mezanino-10.jpg',
  'mezanino-08.jpg',
  'telha-03.jpg'
];

extracted.forEach((item, index) => {
  const targetPath = path.join(outDir, names[index]);
  fs.writeFileSync(targetPath, item.base64Data, 'base64');
  console.log(`Saved ${names[index]}`);
});
