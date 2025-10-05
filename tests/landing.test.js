const fs = require('fs').promises;
const path = require('path');

describe('Pruebas de la Landing Page', () => {
    test('El servidor existe', async () => {
        try {
            const stats = await fs.stat(path.join(__dirname, '../server.js'));
            expect(stats.isFile()).toBe(true);
        } catch (error) {
            throw new Error('No se encontró el archivo server.js');
        }
    });

    test('La página index.html existe', async () => {
        try {
            const stats = await fs.stat(path.join(__dirname, '../public/index.html'));
            expect(stats.isFile()).toBe(true);
        } catch (error) {
            throw new Error('No se encontró el archivo index.html');
        }
    });
});