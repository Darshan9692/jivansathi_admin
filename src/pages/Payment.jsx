import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Tooltip } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdCancel, MdCheckCircle } from 'react-icons/md';

const Payment = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

    useEffect(() => {
        const fetchData = () => {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://jivansathi.vercel.app/api/requests',
              };
              axios.request(config)
              .then((response) => {
                setUsers(response.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
              })
              .catch((error) => {
                console.log(error);
            }); 
        }
        fetchData();
    }, []);

    console.log(users);

    const handleApproval = async (cId) => {
        try {

            await axios.get(`http://jivansathi.vercel.app/api/accept/${cId}`);

            const updatedData = users.filter(user => user.user_id !== cId);

            setUsers(updatedData);

            toast.success('Payment Approved successfully!');

        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to approve payment');
            console.error('Payment Approval Error:', error);
        }
    };


    const handleReject = async (cId) => {
        try {

            await axios.get(`http://jivansathi.vercel.app/api/reject/${cId}`)

            const updatedData = users.filter(user => user.user_id !== cId);

            setUsers(updatedData);

            toast.success('Payment Deleted successfully!');

        } catch (error) {
            toast.error("Failed to delete payment");
            console.error('Failed to delete payment:', error);
        }
    };

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
                                        <div key={index} className="border border-gray-500 bg-violet-400 cursor-pointer rounded-lg p-4 mb-4 group relative">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="py-1 px-2 rounded-full font-bold">{user.payor_name}</span>
                                            </div>
                                            <div className="bg-red-200 text-center rounded p-2 mb-2">{user.upi_transaction_id}</div>
                                            <div className="bg-red-200 text-center rounded p-2 mb-2">{user.from_upi_id}</div>
                                            <div className="flex justify-end items-center absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Tooltip content="Approve Coupon">
                                                    <MdCheckCircle
                                                        className="text-green-900 mx-2 cursor-pointer text-3xl" // Adjust the size as needed (text-3xl)
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleApproval(user.user_id);
                                                        }}
                                                    />
                                                </Tooltip>
                                                <Tooltip content="Reject Coupon">
                                                    <MdCancel
                                                        className="text-red-500 cursor-pointer text-3xl" // Adjust the size as needed (text-3xl)
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleReject(user.user_id);
                                                        }}
                                                    />
                                                </Tooltip>
                                            </div>
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

export default Payment;