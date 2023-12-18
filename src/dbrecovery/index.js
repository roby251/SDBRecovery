const sqlite3 = require('sqlite3').verbose();

const dbRecovery = new sqlite3.Database('./Recovery.sqlite', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }

  console.log('Conectado a la base de datos SQLite para el servicio de recuperación de contraseñas.');

  dbRecovery.run(`CREATE TABLE IF NOT EXISTS password_resets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    token TEXT,
    expiration DATETIME
    )`);
});

module.exports = dbRecovery;
