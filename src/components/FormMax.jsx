export default function FormMax() {
    return (
        <>
            {" "}
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
        </>
    );
}
