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
      <h2 className="font-bold text-base text-center mt-3">Tambahkan Note</h2>
      <form
        onSubmit={addData}
        className="flex flex-col rounded-xl bg-slate-200 px-2 border my-2 w-[95%] self-center sm:w-3/4 xl:w-6/12"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className="bg-slate-50 mt-2 w-full rounded-md pl-2 h-8"
        />
        <p className="text-sm mb-2">
          Karakter yang dapat anda gunakan tersisa{" "}
          {maxTitleLenght - title.length}
        </p>
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="bg-slate-50 w-full rounded-md pl-2 h-8"
        />
        <button className="bg-teal-200 rounded-md p-1 my-2" type="submit">Add Note</button>
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
