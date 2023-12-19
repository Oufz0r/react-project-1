const express = require('express');
// const db = require('../src/api/dbConfig'); // Importez le module de configuration de la base de données
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

const app = express();

// Exemple d'endpoint pour récupérer des données depuis la base de données
// app.get('/api/data', (req, res) => {
//     db.query('SELECT * FROM users', (error, results) => {
//         if (error) throw error;
//         res.json(results);
//     });
// });

app.use(cors());
app.use(express.json());


app.use('/api', dataRoutes);

// ... Autres endpoints pour les opérations CRUD ...

app.listen(3001, () => {
    console.log('Serveur en écoute sur le port 3001');
});