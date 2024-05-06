import React, { useEffect, useState } from "react";
import { dateFormatting, grabName } from "../helper";
import "../Styles/beware.css";
import squirrelImages from "../squirrelImages";

const SquirrelData = () => {
  const [squirrelInfo, setSquirrelInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://data.cityofnewyork.us/resource/vfnx-vebw.json?approaches=true&$limit=20"
        );
        if (!response.ok) {
          throw new Error("Not found");
        }
        const jsonData = await response.json();
        const squirrelsWithNameAndImages = jsonData.map((squirrel, index) => ({
          ...squirrel,
          name: grabName(),
          image: squirrelImages[index % squirrelImages.length], // Assign image from the array
        }));
        setSquirrelInfo(squirrelsWithNameAndImages);
        console.log(squirrelsWithNameAndImages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="beware-parent">
      <h1 className="beware-title-h1">Beware of these Squirrels!</h1>
      <div className="card-layout">
        {squirrelInfo.map((squirrel) => (
          <div key={squirrel.unique_squirrel_id} className="squirrel-card">
            <p className="beware-title-p">{squirrel.name}</p>
            <img
              src={squirrel.image} // Use the dynamically assigned image URL
              alt=""
              className="squirrel-img"
            />
            <ul>
              <h4>Description: </h4>
              <li>
                <strong>Primary Fur Color:</strong> {squirrel.primary_fur_color}
              </li>
              <li>
                {" "}
                <strong>Age Category: </strong> {squirrel.age}
              </li>
              <li>
                <strong>Last Seen: </strong>
                {dateFormatting(squirrel.date)}
              </li>
            </ul>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SquirrelData;
