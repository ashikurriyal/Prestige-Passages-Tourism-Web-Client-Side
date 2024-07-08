import { useLoaderData } from "react-router-dom";
import CountriesCardDetails from "./CountriesCardDetails";


const CountriesCard = () => {

    const loadedItem = useLoaderData();
    return (
        <div className="container mx-auto mb-12">
            <div className="text-center space-y-5 lg:mt-12 mt-6 mb-6">
                <h3 className="h3 text-5xl font-playfair font-bold text-sky-600">Countries Spot</h3>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 lg:mt-12 ">
                {
                    loadedItem.map(item => <CountriesCardDetails key={item._id} item={item}></CountriesCardDetails>)
                }
            </div>
        </div>
    );
};

export default CountriesCard;