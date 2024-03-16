import RestaurantCard from "./components/RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body-container">
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
