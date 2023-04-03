import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-end">
              <button
                className="bg-gray-300 rounded-full p-2"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-bold mb-2">Success!</h2>
              <p className="text-gray-600">
                Your form has been submitted successfully.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default SuccessModal;
