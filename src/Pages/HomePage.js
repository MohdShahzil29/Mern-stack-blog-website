import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Card from "../components/Card";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
       <Banner />
       <Feature />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       </div>
       <Footer />
    </div>
  );
};

export default HomePage;
