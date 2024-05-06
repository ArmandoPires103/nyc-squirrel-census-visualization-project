import React, { useEffect, useState } from "react";
import { dateFormatting, grabName } from "../helper";
import "../Styles/beware.css";
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
        const squirrelsWithName = jsonData.map((squirrel) => ({
          ...squirrel,
          name: grabName(),
        }));
        setSquirrelInfo(squirrelsWithName);
        console.log(squirrelsWithName);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Beware of these Squirrels!</h1>
      <div className="card-layout">
        {squirrelInfo.map((squirrel) => (
          <div key={squirrel.unique_squirrel_id} className="squirrel-card">
            <p>{squirrel.name}</p>
            <img
              src="https://t3.ftcdn.net/jpg/06/44/50/06/360_F_644500652_pH44DAu9c4N8rrBwobO1f6e0T4m0ReO0.jpg"
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
