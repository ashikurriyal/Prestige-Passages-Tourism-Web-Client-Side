import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import TouristSpotSection from "./TouristSpotSection";
import CardTouristSpot from "./CardTouristSpot";
import Gallery from "./Gallery/Gallery";
import GalleryHeader from "./GalleryHeader";
import AboutUs from "./AboutUs";
import AboutUsHeader from "./AboutUsHeader";
import Countries from "./Countries";


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
                        spots.slice(0,6).map(spot => <CardTouristSpot key={spots.id} spot={spot}></CardTouristSpot>)
                    }
                </div>
                <Countries></Countries>
                {/* <CountriesCard></CountriesCard> */}
                <GalleryHeader></GalleryHeader>
                <Gallery></Gallery>
                <AboutUsHeader></AboutUsHeader>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;