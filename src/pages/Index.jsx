import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Slider settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <FaArrowLeft className="slick-prev" />,
    nextArrow: <FaArrowRight className="slick-next" />,
};

const slides = [
    { id: 1, src: "https://cdn.imweb.me/thumbnail/20220930/ba35a81bfc61d.jpg", alt: "Landscape 1" },
    { id: 2, src: "https://cdn.imweb.me/thumbnail/20220930/ba35a81bfc61d.jpg", alt: "Landscape 2" },
    { id: 3, src: "https://cdn.imweb.me/thumbnail/20220930/ba35a81bfc61d.jpg", alt: "Landscape 3" },
];

const Index = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            {/* Carousel */}
            <Slider {...settings} className="h-full">
                {slides.map((slide) => (
                    <div key={slide.id} className="w-full h-full">
                        <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </Slider>

            {/* Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                <div className="text-center mb-4">
                    <h1 className="text-xl md:text-3xl font-bold mb-4">저희 웹사이트에 오신 것을 환영합니다</h1>
                    <p className="text-sm md:text-lg">저희가 제공하는 놀라운 기능들을 발견하고 오늘부터 여정을 시작하세요!</p>
                </div>
                <div className="text-center">
                    <a href="/main" className="border-2 border-white text-white py-2 px-6 rounded-lg bg-transparent hover:bg-white hover:text-black transition duration-300">
                        자세히 보기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Index;
