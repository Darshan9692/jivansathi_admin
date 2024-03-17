import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography, Button, CardFooter, Tooltip } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

    useEffect(() => {
        // Fetch data from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `https://jivansathi.vercel.app/api/users`,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem('token')}`
                        },
                    }
                );
                // console.log(response.data);
                setUsers(response.data)
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                toast.error(error.response?.data?.message || "Failed to fetch users.");
                console.error("Failed to fetch users:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Toaster position="top-center"></Toaster>
            <div >
                <Card className="h-full w-full">
                    <div className="flex flex-col justify-center items-center h-full">
                        {users.length === 0 ? (
                            <div className="flex justify-center items-center h-full">
                                <img
                                    src="/illustration/noData.png"
                                    alt="no data"
                                    className="w-96 h-auto"
                                />
                            </div>
                        ) : (
                            loading ? (
                                <div className="flex justify-center items-center h-full">
                                    <img
                                        src="/illustration/loading.gif"
                                        alt="loading..."
                                        className="w-96 h-auto"
                                    />
                                </div>) : (
                                < div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:w-[97vw] mt-5 xl:mt-10">
                                    {users.map((user, index) => (
                                        user.paymentStatus === 1 && <div key={index} className="border border-gray-300 cursor-pointer rounded-lg p-4 mb-4 group relative">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="text-xl font-bold mr-3">{user.firstname} {user.lastname}</div>
                                                <div className="text-sm text-gray-600 mb-2">Level : {user.current_level}</div>
                                            </div>
                                            <div className="bg-gray-100 text-center rounded p-2 mb-2">{user.email}</div>
                                            <div className="bg-gray-100 text-center rounded p-2 mb-2">{user.phone}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                    </div>
                </Card >
            </div >
        </>
    )
}


export default Users