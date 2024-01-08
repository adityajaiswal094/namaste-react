import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";

const Body = () => {
  // Local State variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.4
            );
            // console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Card */}
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
