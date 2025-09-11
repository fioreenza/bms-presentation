import { useState } from "react";
import { Body } from "../component/Body";

export default function Button() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center max-w-[630px] text-justify space-y-6">
      <button
        onClick={handleModal}
        className="bg-blue-500 hover:bg-blue-700 text-4xl text-white font-bold py-4 px-8 rounded-xl"
      >
        Click Me
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleModal}
          ></div>

          {/* modal content */}
          <div className="relative bg-white rounded-2xl shadow-lg w-[480px] px-10 py-20 z-10">
            <Body size="2xl">You clicked the button 🎉</Body>

            <button
              onClick={handleModal}
              className="absolute top-3 right-6 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
