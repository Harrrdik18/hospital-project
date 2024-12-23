import React from "react";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";
import BedList from "./components/BedList";

const App = () => (
    <div className="min-h-screen min-w-11 bg-gray-100 flex flex-col items-center p-6 space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">Hospital Management System</h1>
        <div className="w-full max-w-4xl space-y-6">
            <AddPatient />
            <PatientList />
            <BedList />
        </div>
    </div>
);

export default App;
