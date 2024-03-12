import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqv8rgqHCxG0AwOn4AmBSVfYnC4qn3QK59A&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const SearchComponent = () => {
  return (
    <div>
      <div className="search-container">
        <textarea className="textarea"></textarea>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div>
      // inline styling below
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-alt"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b58sysfvskincfwmgoqd"
        />
        <h3>{props.resname}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.4 Stars</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body-container">
      <RestaurantCard
        resname="California Burrito"
        cuisine="Mexican, American, Salads"
      />
      <RestaurantCard resname="McDonalds" cuisine="Burger, Slurps, Nuggets" />
      <RestaurantCard resname="KFC" cuisine="Chicken Burger, Wings" />
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <SearchComponent />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
