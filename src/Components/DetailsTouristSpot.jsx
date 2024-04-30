import PropTypes from 'prop-types';
import { BiWorld } from 'react-icons/bi';
import { FaLandmark } from 'react-icons/fa';
import { IoMdPricetags } from 'react-icons/io';
import { IoLocationSharp, IoTimerOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router-dom';

const DetailsTouristSpot = () => {

    const spot = useLoaderData();
    console.log(spot)
    const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear } = spot;

    return (
        <div className='container mx-auto'>
            <section className="flex flex-col items-center mb-12">

                <div className="text-center mb-10 mt-6" data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="2500">
                    <h1 className="text-5xl font-playfair font-bold text-sky-600">{tourists_spot_name} Details </h1>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-2xl mb-12 gap-4 " data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="2500">
                    <img className="lg: w-[620px]" src={image} alt="Album" />
                    <div className="card-body gap-4">
                        <h2 className="card-title text-4xl">
                            {tourists_spot_name}
                            <hr />
                        </h2>

                        <p className="text-xl">{short_description}</p>

                        <div className="  flex font-worksans font-medium text-base gap-3 text-sky-500 items-center w-1/6">
                            <p className="text-[#131313] font-worksans font-bold text-base">Seasionality:</p>
                            <p className="bg-[#0a58be0d] rounded-2xl  px-3 py-1 border-sky-500 border-2 ">{seasonality}</p>
                        </div>
                        {/* <div className="  flex font-worksans font-medium text-base gap-3 text-sky-500 items-center w-1/6">
                            <p className="text-[#131313] font-worksans font-bold text-base">Visitors Per Year:</p>
                            <p className="bg-[#0a58be0d] rounded-2xl  px-3 py-1 border-sky-500 border-2 ">{seasonality}</p>
                        </div> */}
                        <div className="flex gap-8">
                            <div className="bg-sky-600 flex flex-col items-center text-white shadow-2xl rounded-md p-2 gap-2">
                                <h1 className="text-xl font-medium">Location</h1>
                                <div className="text-2xl">
                                    <IoLocationSharp />
                                </div>
                                <p className="text-xl font-medium">{location}</p>
                            </div>
                            <div className="bg-sky-600 flex flex-col items-center text-white shadow-2xl rounded-md p-2 gap-2">
                                <h1 className="text-xl font-medium">Country</h1>
                                <div className="text-2xl">
                                <BiWorld />
                                </div>
                                <p className="text-xl font-medium">{country_Name}</p>
                            </div>
                            <div className="bg-sky-600 flex flex-col items-center text-white shadow-2xl rounded-md p-2 gap-2">
                                <h1 className="text-xl font-medium">Average Cost</h1>
                                <div className="text-2xl">
                                    <IoMdPricetags />
                                </div>
                                <p className="text-xl font-medium">${average_cost}</p>
                            </div>
                            <div className="bg-sky-600 flex flex-col items-center text-white shadow-2xl rounded-md p-2 gap-2">
                                <h1 className="text-xl font-medium">Travel Time</h1>
                                <div className="text-2xl">
                                <IoTimerOutline />
                                </div>
                                <p className="text-xl font-medium">{travel_time}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsTouristSpot;

DetailsTouristSpot.propTypes = {
    spot: PropTypes.object
}