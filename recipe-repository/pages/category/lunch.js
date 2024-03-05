import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"

function lunch(){
    return(
        <>
        <Header/>
        <div className="lunch-container">
            <div className="lunch-title">
                <h1>Lunch</h1>
                <p>Enhance your midday break with our suggested lunch recipes, offering a delicious mix of flavors to satisfy your cravings.</p>
                
            </div>
            <div className="lunch-recipe">
                <div className="recipe">
                    <h1>Ginisang Munggo</h1>
                </div>
                <div className="recipe">
                    <h1>Ginisang Munggo</h1>
                </div><div className="recipe">
                    <h1>Ginisang Munggo</h1>
                </div><div className="recipe">
                    <h1>Ginisang Munggo</h1>
                </div><div className="recipe">
                    <h1>Ginisang Munggo</h1>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default lunch
