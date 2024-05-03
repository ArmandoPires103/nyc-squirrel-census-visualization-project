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
                console.log(jsonData);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, []);
  return (
    <div>SquirrelData</div>
  )
}

export default SquirrelData