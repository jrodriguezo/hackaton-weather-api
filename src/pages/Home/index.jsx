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
    if (geolocation.error) {
      return alert(
        `To use this feature, you must enable the permissions of browser's localization.`
      );
    }
    return alert(`Something was wrong!`);
  };

  return (
    <section className="home-page">
      <h1>Global <br/> Weather</h1>
      <h2>Hi.</h2>
      <h2>How'd you like to check the weather?</h2>
      <div className="searcher-buttons">
        <Search
          placeholder="Introduce a location..."
          onSearch={onSearch}
          enterButton
        />
        <Button type="text" onClick={handleClick}>
          CURRENT LOCATION
        </Button>
      </div>
    </section>
  );
}

export default Home;
