import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"

function dinner(){
    return(
        <>
        <Header/>
        <div className="dinner-container">
            <div>
                <h1>Dinner</h1>
                <p>Make your evenings special with our selected dinner ideas, adding a gourmet touch to create a memorable nights.</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default dinner