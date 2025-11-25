function App() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
                <div className="w-full max-w-5xl space-y-8">
                    {/* Header */}
                    <h1 className="text-4xl font-bold text-gray-800 text-center">Smart Home Dashboard</h1>

                    {/* Sensor Cards */}
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

                    {/* 6 Device Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="bg-white shadow-md p-6 rounded-2xl flex flex-col items-center">
                                <div className="w-full flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-gray-700">Device {num}</h3>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                                        ON
                                    </span>
                                </div>

                                <p className="mb-4 text-sm text-gray-600 text-center">Perangkat {num} siap digunakan</p>

                                <button className="px-6 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-900 transition">
                                    Toggle On/Off
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Form Pengaturan */}
                    <div className="bg-white shadow-lg p-6 rounded-2xl w-full">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pengaturan Threshold</h2>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Max Temperature</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                                    placeholder="Masukkan suhu maksimum"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Max Humidity</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                                    placeholder="Masukkan kelembapan maksimum"
                                />
                            </div>

                            <button className="col-span-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                Simpan Pengaturan
                            </button>
                        </form>
                    </div>

                    {/* Servo Control Card */}
                    <div className="w-full flex justify-center">
                        <div className="bg-white shadow-lg p-6 rounded-2xl w-full max-w-md text-center">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-2xl font-semibold text-gray-700">Servo Control</h2>
                                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                                    Tertutup
                                </span>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">
                                Status servo: <span className="font-medium">Tertutup</span>
                            </p>

                            <div className="flex gap-3 justify-center">
                                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
                                    Buka
                                </button>
                                <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
