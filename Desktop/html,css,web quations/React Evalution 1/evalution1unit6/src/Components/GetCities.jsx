import axios from "axios";
import React, { useEffect, useState } from "react";
import "./GetCities.css"

export const GetCities = () => {
  const [data, setData] = useState([]);

  function get() {
    axios.get("http://localhost:8080/cities").then((res) => {
      setData(res.data);
    //   console.log(res.data);
    });
  }
  useEffect(() => {
    get();
  }, []);

  const handleDelete=(id)=>{
    //   console.log("id is here " , id)
        axios.delete(`http://localhost:8080/cities/${id}`)
        .then(()=>{
            get();
        })
  }

  return (
    <div className="marginForTable">
      <table className="tableDetails">
        <thead className="headDetails" >
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            
      {data.map((elem) => {
        return (
            <tr className="displayData" key={elem.id}>
                <td>{elem.id}</td>
               <td>{elem.country}</td>
               <td>{elem.city}</td>
               <td>{elem.population}</td>
               <td>Edit</td>
               <td onClick={()=>{ handleDelete(elem.id)}}>Delete</td>
            </tr>
        )
      })}
        </tbody>
      </table>
    </div>
  );
};


// [
//     {
//       "id": 1,
//       "country": "india",
//       "city": "delhi",
//       "population": 19000000
//     },
//     {
//       "id": 2,
//       "country": "srilanka",
//       "city": "colombo",
//       "population": 5600000
//     },
//     {
//       "id": 3,
//       "country": "usa",
//       "city": "chicago",
//       "population": 29200000
//     }
//   ]