import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const redirectHome = () =>  {
        navigate('/');
    }

    const handleSubmit = async (e)  => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3001/api/data/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if(!response.ok) {
                throw new Error('Erreur réseau');
            }

            const result = await response.json();
            // console.log(result);
            localStorage.setItem("userName", result.name);
            // faire ça dans le store pour un bon refresh
            alert('Vous êtes connecté !');
            // redirectHome();
            window.location.href = '/';
        }
        catch (error) {
            console.log('Erreur lors de la requête POST:', error);
        }
    };

    return (
        <div id="RegLog">
            {/* <h2>Se Connecter</h2> */}
            <form onSubmit={handleSubmit}>
                <label>
                    Email:<br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Mot de passe:<br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Connexion</button>
            </form>
            <Link to="/register">S'inscrire</Link>
            {/* insérer une requete */}
        </div>
    )
}