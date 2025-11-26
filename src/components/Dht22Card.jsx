import axios from "axios";
import { useEffect, useState } from "react";

export default function Dht22Card() {
    const [dht22,setDht22] = useState({
        temperature : 0,
        humidity : 0,
        heatIndex : 0
    });
    const baseUrl = import.meta.env.VITE_BASE_URL;


    useEffect(()=>{
        const handleRequestDht = async()=>{
            const res = await axios.get(`${baseUrl}/api/dht22/all`);
            const data = res.data;
            setDht22({
                temperature : data.temperature,
                humidity:data.humidity,
                heatIndex:data.heatIndex
            });
        }
        setInterval(handleRequestDht,2000);
    },[]);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Temperature</h2>
                    <p className="text-4xl font-bold text-blue-600">{dht22.temperature}°C</p>
                    <p className="text-sm text-gray-500 mt-2">Suhu saat ini</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Humidity</h2>
                    <p className="text-4xl font-bold text-green-600">{dht22.humidity}%</p>
                    <p className="text-sm text-gray-500 mt-2">Kelembapan</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Heat Index</h2>
                    <p className="text-4xl font-bold text-red-600">{dht22.heatIndex}°C</p>
                    <p className="text-sm text-gray-500 mt-2">Suhu terasa</p>
                </div>
            </div>
        </>
    );
}
