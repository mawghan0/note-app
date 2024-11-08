import PropTypes from "prop-types";
import ArchiveItem from "./ArchiveItem";
import DeleteItem from "./DeleteItem";

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
    <div className="mb-4 flex flex-col border-2 border-teal-200 rounded-xl px-2 sm:mb-0 sm:relative">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm font-extralight">{showFormattedDate(createdAt)}</p>
      <p className="text-justify sm:mb-24">{body}</p>
      <div className="mx-auto flex gap-24 my-3 sm:absolute sm:bottom-0 sm:w-[95%] sm:justify-center">
        <ArchiveItem
          archived={archived}
          id={id}
          datas={datas}
          setDatas={setDatas}
          setFilteredDatas={setFilteredDatas}
        />
        {archived ? null : (
          <DeleteItem
            id={id}
            datas={datas}
            setDatas={setDatas}
            setFilteredDatas={setFilteredDatas}
          />
        )}
      </div>
    </div>
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
