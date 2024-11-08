import { getInitialData, showFormattedDate } from "./utils";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FormInput from "./components/FormInput";
import ListItem from "./components/ListItem";

function App() {
  const [datas, setDatas] = useState(getInitialData);
  const [filteredDatas, setFilteredDatas] = useState(datas);
  return (
    <div className="bg-slate-50 font-sans text-slate-900 flex flex-col">
      <div className="header flex h-11 bg-teal-200 place-items-center sm:justify-between">
        <h1 className="font-bold pl-2 text-teal-700">Note-App</h1>
        <SearchBar datas={datas} setFilteredDatas={setFilteredDatas} />
      </div>

      <FormInput
        datas={datas}
        setDatas={setDatas}
        setFilteredDatas={setFilteredDatas}
      />

      <ListItem
        filteredDatas={filteredDatas}
        showFormattedDate={showFormattedDate}
        setDatas={setDatas}
        setFilteredDatas={setFilteredDatas}
      />
    </div>
  );
}

export default App;
