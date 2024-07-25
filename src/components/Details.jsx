import React from "react";

const Details = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto bg-white p-6 overflow-auto">
            <div className="space-y-6">
                {/* Spacer */}
                <div className="h-8"></div>

                {/* Text Section */}
                <div className="text-center">
                    <p className="text-2xl font-bold leading-relaxed">
                        <span className="text-xl font-semibold">취호가 趣虎家</span>
                    </p>
                    <p className="text-lg italic leading-relaxed">"뜻을 취하는 호랑이 사원"</p>
                    <p className="mt-4 text-base leading-relaxed">취 (趣)는 "마음이 쏠리는 방향"을 의미하며, 불가에서는 "지난 날에 지내온 업으로 인해 현재에 다다른다"는 의미가 있다.</p>
                    <p className="mt-4 text-base leading-relaxed">
                        호 (虎)는 "범"을 의미하며, 호랑이는 예로부터 산군이라 불리며 우리 민족의 신비한 힘이 있는 길상적인 의미를 갖는다. 또한 "옛날 마을에 큰 바위가 있었는데 호랑이가 자주 올라
                        울었다" 하는 호명리와 일맥상통한다.
                    </p>
                    <p className="mt-4 text-base leading-relaxed">가 (家)는 "우리네들이 마음 놓고 편히 쉴 수 있는 공간"을 의미한다.</p>
                    <p className="mt-4 text-base leading-relaxed">
                        지난 날 지내온 삶의 방향이 흔들리는 (뜻을 이루지 못한)이들에게 온전한 쉼을 통해 스스로 뜻을 찾아갈 수 있는 "몸과 마음을 회복할 수 있는 호랑이 사원"을 만들고자 하였다.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="relative h-80">
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">Gallery Placeholder</span>
                            </div>
                            {/* Replace the placeholder with an actual image gallery */}
                            <img src="https://cdn.imweb.me/thumbnail/20221007/88469c91a3862.jpeg" alt="Gallery" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Text Section with attribution */}
                <div className="text-right text-sm text-gray-500 mt-4">치유의 숲 평창 (김영일 作)</div>
            </div>
        </div>
    );
};

export default Details;
