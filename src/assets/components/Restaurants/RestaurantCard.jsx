import "./RestaurantCard.css";
import React from "react";
import restaurantData from "../../restaurantData";

const RestaurantCard = ({resName, cuisine, rating, eta, image}) => {
    return (
        <div className = "card">
            <div className="card-image">
                <img src={image} alt={resName}/>
            </div>
            <div className="card-info">
                <h2 className="restaurant-name">{resName}</h2>
                <p className="cuisine">{cuisine}</p>
                <p className="rating"> ⭐ {rating} | 🕗 {eta}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;