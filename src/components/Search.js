import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../api'
import "../components/search.css"

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null)
  const handleonChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  
  // const loadOptions = (inputValue,loadedOptions) => {
  //   return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&offset=${loadedOptions.length}`, geoApiOptions)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       return {
  //         options: response.data.map((city) => {
  //           return {
  //             value: `${city.latitude} ${city.longitude}`,
  //             label: `${city.name},${city.countryCode}`,
  //           };
  //         }),
  //       }
  //     })
  //     .then(err => console.log(err));

  // }
  async function loadOptions(inputValue) {
    

    const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,geoApiOptions);
    const responseJSON =await response.json();
  
    
   return{ options: responseJSON.data.map((city) => {
                  return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name},${city.countryCode}`,
                  };
                })
              }
               
      

  }
  return (
    <>
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid" style={{justifyContent:"flex-start"}}>
        <i class="fa-solid fa-cloud-bolt fa-3x"></i>
        
        <a className="navbar-brand ms-3" href="#"><p className='m-0' style={{ color: "white", fontFamily: 'Bruno Ace SC' }}>Weather</p>
          <p className='m-0' style={{ color: "white", fontFamily: 'Bruno Ace SC' }}>Forecast</p></a>

        {/* <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"> */}
        {/* </div> */}
      </div>
    </nav>
          <form className="d-flex justify-content-center mt-4 mb-4" role="search">
            <AsyncPaginate  placeholder="Search for city" debounceTimeout={600} value={search} loadOptions={loadOptions} onChange={handleonChange}  />
          </form>

    </>
  )
}
