import { writeFileSync } from 'std/fs/mod.ts';

const filePath = '/path/to/file.txt';
const text = 'Hello, world!';

writeFileSync(filePath, text);
