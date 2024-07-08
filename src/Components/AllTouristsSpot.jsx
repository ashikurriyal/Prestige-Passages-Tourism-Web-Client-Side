
import { Link, useLoaderData } from "react-router-dom";
import CardTouristSpot from "./CardTouristSpot";
import { useState } from "react";


const AllTouristsSpot = () => {

    const spots = useLoaderData();

    const [sortCost, setSortCost] = useState(spots); // Assuming spots is an array of objects with an average_cost property

    const handleSortAvgCost = () => {
        const sortedCost = [...sortCost].sort((b1, b2) => b2.average_cost - b1.average_cost);
        setSortCost(sortedCost);
        console.log(sortedCost);
    };

    return (
        <div>

            <details className="dropdown text-center">
                <summary className="m-1 btn border-sky-500 border-2 text-sky-500  text-base font-medium">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li ><Link onClick={handleSortAvgCost}>Average Cost</Link></li>
                    {/* <li>Average Cost</li> */}

                </ul>
            </details>

            <div className="flex flex-col items-center mb-12" >
                <div className="text-center mb-10">
                    <h1 className="lg:text-5xl text-3xl font-playfair font-bold text-sky-600">All Tourists Spot</h1>
                </div>

                <div className="flex  flex-col gap-14">
                    {
                        sortCost.map(spot => <CardTouristSpot key={spots.id} spot={spot}></CardTouristSpot>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllTouristsSpot;