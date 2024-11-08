import PropTypes from "prop-types";
import Item from "./Item";

function ListItem({
  filteredDatas,
  showFormattedDate,
  setDatas,
  setFilteredDatas,
}) {
  return (
    <>
      <h2 className="font-bold text-xl underline mt-3 px-2">Note</h2>
      <div className="flex flex-col mt-3 px-2 w-[95%] mx-auto sm:grid-cols-2 sm:grid sm:gap-3 lg:grid-cols-3 xl:grid-cols-4 xl:w-full">
        {filteredDatas.length == 0 ? (
          <h3 className="font-bold text-lg mt-3 px-2">Tidak ada catatan</h3>
        ) : (
          filteredDatas
            .filter((data) => data.archived === false)
            .map((data) => (
              <Item
                key={data.id}
                {...data}
                showFormattedDate={showFormattedDate}
                datas={filteredDatas}
                setDatas={setDatas}
                setFilteredDatas={setFilteredDatas}
              />
            ))
        )}
      </div>
      <h2 className="font-bold text-xl underline mt-3 px-2">Archive</h2>
      <div className="mb-16 flex flex-col mt-3 px-2 w-[95%] mx-auto sm:grid-cols-2 sm:grid sm:gap-3 lg:grid-cols-3 xl:grid-cols-4 xl:w-full">
        {filteredDatas.filter((data) => data.archived === true).length > 0 ? (
          filteredDatas
            .filter((data) => data.archived === true)
            .map((data) => (
              <Item
                key={data.id}
                {...data}
                showFormattedDate={showFormattedDate}
                datas={filteredDatas}
                setDatas={setDatas}
                setFilteredDatas={setFilteredDatas}
              />
            ))
        ) : (
          <h3 className="font-bold text-lg mt-3 px-2">Tidak ada catatan</h3>
        )}
      </div>
    </>
  );
}

ListItem.propTypes = {
  filteredDatas: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  setDatas: PropTypes.func.isRequired,
  setFilteredDatas: PropTypes.func.isRequired,
};

export default ListItem;
