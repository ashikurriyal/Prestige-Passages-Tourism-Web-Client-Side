import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import CardAllTouristSpot from "./CardAllTouristSpot";


const AllTouristsSpot = () => {

    const { loadedItem } = useContext(AuthContext)
    console.log(loadedItem)


    return (
        <div className="flex flex-col items-center mb-12" >
            <div className="text-center mb-10 mt-12">
                <h1 className="lg:text-5xl text-3xl font-playfair font-bold text-sky-600">All Tourists Spot</h1>
            </div>

            <div>
                {
                    // loadedItem.map(item => <CardAllTouristSpot key={item._id} item={item}></CardAllTouristSpot>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;