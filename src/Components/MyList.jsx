import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import {  useNavigate } from "react-router-dom";


const MyList = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const [loadedItem, setloadedItem] = useState([])

    console.log(loadedItem)
    useEffect(() => {
        fetch(`http://localhost:5300/myList/${email}`)
            .then(res => res.json())
            .then(data => {
                setloadedItem(data)
            })
    }, [user])

    const handleUpdateButton = (_id) => {
        navigate(`/update/${_id}`)
    }
    return (
        <div className="container mx-auto mb-12">
            <div className="text-center mb-10 mt-12">
                <h1 className="lg:text-5xl text-3xl font-playfair font-bold text-sky-600">Your Added Tourist Spot</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Spot Name</th>
                            <th>Location</th>
                            <th>Country</th>
                            <th>Travel Time</th>
                            <th>Average Cost</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedItem.map(item => <>
                                <tr className="hover"> 
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.tourists_spot_name}</div>
                                                <div className="text-sm opacity-50">{item.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.location}
                                        {/* <br /> */}
                                        {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                    </td>
                                    <td>{item.country_Name}</td>
                                    <td>{item.travel_time}</td>
                                    <td>${item.average_cost}</td>
                                    <th className="space-x-4">
                                        <button className="btn btn-ghost btn-xs bg-[#0a58be0d] rounded-2xl border-sky-500 border-2" onClick={() =>handleUpdateButton(item._id)}>Update</button>
                                        <button className="btn btn-ghost btn-xs bg-[#0a58be0d] rounded-2xl border-sky-500 border-2">Delete</button>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;