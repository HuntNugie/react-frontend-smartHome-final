import DeviceCard from "./components/DeviceCard.jsx"
import Dht22Card from "./components/Dht22Card.jsx"
import FormMax from "./components/FormMax.jsx"
import ServoCard from "./components/ServoCard.jsx"
function App() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
                <div className="w-full max-w-5xl space-y-8">
                    {/* Header */}
                    <h1 className="text-4xl font-bold text-gray-800 text-center">Smart Home Dashboard</h1>

                    {/* Sensor Cards */}
                    <Dht22Card/>

                    {/* 6 Device Controls */}
                    <DeviceCard/>

                    {/* Form Pengaturan */}
                  <FormMax/>

                    {/* Servo Control Card */}
                  <ServoCard/>
                </div>
            </div>
        </>
    );
}

export default App;
