// Собирает статический сайт в папку public/ (её отдаёт Vercel).
const fs = require('fs');
fs.rmSync('public', { recursive: true, force: true });
fs.mkdirSync('public/video', { recursive: true });
fs.copyFileSync('index.html', 'public/index.html');
for (const f of fs.readdirSync('video')) fs.copyFileSync('video/' + f, 'public/video/' + f);
console.log('public/ готов:', fs.readdirSync('public'), fs.readdirSync('public/video'));
