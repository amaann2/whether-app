import React, { useEffect, useState } from 'react'
import './weather.css'

const Whether = () => {
    const [search, setsearch] = useState('')
    const [data, setdata] = useState(null)
    useEffect(() => {
        const whetherdata = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0bc3ef3c6ad3860c3a99cde85c2179b`
            const response = await fetch(url)
            const data = await response.json()
            setdata(data.main)
        };
        whetherdata();
    }, [search])
    const capitalise = (k)=>{
    return k.toUpperCase()
    }

    return (
        <>
            <div className='weather'>
                <h1 className='heading'>Enter a City Name</h1>
                <input className='cityinput' type="text" value={search} onChange={(event) => { setsearch(event.target.value) }} />
                {
                    !data ? (<p>no data found</p>) :
                        (
                            <div className='info'>
                                <h4 className='city'>{capitalise(search)} :  {data.temp}</h4>
                                <h5>Min: {data.temp_min} </h5> 
                                <h5>Max : {data.temp_max}</h5>

                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Whether