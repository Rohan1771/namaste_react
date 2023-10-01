import RestaurantCard from "../RestaurantCard";
import {RestaurantList} from '../../../utils/RestaurantList';
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(RestaurantList);

    const filterRating = () => {
        setListOfRestaurants(listOfRestaurants.filter(restaurant => restaurant?.data?.avgRating > 4))
    }
    return (
      <div className="body">
        <div className="search">
            <button onClick={filterRating}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;