import PropTypes from 'prop-types';

const CardTouristSpot = ({spot}) => {
    const { image,tourists_spot_name,country_Name, location, short_description, average_cost , seasonality, travel_time, totaVisitorsPerYear } = spot
    return (
        <section className="p-4 lg:p-8 bg-gray-200 dark:text-gray-800 shadow-2xl rounded-l-md " data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" >
            <div className=" ">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src={image} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <h3 className="text-3xl font-bold">{tourists_spot_name}</h3>
                        <p className="mt-6 dark:text-gray-600 text-lg">{location}, {country_Name}</p>
                        <p className="my-2 dark:text-gray-600 text-lg">{seasonality}</p>
                        {/* <p className="my-6 dark:text-gray-600 text-lg">{short_description}</p> */}
                        <button type="button" className="self-start btn border-sky-500 border-2 text-sky-500  text-base font-medium lg:mt-28">View Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardTouristSpot;
CardTouristSpot.propTypes = {
    spot: PropTypes.object
}