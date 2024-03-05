import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"

function dinner(){
    return(
        <>
        <Header/>
        <div className="dinner-container">
            <div className="dinner-title">
                <h1>Dinner</h1>
                <p>Make your evenings special with our selected dinner ideas, adding a gourmet touch to create a memorable nights.</p>
            </div>

         <div className="dinner-recipe">

                <div className= "first-recipe">

                     <h1>Chicken Adobo</h1>
                </div>

                <div className= "second-recipe">
                     <h1>Beef Nilaga</h1>
        </div>

        <div className= "third-recipe">
            <h1>Chicken Tinola</h1>
        </div>

        <div className= "fourth-recipe">
            <h1>Bulalo</h1>
        </div>

        <div className= "fifth-recipe">
            <h1>Sinigang</h1>
        </div>
        </div>   
        
        </div>
        
        <Footer/>
        </>
    )
}

export default dinner