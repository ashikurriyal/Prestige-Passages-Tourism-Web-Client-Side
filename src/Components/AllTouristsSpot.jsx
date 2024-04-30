
import { useLoaderData } from "react-router-dom";
import CardTouristSpot from "./CardTouristSpot";


const AllTouristsSpot = () => {

    // const { loadedItem } = useContext(AuthContext)
    // console.log(loadedItem)

    const spots = useLoaderData();
    console.log(spots)
    /* const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time } = allspot; */

    // console.log(tourists_spot_name)


    return (
        <div className="flex flex-col items-center mb-12" >
            <div className="text-center mb-10 mt-12">
                <h1 className="lg:text-5xl text-3xl font-playfair font-bold text-sky-600">All Tourists Spot</h1>
            </div>

            <div className="flex  flex-col gap-14">
                {
                    spots.map(spot => <CardTouristSpot key={spots.id} spot={spot}></CardTouristSpot>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;