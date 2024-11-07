import { getInitialData } from "./utils";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [datas, setDatas] = useState(getInitialData);
  const [filteredDatas, setFilteredDatas] = useState(datas);

  return (
    <>
      <SearchBar datas={datas} setFilteredDatas={setFilteredDatas} />
      
    </>
  );
}

export default App;
