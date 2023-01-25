// TODO: create a component that displays a single bakery item
import React from "react";

function shoeItem(prop) {
    return(
        <div>
            <img src = {prop.image} width= "400px"></img>
            <div className = "Name">
            <b>{prop.name}</b>
            </div>
            <div className = "Description">
            <i>{prop.description}</i>
            </div>
            <div className = "color">
             <b>{prop.color}</b>   
            </div>
            <b>${prop.price}</b>
            <div className = "price">
            <b>${prop.price}</b>
            </div>
        </div>
    )
}

export default shoeItem;

