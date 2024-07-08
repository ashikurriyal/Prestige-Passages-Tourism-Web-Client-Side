
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CountriesCardDetails = ({ item }) => {
    const { _id, image, tourists_spot_name, country_Name, location, seasonality, short_description, average_cost
    } = item
    return (
        <div className="card w-96 border-2 border-sky-500 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body space-y-2 ">
                <div className='text-center mb-4'>
                <h2 className="text-2xl font-bold">{tourists_spot_name}</h2>
                </div>
                <h2 className="text-xl font-bold"><span className='text-sky-500 text-xl'>Country Name: </span> {country_Name}</h2><hr />
                <h2 className="text-xl font-bold"><span className='text-sky-500 text-xl'>Location:</span> {location}</h2><hr />
                <h2 className="text-xl font-bold"><span className='text-sky-500 text-xl'>Seasionality:</span> {seasonality}</h2><hr />
                <h2 className="text-xl font-bold"><span className='text-sky-500 text-xl'>Average Cost:</span> {average_cost}</h2><hr />
                <p className="text-sm font-medium"><span className='text-sky-500 text-lg'>Description:</span><br /> {short_description}</p>
                <div className="flex justify-center">
                    <Link to={`/spot/${_id}`} type="button" className="btn border-sky-500 border-2 text-sky-500  text-base font-medium ">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CountriesCardDetails;
CountriesCardDetails.propTypes = {
    item: PropTypes.object
}