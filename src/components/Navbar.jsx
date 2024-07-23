import React from "react";

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="bg-gray-500 p-4 fixed top-0 w-full z-10 flex items-center justify-between">
            {/* 왼쪽 끝에 위치한 버튼 */}
            <button className="text-white text-2xl lg:hidden" onClick={toggleSidebar}>
                ☰
            </button>

            {/* 가운데에 위치한 제목 */}
            <h1 className="text-white text-lg font-semibold">My Navbar</h1>

            {/* 빈 공간을 만들어 제목과 버튼 사이에 여백을 추가 */}
            <div className="flex-grow"></div>
        </nav>
    );
};

export default Navbar;
