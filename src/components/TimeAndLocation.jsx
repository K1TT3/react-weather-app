import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Freitag, 16.12.2022 | Uhrzeit: 15:28
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Leipzig, DE</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
