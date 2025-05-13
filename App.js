import ReactDOM from "react-dom/client";
import React from "react";
const Header = () => {
  return (
    <div className="header-container">
      <div className="img-logo">
        <img
          className="logo"
          src="https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839"
          alt="food-logo"
        />
      </div>
      <div className="nav-section">
        <ul>
          <li>Home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestuarantCard = () => {
  return <div className="rest-card" style={{background : '#F0F0F0'}}>
      <img alt="food-logo" className="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/132818513B.png"/>
    <h3>Meghna Food</h3>
    <h4>Italian, fast food</h4>
    <h4>4.4 stars</h4>
    <h4>38 min</h4>


  </div>;
};
// const resturantsList = 
const Body = () => {
  return (
    <div className="body-container">
      <div className="search"> searchbar </div>
      <div className="res-container">
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />

      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <div id="container">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
