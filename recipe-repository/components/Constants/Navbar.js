import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className={`menuToggle ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`nav-list ${showSidebar ? 'active' : ''}`}>
                        <li className="mobile-hidden"><Link href="/">HOME</Link></li>
                        <li className="mobile-hidden"><Link href="/category/allRecipes">ALL RECIPES</Link></li>
                        <li className="mobile-hidden"><Link href="/category/breakfast">BREAKFAST</Link></li>
                        <li className="mobile-hidden"><Link href="/category/lunch">LUNCH</Link></li>
                        <li className="mobile-hidden"><Link href="/category/dinner">DINNER</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
