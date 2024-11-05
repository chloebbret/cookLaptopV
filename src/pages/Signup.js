import '../styles/Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            toast.error("Veuillez entrer une adresse e-mail valide", {
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

        // Vérification du mot de passe
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

        if (password !== confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas", {
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

    return (
        <div className="SignUp">
            <header className="Signup-header">
                <h1>LOGO</h1>

                <form onSubmit={handleSubmit} className="signUpForm">
                    <input
                        type="text"
                        id="email"
                        placeholder="EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id="loginSignup"
                        placeholder="LOGIN"
                        required
                    />
                    <input
                        type="password"
                        id="passwordSignup"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id="confirmPasswordSignup"
                        placeholder="CONFIRM PASSWORD"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <input type="submit" value="SAVE" />
                </form>

                <ToastContainer />
            </header>
        </div>
    );
}

export default Signup;
