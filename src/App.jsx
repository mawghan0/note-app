import { getInitialData, showFormattedDate } from "./utils";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ListItem from "./components/ListItem";

function App() {
  const [datas, setDatas] = useState(getInitialData);
  const [filteredDatas, setFilteredDatas] = useState(datas);

  return (
    <>
      <SearchBar datas={datas} setFilteredDatas={setFilteredDatas} />
      <br />
      <ListItem filteredDatas={filteredDatas} showFormattedDate={showFormattedDate}/>
    </>
  );
}

export default App;
