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
      <h2>Note</h2>
      {filteredDatas.length == 0 ? (
        <h3>Tidak ada catatan</h3>
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
      <br />
      <h2>Archive</h2>
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
        <p>Tidak ada catatan di arsip</p>
      )}
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
