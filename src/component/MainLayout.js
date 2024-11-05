import React from 'react';
import Header from '../pages/Menu';

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
