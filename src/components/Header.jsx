import React from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

    return (
        <header className={`fixed top-0 w-full h-60 bg-white items-center px-4 z-50 ${!isDesktopOrLaptop ? "hidden" : ""}`}>
            <div className="flex items-center h-full">
                {/* 로고 이미지 */}
                <img
                    style={{ marginLeft: "80px" }}
                    src="https://cdn.imweb.me/thumbnail/20221004/b7bbe7f692496.png" // 로고 이미지 URL을 여기에 넣어주세요.
                    alt="Logo"
                    className="w-40" // 로고 이미지 높이 조정
                />
            </div>
        </header>
    );
};

export default Header;
