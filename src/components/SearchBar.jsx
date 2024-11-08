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
      className="bg-slate-100 h-8 rounded-md ml-14 pl-2 w-36 sm:w-48 sm:mr-4"
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
