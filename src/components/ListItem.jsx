import PropTypes from "prop-types";
import Item from "./Item";

function ListItem({ filteredDatas, showFormattedDate }) {
  return (
    <>
    <h2>Note</h2>
      {filteredDatas.filter(data => data.archived === false).map((data) => (
        <Item key={data.id} {...data} showFormattedDate={showFormattedDate}/>
      ))}
      <br />
    <h2>Archive</h2>
      {filteredDatas.filter(data => data.archived === true).map((data) => (
        <Item key={data.id} {...data} showFormattedDate={showFormattedDate}/>
      ))}
    </>
  );
}

ListItem.propTypes = {
  filteredDatas: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default ListItem;
