import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.add(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
