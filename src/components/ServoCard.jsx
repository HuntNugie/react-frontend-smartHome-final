export default function ServoCard() {
    return (
        <>
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
        </>
    );
}
