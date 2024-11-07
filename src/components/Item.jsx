import PropTypes from "prop-types";

function Item({ title, body, createdAt, showFormattedDate }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default Item;
