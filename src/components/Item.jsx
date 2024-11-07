import PropTypes from "prop-types";
import ArchiveItem from "./ArchiveItem";

function Item({
  title,
  body,
  createdAt,
  archived,
  showFormattedDate,
  id,
  datas,
  setDatas,
  setFilteredDatas,
}) {
  return (
    <>
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
      <ArchiveItem
        archived={archived}
        id={id}
        datas={datas}
        setDatas={setDatas}
        setFilteredDatas={setFilteredDatas}
      />
    </>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  datas: PropTypes.array.isRequired,
  setDatas: PropTypes.func.isRequired,
  setFilteredDatas: PropTypes.func.isRequired,
};

export default Item;
