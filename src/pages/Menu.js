import React, {useEffect, useRef, useState} from 'react';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Menu() {

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div className="logo">LOGO</div>
            <div className="nav-buttons">
                <Link to="/recettes" className="nav-button">Recettes</Link>
                <Link to="/cocktails" className="nav-button">Cocktails</Link>
                <Link to="/favoris" className="nav-button">Favoris</Link>
            </div>
            <div className="user-dropdown" ref={dropdownRef}>

            <DropdownButton
                id="dropdown-basic-button"
                title={<span className="user-icon" onClick={toggleDropdown}>👤</span>}
                drop="down"
                className="dropdown-menu"
            >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            </div>
        </div>
    );
}

export default Menu;
