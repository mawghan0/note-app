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
      {filteredDatas
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
        ))}
      <br />
      <h2>Archive</h2>
      {filteredDatas
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
        ))}
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
