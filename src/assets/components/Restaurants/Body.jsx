import restaurantData from "../../restaurantData";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantCard.css";

const Body = () => {
    return (
        <div className="body">
            <div className="restaurant-list">
                {restaurantData.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.id} 
                        resName={restaurant.resName} 
                        cuisine={restaurant.cuisine} 
                        rating={restaurant.rating} 
                        eta={restaurant.eta} 
                        image={restaurant.image} 
                    />
                ))}
            </div>
        </div>
    )
}
export default Body;