import "@/styles/globals.css";
import styles from "@/styles/layout.scss";
import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
    
    <Component {...pageProps} />
    
  </>
  );
}
