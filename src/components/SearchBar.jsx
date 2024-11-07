import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function SearchBar({ datas, setFilteredDatas }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input !== "") {
      const filteredData = datas.filter((data) =>
        data.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredDatas(filteredData);
    } else {
      setFilteredDatas(datas); // Kembalikan ke data awal jika input kosong
    }
  }, [input]);
  return (
    <>
      <input
        type="text"
        placeholder="Search note..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
}

SearchBar.propTypes = {
  datas: PropTypes.array.isRequired,
  setFilteredDatas: PropTypes.func.isRequired,
};

export default SearchBar;
