import React, { useState } from "react";
import { addPatient } from "../api";

const AddPatient = () => {
    const [formData, setFormData] = useState({ name: "", age: "", disease: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPatient(formData)
            .then(() => {
                alert("Patient Added");
                setFormData({ name: "", age: "", disease: "" });
            })
            .catch((err) => alert(err.response.data.message));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add Patient</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                    placeholder="Disease"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Add Patient
                </button>
            </form>
        </div>
    );
};

export default AddPatient;