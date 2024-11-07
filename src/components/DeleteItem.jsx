import PropTypes from "prop-types";

function DeleteItem({ id, datas, setDatas, setFilteredDatas }) {
  const deleteData = (event) => {
    event.preventDefault();
    const updatedData = datas.filter((data) => data.id !== id);
    setDatas(updatedData);
    setFilteredDatas(updatedData);
  };
  return (
    <>
      <button onClick={deleteData}>Delete</button>
    </>
  );
}

DeleteItem.propTypes = {
  id: PropTypes.number.isRequired,
  datas: PropTypes.array.isRequired,
  setDatas: PropTypes.func.isRequired,
  setFilteredDatas: PropTypes.func.isRequired,
};

export default DeleteItem;
