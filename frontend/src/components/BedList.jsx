import React, { useEffect, useState } from "react";
import { fetchBeds, addBed } from "../api";

const BedList = () => {
    const [beds, setBeds] = useState([]);
    const [bedNumber, setBedNumber] = useState("");

    useEffect(() => {
        fetchBeds().then((res) => setBeds(res.data));
    }, []);

    const handleAddBed = (e) => {
        e.preventDefault();

        if (!bedNumber.trim()) {
            alert("Please provide a valid bed number");
            return;
        }

        addBed({ bedNumber }).then((res) => {
            setBeds((prevBeds) => [...prevBeds, res.data]);
            setBedNumber("");
        });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Bed List</h2>
            <form onSubmit={handleAddBed} className="flex space-x-4 mb-4">
                <input
                    type="text"
                    value={bedNumber}
                    onChange={(e) => setBedNumber(e.target.value)}
                    placeholder="Enter Bed Number"
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                    Add Bed
                </button>
            </form>
            <ul className="space-y-4">
                {beds.map((bed) => (
                    <li key={bed._id} className="p-4 bg-gray-100 rounded-md">
                        <p className="font-medium text-gray-900">
                            Bed Number: {bed.bedNumber} -{" "}
                            <span className={bed.isOccupied ? "text-red-500" : "text-green-500"}>
                                {bed.isOccupied ? "Occupied" : "Free"}
                            </span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BedList;
