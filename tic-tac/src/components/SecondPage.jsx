import React, { useEffect, useState } from "react";
import './SecondPage.css'

const SecondPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.restful-api.dev/objects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  

  return (
    <>
    <h1>Phone Lists</h1>
    <div className="card-container">
      
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="card">
            <p className="card-id">ID: {item.id}</p>
            <p className="card-name">Name: {item.name}</p>
            <p className="card-color">Color: {item?.data?.color}</p>
            <p className="card-price">Price: {item?.data?.price}</p>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
    </>
  );
};

export default SecondPage;
