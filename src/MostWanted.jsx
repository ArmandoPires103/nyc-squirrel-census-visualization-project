import React, { useState, useEffect } from "react";
import mostWanted from "../mostWanted"; // Importing the array of image URLs

const MostWanted = () => {
  const [approachedSquirrels, setApproachedSquirrels] = useState([]);

  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json?$where=runs_from=false%20AND%20approaches=true&$limit=6")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setApproachedSquirrels(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div>
      <h1>The Most Wanted Squirrels</h1>
      <ul>
        {approachedSquirrels.map((squirrel, index) => (
          <li key={squirrel.unique_squirrel_id}>
            {/* Render the image and squirrel details */}
            <img src={mostWanted[index]} alt={`Squirrel ${index}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            {squirrel.unique_squirrel_id && (
              <div>
                <p>Unique Squirrel ID: {squirrel.unique_squirrel_id}</p>
                <p>Approaches: {squirrel.approaches ? 'Yes' : 'No'}</p>
                <p>Runs At you: {squirrel.runs_from ? 'No' : 'Yes'}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostWanted;
