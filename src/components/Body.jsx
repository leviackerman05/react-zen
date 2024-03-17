import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurant] = useState(resList);
  return (
    <div className="body-container">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = resList.filter(
            (res) => res.info.avgRating > 4.1
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Show Top Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
