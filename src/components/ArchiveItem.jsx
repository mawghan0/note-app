import PropTypes from "prop-types";

function ArchiveItem({ archived, id, datas, setDatas, setFilteredDatas }) {
  const archiveData = (event) => {
    event.preventDefault();
    const updatedData = datas.map((data) =>
      data.id === id ? { ...data, archived: !data.archived } : data
    );
    setDatas(updatedData);
    setFilteredDatas(updatedData);
  };
  return (
    <>
      <button onClick={archiveData} className="bg-yellow-400 py-2 px-4 rounded-full">
        {archived ? <p>Unarchive</p> : <p>Archive</p>}
      </button>
    </>
  );
}

ArchiveItem.propTypes = {
  archived: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  datas: PropTypes.array.isRequired,
  setDatas: PropTypes.func.isRequired,
  setFilteredDatas: PropTypes.func.isRequired,
};

export default ArchiveItem;
