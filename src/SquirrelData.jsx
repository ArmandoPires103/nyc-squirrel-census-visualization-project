import React from 'react'
import { useEffect, useState } from 'react'

const SquirrelData = () => {
    const [squirrelInfo, setSquirrelInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json');
                if(!response.ok) {
                    throw new Error('Not found');
                }
                const jsonData = await response.json();
                setSquirrelInfo(jsonData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, []);
    return (
        <div>
            <h2>Squirrel Data</h2>
            <ul>
                {squirrelInfo.map((squirrel, index) => (
                    <li key={index}>
                        <strong>Squirrel ID:</strong> {squirrel.unique_squirrel_id}<br />
                        <strong>Eating:</strong> {squirrel.eating ? 'Yes' : 'No'}<br />
                        <strong>Foraging:</strong> {squirrel.foraging ? 'Yes' : 'No'}<br />
                        <strong>Runs From:</strong> {squirrel.runs_from ? 'Yes' : 'No'}<br />
                        <strong>Attacks you:</strong> {squirrel.approaches ? 'Yes' : 'No'}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default SquirrelData