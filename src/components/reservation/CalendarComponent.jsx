import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { useNavigate } from "react-router-dom"; // For navigation

import "./CalendarComponent.css";
// Dummy reservation data
const reservations = {
    "2024-07-26": [
        { room: "Suite A", status: "available" },
        { room: "Suite B", status: "fully booked" },
    ],
    "2024-07-27": [{ room: "Suite C", status: "available" }],
    "2024-07-28": [
        { room: "Suite A", status: "fully booked" },
        { room: "Suite B", status: "available" },
    ],
    "2024-07-29": [
        { room: "Suite A", status: "available" },
        { room: "Suite B", status: "available" },
    ],
    "2024-07-30": [
        { room: "Suite A", status: "available" },
        { room: "Suite B", status: "available" },
    ],
    "2024-07-31": [
        { room: "Suite A", status: "available" },
        { room: "Suite B", status: "available" },
    ],
    // Add more dates and reservations as needed
};

const CalendarComponent = () => {
    const navigate = useNavigate();

    // Function to get events based on reservations
    const getEvents = () => {
        return Object.keys(reservations).map((date) => {
            const dateEvents = reservations[date];
            return {
                title: dateEvents.map((e) => `${e.status === "fully booked" ? "(완)" : "(가)"} ${e.room}`).join("\n"),
                start: date,
                description: dateEvents.map((e) => `${e.status === "fully booked" ? "(완)" : "(가)"} ${e.room}`).join("\n"),
            };
        });
    };

    // Handle click on an event
    const handleEventClick = (info) => {
        const rooms = info.event.extendedProps.description.split("\n").filter((desc) => desc.startsWith("(가)"));
        if (rooms.length > 0) {
            navigate(`/reservation/${rooms[0].substring(3)}`);
        }
    };

    return (
        <div className="w-full max-w-4xl h-full p-4">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={getEvents()}
                eventClick={handleEventClick}
                dayHeaderClassNames={"bg-gray-200 text-gray-700"}
                contentHeight="auto"
                height="100%"
                width="100%"
                eventContent={(arg) => (
                    <div className="whitespace-pre-wrap">
                        {arg.event.title.split("\n").map((line, index) => (
                            <div key={index} className={`${line.startsWith("(완)") ? "bg-red-200 text-red-700" : "bg-blue-200 text-blue-700"} p-1 my-1 rounded`}>
                                {line}
                            </div>
                        ))}
                    </div>
                )}
            />
        </div>
    );
};

export default CalendarComponent;
