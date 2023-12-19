const express = require('express');
const router = express.Router();
const db = require('../../api/dbConfig');

// Endpoint pour récupérer toutes les données
router.get('/data', (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Endpoint d'inscription utilisateur
router.post('/data/register', (req, res) => {
    const { name, email, password, password2 } = req.body;

    // Vérif similarité des deux passwords

    // système de hashage de MDP
    
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Données insérées avec succès' });
    });
});

// Endpoint de connexion utilisateur
router.post('/data/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) throw error;

        // Vérifiez si des résultats ont été trouvés
        if (results.length > 0) {
            const user = results[0]; // Prenez la première ligne (si plusieurs lignes sont retournées)
            const { name } = user;

            res.json({ message: `Tu existes, ${name} !`, name: name });
        } else {
            res.json({ message: 'Aucun utilisateur trouvé avec cet email et ce mot de passe.' });
        }
    });
});

// ... Ajoutez d'autres endpoints pour les opérations CRUD ...

module.exports = router;
