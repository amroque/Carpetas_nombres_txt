const fs = require('fs');
const path = require('path');
const rutaBase = './carpetas_creadas';

fs.readFile('nombres.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    
    const nombres = data.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    
    nombres.forEach(nombre => {
        const rutaCarpeta = path.join(rutaBase, nombre);
        try {
            if (!fs.existsSync(rutaCarpeta)) {
                fs.mkdirSync(rutaCarpeta, { recursive: true });
                console.log(`✓ Carpeta creada: ${nombre}`);
            }
        } catch (error) {
            console.error(`✗ Error al crear ${nombre}:`, error.message);
        }
    });
});
