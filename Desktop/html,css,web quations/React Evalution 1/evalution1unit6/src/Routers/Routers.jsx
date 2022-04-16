import { Routes,Route } from "react-router-dom"
import { AddCity } from "../Components/AddCity"
import { AddCountry } from "../Components/AddCountry"
import { GetCities } from "../Components/GetCities"
import { Nav } from "../Components/Nav"

export const Routers=()=>{

    return (
        <div>
            <Nav/>
            <Routes>
                <Route exact path="/" element={<GetCities/>} />
                <Route exact path="/add-city" element={<AddCity/>} />
                <Route exact path="/add-country" element={<AddCountry/>} />
            </Routes>
        </div>
    )
}