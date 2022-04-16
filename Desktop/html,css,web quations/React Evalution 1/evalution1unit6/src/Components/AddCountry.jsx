



import { useState } from "react";
import "./GetCities.css"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const input={
    id:uuidv4(),
    country:""
}

export const AddCountry = () => {

    const [addCountries,setAddCountries]=useState(input)
    const navigate=useNavigate()

    const handleChange=(e)=>{
            const {id,value}=e.target;
            setAddCountries({...addCountries,[id]:value})
            // console.log(addCountries)
    }

    const handleClick=()=>{
        // console.log(addCountries)
        axios.post("http://localhost:8080/country",addCountries)
        .then(()=>{
            navigate("/")
        })
    }


  return (
    <div className="inputFlexColom">
      <input type="text" name="country" onChange={handleChange} id="country" className="country" required placeholder="Enter Your Country Name"/>
      <button onClick={handleClick}>Add Country</button>
    </div>
  );
};
