import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { Input, Button } from "antd";
import useGeolocation from "react-hook-geolocation";
import "antd/dist/antd.css";
import "./styles.scss";

function Home() {
  const geolocation = useGeolocation();
  const [, pushLocation] = useLocation();
  const { Search } = Input;

  const onSearch = (keyword) => {
    if (keyword !== "") {
      pushLocation(`/search/${keyword}`);
    }
  };

  const handleClick = () => {
    if (
      !geolocation.error &&
      geolocation.latitude !== null &&
      geolocation.longitude !== null
    ) {
      const coordinatesFromGeolocation = `${geolocation.latitude},${geolocation.longitude}`;
      return pushLocation(`/search/${coordinatesFromGeolocation}`);
      // localStorage.setItem("geolocation", coordinatesFromGeolocation);
    }
    if(geolocation.error){
      return alert(`To use this feature, you must enable the permissions of browser's localization.`)
    }
    return alert(`Something was wrong!`)
  };

  return (
    <div className="location-searcher">
      <h1>Global Weather Reports</h1>
      <Search
        placeholder="Introduce a location..."
        onSearch={onSearch}
        enterButton
      />
      <Button type="text" onClick={handleClick}>Use my current location</Button>
    </div>
  );
}

export default Home;
