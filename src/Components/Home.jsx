import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import TouristSpotSection from "./TouristSpotSection";
import CardTouristSpot from "./CardTouristSpot";


const Home = () => {

    const spots = useLoaderData();
    console.log(spots)

    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <TouristSpotSection></TouristSpotSection>
                <div className="flex  flex-col gap-14">
                    {
                        spots.map(spot => <CardTouristSpot key={spots.id} spot={spot}></CardTouristSpot>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;