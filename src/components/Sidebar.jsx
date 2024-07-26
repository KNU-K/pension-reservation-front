import React from "react";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ isOpen, closeSidebar }) => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

    return (
        <div style={{ width: "100px" }} className="box">
            <ul className="text-gray">
                <li className="py-2">
                    <a href="/">HOME</a>
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
                    <a href="/experience">EXPERIENCE</a>
                </li>
                <li className="py-2 group relative">
                    <a href="/in-hale">ROOMS</a>
                    <ul className="ml-4 hidden group-hover:block">
                        <li className="/in-hale">
                            <a href="#">IN-HALE</a>
                        </li>
                        <li className="/ex-hale">
                            <a href="#">EX-HALE</a>
                        </li>
                        <li className="/the-calm">
                            <a href="#">THE CALM</a>
                        </li>
                    </ul>
                </li>
                <li className="py-2 group relative">
                    <a href="/reservation">RESERVATIONS</a>
                    <ul className="ml-4 hidden group-hover:block">
                        <li className="py-1">
                            <a href="/reservation">reservation</a>
                        </li>
                        <li className="py-1">
                            <a href="/confirm-reservation">confirm reservation</a>
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
