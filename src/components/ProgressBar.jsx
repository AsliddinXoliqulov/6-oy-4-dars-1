import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ progress }) {
  return (
    <div className="mb-4">
      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-4 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-sm mt-1 text-center font-medium">
        {progress === 100
          ? "Barcha vazifalar bajarildi!"
          : `Bajarilgan: ${Math.round(progress)}%`}
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
