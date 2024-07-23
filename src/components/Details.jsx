const Details = () => {
    return (
        <div className=" inset-0 bg-white p-6 overflow-auto">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Details Component</h1>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Subtitle or Section Title</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
                {/* Add some placeholder text here if needed */}
                여기에 내용을 추가하세요. 화면이 꽉 차는 레이아웃을 사용할 때, 내용이 많을 경우 스크롤이 가능해야 합니다.
            </p>
            <div>
                <h3 className="text-lg font-semibold text-gray-700">Additional Information</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Detail item 1</li>
                    <li>Detail item 2</li>
                    <li>Detail item 3</li>
                </ul>
            </div>
        </div>
    );
};

export default Details;
