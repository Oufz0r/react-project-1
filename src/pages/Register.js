import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
    const navigate = useNavigate();

    const redirectHome = () =>  {
        navigate('/');
    }

    const handleSubmit = async (e)  => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3001/api/data/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, password2 }),
            });

            if(!response.ok) {
                throw new Error('Erreur réseau');
            }

            const result = await response.json();
            console.log(result);
            alert('Vous pouvez à présent vous connecter.');
            redirectHome();
        }
        catch (error) {
            console.log('Erreur lors de la requête POST:', error);
        }
    };

    return (
        <div id="RegLog">
            {/* <h2>S'inscrire</h2> */}
            <form onSubmit={handleSubmit}>
                <label>
                    Nom:<br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:<br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Mot de passe:<br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Confirmez mot de passe:<br />
                    <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                </label>
                <button type="submit">Inscription</button>
            </form>
            {/* insérer une requete */}
        </div>
    )
}