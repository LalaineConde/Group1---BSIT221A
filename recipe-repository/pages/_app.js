import "@/styles/globals.css";
import "/styles/layout.scss";
import "/styles/recipe_category_layout.scss"
import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"
import Searchbar from "/components/Constants/Searchbar.js"
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return (
    <>
    <Header/>
    {isHomePage && <div className="website-title-container"><h1 className='website-title'>FOODIE DELIGHT</h1></div>}
    <Searchbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
  );
}
