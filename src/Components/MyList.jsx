import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const [loadedItem, setloadedItem] = useState([])

    console.log(loadedItem)
    useEffect(() => {
        fetch(`https://prestige-passages-server.vercel.app/myList/${email}`)
            .then(res => res.json())
            .then(data => {
                setloadedItem(data)
            })
    }, [user])

    const handleUpdateButton = (_id) => {
        navigate(`/update/${_id}`)
    }
    const handleDeleteButton = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://prestige-passages-server.vercel.app/myList/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = loadedItem.filter(item => item._id !== _id);
                            setloadedItem(remaining);
                        }
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className="container mx-auto mb-12">
            <div className="text-center mb-10 mt-6">
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
                                    </td>
                                    <td>{item.country_Name}</td>
                                    <td>{item.travel_time}</td>
                                    <td>${item.average_cost}</td>
                                    <th className="space-x-4 flex justify-center">
                                        <button className="btn btn-ghost btn-xs bg-[#0a58be0d] rounded-2xl border-sky-500 border-2" onClick={() =>handleUpdateButton(item._id)}>Update</button>
                                        <button className="btn btn-ghost btn-xs bg-[#0a58be0d] rounded-2xl border-sky-500 border-2" onClick={() => handleDeleteButton(item._id)}>Delete</button>
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