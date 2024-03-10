import { useState } from "react";
import {
    Card,
    Input,
    Button
} from "@material-tailwind/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`https://jivansathi.vercel.app/api/login`, {
                email,
                password
            })

            const { token, user } = res.data;

            toast.success("Admin logged in successfully");

            localStorage.setItem('token', token);
            localStorage.setItem('id', user.user_id);
            localStorage.setItem('role', user.role)
            setTimeout(() => {
                user.role === "admin" ? navigate('/Admin') : navigate('/')
            }, 2000)

        } catch (error) {
            toast.error("Unable to login");
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="min-h-screen h-full pt-5">
            <Toaster position="top-center"></Toaster>
            {!localStorage.getItem('role') ? (
                <Card color="transparent" className="h-screen flex flex-col justify-center items-center" shadow={false}>
                    <img src="/Login/bg.webp" alt="bg" className="absolute hidden lg:inline h-[150vh] w-screen -z-10 opacity-10" />
                    <div className="text-4xl text-black font-semibold mb-2 mt-10 lg:mt-20">Login</div>
                    <div className="mt-4 mx-auto font-normal text-black my-2">
                    </div>
                    <div className="bg-white rounded-xl border p-10 flex flex-col gap-5 my-10 w-full max-w-md lg:max-w-lg xl:max-w-xl">
                        <form className="w-full">
                            <div className="mb-4 flex flex-col gap-6 items-center justify-center">
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    size="lg" color="black" label={
                                        <>
                                            Email <span className="text-red-500">*</span>
                                        </>
                                    } />
                                <Input
                                    size="lg"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    color="black"
                                    label={
                                        <>
                                            Password <span className="text-red-500">*</span>
                                        </>
                                    }
                                />
                            </div>
                            <Button className="mt-6 bg-[#800000]" type="submit" onClick={handleLogin} fullWidth>
                                SIGN IN
                            </Button>
                        </form>
                    </div>
                </Card>
            ) : (
                <Card color="transparent" className="h-screen flex flex-col justify-center items-center" shadow={false}>
                    <img src="/Login/bg.webp" alt="bg" className="absolute hidden lg:inline h-screen w-screen -z-10 opacity-10" />
                    <div className="text-4xl md:text-5xl lg:text-6xl text-black mb-6 font-bold text-center">Already logged in</div>
                    {
                        localStorage.getItem('role') === "admin" ? (<Link to="/Admin" className="text-2xl mb-2 mt-10 lg:mt-20">Click here to Admin Panel</Link>) : (<Link to="/" className="text-2xl mb-2 mt-10 lg:mt-20">Click here to Login</Link>)
                    }
                </Card>
            )}
        </div>
    );
}

export default Login;
