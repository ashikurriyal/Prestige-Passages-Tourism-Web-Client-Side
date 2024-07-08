import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from 'sweetalert2'


const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext)


    const handleAddTouristSpot = e => {

        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const email = form.email.value;

        const place = { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear,email }

        fetch('https://prestige-passages-server.vercel.app/place', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(place)
        })
            .then(res => res.json()
            )
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        form.reset();

        console.log(place)

    }


    return (
        <form onSubmit={handleAddTouristSpot} className="flex flex-col items-center mb-12">
            <div className="text-center mb-10 mt-6">
                <h1 className="lg:text-5xl text-3xl font-playfair font-bold text-sky-600">Add Tourist Spot</h1>
            </div>
            <div className="w-1/2 flex flex-col  gap-6">
                {/* first row */}
                <div className="flex flex-col lg:flex-row justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </div>
                            <input name="tourists_spot_name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>

                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Country Name</span>
                            </div>
                            <select name="country_Name" className="select select-bordered">
                                <option value={'France'}>France</option>
                                <option value={'Italy'}>Italy</option>
                                <option value={'Spain'}>Spain</option>
                                <option value={'England'}>England</option>
                                <option value={'Netherlands'}>Netherlands</option>
                                <option value={'Switzerland'}>Switzerland</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* second row */}
                <div className="flex  flex-col lg:flex-row justify-between gap-5">

                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Location</span>
                            </div>
                            <input name="location" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Seasonality</span>
                            </div>
                            <select name="seasonality" className="select select-bordered">
                                <option value={'Summer'}>Summer</option>
                                <option value={'Spring'}>Spring</option>
                                <option value={'Winter'}>Winter</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* third row */}
                <div className="flex  flex-col lg:flex-row justify-between gap-5">

                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Travel Time</span>
                            </div>
                            <select name="travel_time" className="select select-bordered">
                                <option value={"3 Days"}>3 Days</option>
                                <option value={"5 Days"}>5 Days</option>
                                <option value={"7 Days"}>7 Days</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Average Cost</span>
                            </div>
                            <input name="average_cost" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                </div>
                {/* fourth row */}
                <div className="flex  flex-col lg:flex-row justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </div>
                            <select name="totaVisitorsPerYear" className="select select-bordered">
                                <option value={'10000'}>10000</option>
                                <option value={'12000'}>12000</option>
                                <option value={'15000'}>15000</option>
                                <option value={'20000'}>20000</option>
                                <option value={'30000'}>30000</option>

                            </select>
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <input name="short_description" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>

                    </div>
                </div>
                {/* fifth row */}
                <div className="flex justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">User Name</span>
                            </div>
                            <input name="name" defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>

                </div>
                {/* Sixth Row */}
                <div className="w-full">
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">User Email</span>
                        </div>
                        <input name="email" defaultValue={user?.email} type="email" className="input input-bordered w-full max-w-lg" />
                    </label>
                </div>
                {/* seventh row */}
                <div className="w-full">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Image URL</span>
                        </div>
                        <input name="image" type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>

                <div>
                    <input type="submit" value="Add" className="btn w-full bg-[#0a58be0d] rounded-2xl border-sky-500 border-2" />
                </div>
            </div>
        </form>
    );
};

export default AddTouristsSpot;
