import React from "react";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ isOpen, closeSidebar }) => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

    return (
        <div
            className={`bg-white h-screen p-4  w-64 z-20 transition-transform duration-300 ease-in-out
                ${isOpen ? "transform translate-x-0" : "transform -translate-x-full"}
                ${isDesktopOrLaptop ? "ml-15 mr-15" : ""} // 데스크탑 화면에서 여백 추가
            `}
        >
            {/* 모바일에서만 보이는 닫기 버튼 */}
            {!isDesktopOrLaptop && (
                <button className="text-gray mb-4" onClick={closeSidebar}>
                    ✖
                </button>
            )}
            <ul className="text-gray">
                <li className="py-2">
                    <a href="#">HOME</a>
                </li>
                <li className="py-2 group relative">
                    <a href="#">PROLOGUE</a>
                    <ul className="ml-4 hidden group-hover:block">
                        <li className="py-1">
                            <a href="#">STORY</a>
                        </li>
                        <li className="py-1">
                            <a href="#">ARCHITECTURE</a>
                        </li>
                        <li className="py-1">
                            <a href="#">LOCATION</a>
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
