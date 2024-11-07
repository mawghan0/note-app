import PropTypes from "prop-types";
import { useState } from "react";

function FormInput({ datas, setDatas, setFilteredDatas }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLenght = 50;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= maxTitleLenght) {
      setTitle(e.target.value);
    }
  };

  const addData = (event) => {
    event.preventDefault();
    const newNote = {
      id: +new Date(),
      title: title,
      body: body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    const updatedData = [...datas, newNote];
    setDatas(updatedData);
    setFilteredDatas(updatedData);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <form onSubmit={addData}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <p>Karakter yang dapat anda gunakan tersisa {maxTitleLenght - title.length}</p>
        <br />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
    </>
  );
}

FormInput.propTypes = {
  datas: PropTypes.array.isRequired,
  setDatas: PropTypes.func.isRequired,
  setFilteredDatas: PropTypes.func.isRequired,
};

export default FormInput;
