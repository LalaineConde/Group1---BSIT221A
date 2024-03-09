
import Link from "next/link";
function Navbar(){

    
    return(
        <>
       
        <nav className="navbar">
            <ul className="nav-list">
                <li className="mobile-hidden"><Link href="/">HOME</Link></li>
                <li className="mobile-hidden"><Link href="/category/allRecipes">ALL RECIPES</Link></li>
                <li className="mobile-hidden"><Link href="/category/breakfast">BREAKFAST</Link></li>
                <li className="mobile-hidden"><Link href="/category/lunch">LUNCH</Link></li>
                <li className="mobile-hidden"><Link href="/category/dinner">DINNER</Link></li>
            </ul>
        </nav>
        
        </>
    );
}

export default Navbar