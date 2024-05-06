import React, { useState, useEffect } from "react";
import mostWanted from "../mostWanted"; // Importing the array of image URLs
import "../Styles/beware.css";
import { grabName } from "../helper";

const MostWanted = () => {
  const [approachedSquirrels, setApproachedSquirrels] = useState([]);

  useEffect(() => {
    fetch(
      "https://data.cityofnewyork.us/resource/vfnx-vebw.json?$where=runs_from=false%20AND%20approaches=true&$limit=6"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApproachedSquirrels(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mostwanted-container">
      <h1 className="beware-title-h1">The Most Wanted Squirrels</h1>
      <ul className="card-layout mostwanted">
        {approachedSquirrels.map((squirrel, index) => (
          <li
            key={squirrel.unique_squirrel_id}
            className="squirrel-card mostwanted"
          >
            <p className="beware-title-p">{grabName()}</p>
            {/* Render the image and squirrel details */}

            <img
              src={mostWanted[index]}
              alt={`Squirrel ${index}`}
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />

            {squirrel.unique_squirrel_id && (
              <div className="mostwanted-card-container">
                <p className="beware-title-p-1">
                  Criminal Serial Number: {squirrel.unique_squirrel_id}
                </p>
                <p className="beware-title-p-2">
                  Approaches:{" "}
                  {squirrel.approaches ? (
                    <span className="beware-title-span-y">Yes</span>
                  ) : (
                    <span className="beware-title-span-n">No</span>
                  )}
                </p>
                <p className="beware-title-p-3">
                  Runs At you:{" "}
                  {squirrel.runs_from ? (
                    <span className="beware-title-span-y">No</span>
                  ) : (
                    <span className="beware-title-span-y">Yes</span>
                  )}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostWanted;
