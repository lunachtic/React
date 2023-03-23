import React from "react";

function SortButtons({ handleSortByDate, handleSortByAlphabetical }) {
  return (
    <div>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByAlphabetical}>
        Sort Alphabetically
      </button>
    </div>
  );
}

export default SortButtons;