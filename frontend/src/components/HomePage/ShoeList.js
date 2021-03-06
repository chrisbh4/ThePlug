import React from "react";
// import { useDispatch } from "react-redux";
// import { getAllShoes } from "../../store/shoes";
import '../HomePage/ShoeList.css'

/*
    TODO:
        -[] fix imageChecker that will check for a bad image,
*/

function ShoeList({ shoe }) {

    let imageCheck;
    if( shoe.image.includes("jpg") || shoe.image.includes("jpeg") || shoe.image.includes("png") || shoe.image.includes("image")){
        imageCheck = <img className="shoe-image" src={shoe.image} alt={shoe.title}></img>
    }else{
        imageCheck = <img className="bad-image shoe-image" alt={shoe.title}></img>

    }

    return (
        <>
         <div>
                        {/* <h2>{shoe.id}</h2> */}
                        <div className="shoe-image-container">
                            {}
                            <a href={`/shoes/${shoe.id}`} >
                                {imageCheck}
                            </a>
                        </div>
                        <div id="homepage-shoe-title"className="shoes-title">
                            <p className="homepage-shoe-title">
                                {shoe.title}
                            </p>
                        </div>
                        <div className="shoes-shoeSize">
                            <h4>{shoe.brand.toUpperCase()}</h4>
                        </div>
                        <div className="shoes-shoeSize">
                            <h4> Size: {shoe.shoeSize}</h4>
                        </div>
                        <div className="shoes-price">
                            <h3>${shoe.price}</h3>
                        </div>
                    </div>


        </>
    )
}


export default ShoeList
