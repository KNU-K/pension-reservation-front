import React from "react";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ isOpen, closeSidebar }) => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

    return (
        <div style={{ width: "100px" }} className="box">
            <ul className="text-gray">
                <li className="py-2">
                    <a href="#">HOME</a>
                </li>
                <li className="py-2 group relative">
                    <a href="/prologue">PROLOGUE</a>
                    <ul className="ml-4 hidden group-hover:block">
                        <li className="py-1">
                            <a href="/story">STORY</a>
                        </li>
                        <li className="py-1">
                            <a href="/architecture">ARCHITECTURE</a>
                        </li>
                        <li className="py-1">
                            <a href="/location">LOCATION</a>
                        </li>
                    </ul>
                </li>
                <li className="py-2">
                    <a href="#">EXPERIENCE</a>
                </li>
                <li className="py-2 group relative">
                    <a href="#">ROOMS</a>
                    <ul className="ml-4 hidden group-hover:block">
                        <li className="py-1">
                            <a href="#">IN-HALE</a>
                        </li>
                        <li className="py-1">
                            <a href="#">EX-HALE</a>
                        </li>
                        <li className="py-1">
                            <a href="#">THE CALM</a>
                        </li>
                    </ul>
                </li>
                <li className="py-2 group relative">
                    <a href="#">RESERVATIONS</a>
                    <ul className="ml-4 hidden group-hover:block">
                        <li className="py-1">
                            <a href="#">reservation</a>
                        </li>
                        <li className="py-1">
                            <a href="#">confirm reservation</a>
                        </li>
                    </ul>
                </li>
                <li className="py-2 group relative">
                    <a href="#">INFORMATION</a>
                    <ul className="ml-4 hidden group-hover:block">
                        <li className="py-1">
                            <a href="#">마트</a>
                        </li>
                        <li className="py-1">
                            <a href="#">음식점</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
