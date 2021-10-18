import React, { useState, useEffect } from 'react';
import SweaterDetails from './SweaterDetails';

const SweaterDetailsPage = () => {
  const [sweater, setSweater] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sweaters")
      .then((res) => res.json())
      .then((data) => setSweater(data));
  }, []);
  return (
    <div>
      {
        sweater.map(sweaterInfo => <SweaterDetails key={sweaterInfo.key} sweaterInfo={sweaterInfo}></SweaterDetails>)
      }
    </div>
  );
};

export default SweaterDetailsPage;