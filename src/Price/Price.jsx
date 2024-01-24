// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PriceList from "../components/PriceList/PriceList";

const Price = () => {
    const [prices, setPrices] = useState([]);
    
    useEffect(() => {
        fetch('priceList.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])
  return (
    <div>
      <h1 className="text-4xl text-purple-900 text-center p-4 font-bold">
        Awesome Affordable Prices
      </h1>
      <div className="grid md:grid-cols-3 gap-6 mx-20">
        {
          prices.map(price => <PriceList key={price.id} price={price}></PriceList>)
        }
      </div>
    </div>
  );
};

export default Price;
