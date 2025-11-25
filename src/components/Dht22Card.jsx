export default function Dht22Card() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Temperature</h2>
                    <p className="text-4xl font-bold text-blue-600">--°C</p>
                    <p className="text-sm text-gray-500 mt-2">Suhu saat ini</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Humidity</h2>
                    <p className="text-4xl font-bold text-green-600">--%</p>
                    <p className="text-sm text-gray-500 mt-2">Kelembapan</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Heat Index</h2>
                    <p className="text-4xl font-bold text-red-600">--°C</p>
                    <p className="text-sm text-gray-500 mt-2">Suhu terasa</p>
                </div>
            </div>
        </>
    );
}
