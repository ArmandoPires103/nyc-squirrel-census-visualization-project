import React, { useState, useEffect } from "react";

const MostWanted = () => {
  const [approachedSquirrels, setApproachedSquirrels] = useState([]);

  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const filteredSquirrels = data.filter(squirrel => squirrel.approaches === "true");
        setApproachedSquirrels(filteredSquirrels);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div>
      <h1>The Most Wanted Squirrels</h1>
      <ul>
        {approachedSquirrels.map(squirrel => (
          <li key={squirrel.unique_squirrel_id}>
            {/* Render squirrel details here */}
            {squirrel.unique_squirrel_id}
            {squirrel.approaches}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostWanted;
