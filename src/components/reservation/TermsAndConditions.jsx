import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Importing icons from Heroicons v2

const TermsAndConditions = () => {
    const [isGeneralOpen, setIsGeneralOpen] = useState(false);
    const [isUsageOpen, setIsUsageOpen] = useState(false);
    const [isFeesOpen, setIsFeesOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const toggleGeneral = () => setIsGeneralOpen(!isGeneralOpen);
    const toggleUsage = () => setIsUsageOpen(!isUsageOpen);
    const toggleFees = () => setIsFeesOpen(!isFeesOpen);
    const handleCheckboxChange = () => setIsChecked(!isChecked);

    return (
        <div className="flex justify-center items-start min-h-screen px-4 pt-10">
            <div className="w-full max-w-4xl">
                <div className="mb-2 border border-gray-300 rounded">
                    <button className="w-full flex justify-between items-center text-left p-3 text-lg font-medium text-gray-700" onClick={toggleGeneral}>
                        <span>예약 전 안내사항</span>
                        <span>{isGeneralOpen ? <ChevronDownIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}</span>
                    </button>
                    <Transition
                        show={isGeneralOpen}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="p-3 text-base text-gray-700">
                            <p>숙박 기준 인원은 2인으로 연령과 관계없이 최대 2인으로 운영되고 있습니다. ...</p>
                            {/* Add the rest of the content here */}
                        </div>
                    </Transition>
                </div>
                <div className="mb-2 border border-gray-300 rounded">
                    <button className="w-full flex justify-between items-center text-left p-3 text-lg font-medium text-gray-700" onClick={toggleUsage}>
                        <span>객실 이용 안내사항</span>
                        <span>{isUsageOpen ? <ChevronDownIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}</span>
                    </button>
                    <Transition
                        show={isUsageOpen}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="p-3 text-base text-gray-700">
                            <p>체크인은 16시, 체크아웃은 12시 입니다. ...</p>
                            {/* Add the rest of the content here */}
                        </div>
                    </Transition>
                </div>
                <div className="mb-2 border border-gray-300 rounded">
                    <button className="w-full flex justify-between items-center text-left p-3 text-lg font-medium text-gray-700" onClick={toggleFees}>
                        <span>요금 안내 및 예약, 취소, 환불 규정</span>
                        <span>{isFeesOpen ? <ChevronDownIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}</span>
                    </button>
                    <Transition
                        show={isFeesOpen}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="p-3 text-base text-gray-700">
                            <p>예약 신청 후 결제 방식에 따라 결제가 완료되면, 확정 문자가 발송됩니다. ...</p>
                            {/* Add the rest of the content here */}
                        </div>
                    </Transition>
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" id="termsCheckbox" className="mr-2" checked={isChecked} onChange={handleCheckboxChange} />
                    <label htmlFor="termsCheckbox" className="text-base text-gray-700">
                        모든 약관에 동의합니다.
                    </label>
                </div>
                <button className={`px-4 py-2 border-2 ${isChecked ? "border-red-500 text-red-500" : "border-gray-300 text-gray-300"} font-light rounded`} disabled={!isChecked}>
                    실시간 예약
                </button>
            </div>
        </div>
    );
};

export default TermsAndConditions;
