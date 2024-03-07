import { useState } from 'react'
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

const AdminPanel = () => {

    const [selectedButton, setSelectedButton] = useState('Payment');
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const navigate = useNavigate();

    // const handleLogout = async () => {
    //     try {
    //         const response = await axios.get(`https://backend.qwiksavings.com/api/logout`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         if (response && response.status === 200) {
    //             alert(response.data.message);
    //             localStorage.clear();
    //             navigate("/");
    //         } else {
    //             alert("Logout failed. Please try again.");
    //         }
    //     } catch (error) {
    //         if (error.response && error.response.data && error.response.data.message) {
    //             alert(error.response.data.message);
    //         } else {
    //             alert("An error occurred. Please try again later.");
    //         }
    //         console.error(error);
    //     }
    // }
    return (

        <div>
            <h2 className='font-bold md:text-2xl text-base  text-center mt-10 flex items-center justify-center'> <hr className="mx-4  md:ml-8 md:mr-4 w-16 h-[3px] bg-black border-0 rounded  " />Welcome to Admin Panel of Jeevansathi<hr className="mx-4 md:ml-4 md:mr-8 w-16 h-[3px]  bg-black border-0 rounded  " /></h2>
            <div className='flex items-center justify-center m-2'>
                <Button className=' bg-blue-500 text-white p-2' onClick={() => { handleLogout() }}>Logout</Button>
            </div>
            <div className="buttons text-center">
                <button
                    className={`bg-white py-2 px-5 m-4 md:m-4 hover:text-black hover:border-2 hover:border-black duration-400 
          ${selectedButton === 'Payment' ? 'text-black border-2 border-black' : 'text-gray-800 border-2 border-transparent'}  
          `}
                    onClick={() => handleButtonClick('Payment')}
                >
                    Payments
                </button>
            </div>
            {
                selectedButton === 'Payment' && <Payment /> 
            }
        </div>
    )
}

export default AdminPanel