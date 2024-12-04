const fs = require('node:fs/promises');
const path = require('node:path');


const foo = async () => {
    const baseFolder = 'baseFolder';
    await fs.mkdir(baseFolder, { recursive: true });
    for (let i = 1; i <= 5; i++) {
        const newFolder = path.join(baseFolder, `newFolder${i}`);
        await fs.mkdir(newFolder);

        for (let j = 1; j <= 5; j++) {
            const test = path.join(newFolder, `test${j}.txt`);
            await fs.writeFile(test, `Hello World`);
        }
    }
}

void foo();