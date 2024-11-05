import './styles/App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validatePassword(password)) {
            toast.error("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
            return;
        }

        navigate('/dashboard');
    };

    const signup = (event) => {
        event.preventDefault();
        navigate('/signup');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>LOGO</h1>

                <form onSubmit={handleSubmit} method="post" className="loginForm">
                    <input
                        type="text"
                        id="login"
                        placeholder="LOGIN"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input type="submit" value="LOG IN" />
                </form>

                <ToastContainer />

                <p className="signup" onClick={signup}><u>S'inscrire</u></p>
            </header>
        </div>
    );
}

export default App;
