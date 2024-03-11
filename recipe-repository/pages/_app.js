import "@/styles/globals.css";
import "/styles/layout.scss";
import "/styles/recipe_category_layout.scss"
import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"
import Searchbar from "/components/Constants/Searchbar.js"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Searchbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
  );
}
