

import { useState } from "react";
import "./GetCities.css"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const input={
    id:uuidv4(),
    city:"",
    population:"",
    country:""
}

export const AddCity = () => {

    const [addCitie,setAddCitie]=useState(input)
    const navigate=useNavigate()

    const handleChange=(e)=>{
            const {id,value}=e.target;
            setAddCitie({...addCitie,[id]:value})
            // console.log(addCitie)
    }

    const handleClick=()=>{
        // console.log(addCitie)
        axios.post("http://localhost:8080/cities",addCitie)
        .then(()=>{
            navigate("/")
        })
    }


  return (
    <div className="inputFlexColom">
      <input type="text" name="city" onChange={handleChange} id="city" className="city" required placeholder="Enter Your City Name"/>
      <input type="number" name="population" onChange={handleChange} id="population" className="population" required placeholder="Enter Your city Population"/>
      <input type="text" name="country" onChange={handleChange} id="country" className="country" required placeholder="Enter Your Country Name"/>
      <button onClick={handleClick}>Add City</button>
    </div>
  );
};
