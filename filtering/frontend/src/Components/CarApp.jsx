import axios from "axios";
import { useState, useEffect } from "react";
import FilterPriceForm from "./FilterPriceForm";
import CarsContainer from "./CarsContainer";

export default function CarApp() {
    // states
    const [carsFromDB, setCarsFromDB] = useState([]);
    const [carsDisplay, setCarsDisplay] = useState([]);

    // Handlers
    const handleGetCarsFromDB = async () => {
        try {
            await axios.get("http://localhost:3000/cars").then((response) => {
                console.log(response.data);
                setCarsFromDB(response.data);
                setCarsDisplay(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilterPrice = (e) => {
        const maxPrice = e.target.value;
        if (maxPrice === "all") setCarsDisplay(carsFromDB);
        else setCarsDisplay(carsFromDB.filter((car) => car.price.replace("$", "").replace(",", "") < maxPrice));
    };

    useEffect(() => {
        handleGetCarsFromDB();
    }, []);

    return (
        <div>
            <h1>Car App</h1>
            <FilterPriceForm handleFilterPrice={handleFilterPrice} />
            <CarsContainer cars={carsDisplay} />
        </div>
    );
}
