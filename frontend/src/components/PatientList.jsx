import React, { useEffect, useState } from "react";
import { fetchPatients, dischargePatient } from "../api";

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients().then((res) => setPatients(res.data));
    }, []);

    const handleDischarge = (id) => {
        dischargePatient(id).then(() => {
            setPatients((prev) => prev.filter((patient) => patient._id !== id));
        });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Patient List</h2>
            <ul className="space-y-4">
                {patients.map((p) => (
                    <li key={p._id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                        <div>
                            <p className="font-medium text-lg text-gray-900">{p.name}</p>
                            <p className="text-sm text-gray-600">Disease: {p.disease}</p>
                            <p className="text-sm text-gray-600">
                                Bed: {p.bedId?.bedNumber || "Not Assigned"}
                            </p>
                        </div>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            onClick={() => handleDischarge(p._id)}
                        >
                            Discharge
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;