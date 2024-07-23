import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Details from "../components/Details";

const Main = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white-100">
            {isDesktopOrLaptop ? (
                <>
                    <Header />
                    <div className={`flex flex-grow  fixed top-80 left-1/2 transform -translate-x-1/2 px-4`}>
                        <Sidebar isOpen={true} closeSidebar={closeSidebar} />
                        <Details />
                    </div>
                </>
            ) : (
                <>
                    <Navbar className="fixed top-0 left-0 w-full bg-white z-20" toggleSidebar={toggleSidebar} />
                    <div className="relative flex flex-col mt-16">
                        <Details className="flex-grow" />
                        <Sidebar
                            className={`absolute top-16 left-0 w-full bg-white z-10 transition-transform transform ${isSidebarOpen ? "translate-y-0" : "translate-y-full"}`}
                            isOpen={isSidebarOpen}
                            closeSidebar={closeSidebar}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Main;
