import "@/styles/globals.css";
import "/styles/layout.scss";
import "/styles/recipe_category_layout.scss"
import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  );
}
