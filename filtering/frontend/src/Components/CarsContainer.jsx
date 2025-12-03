import CarCard from "./CarCard";

export default function CarsContainer({ cars }) {
    return (
        <div>
            {cars.map((car) => (
                <CarCard key={car._id} {...car} />
            ))}
        </div>
    );
}
