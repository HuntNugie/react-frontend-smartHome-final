export default function DeviceCard() {
    return (
        <>
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
        </>
    );
}
