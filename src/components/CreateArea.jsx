import React, { useState } from "react";
import AddCIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    author: "",
    genres: "",
  });
  const [expanded, setExpanded] = useState(false);
  //const [tag, setTag] = useState({ author: "", genres: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
    // setTag((prevTag) => {
    // return { ...prevTag, [name]: value };
    // });
  }

  function handleClick(event) {
    event.preventDefault();
    props.add(note);
    setNote({ title: "", content: "", author: "", genres: "" });
  }
  function handleExpansion() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <div>
            <input
              onChange={handleChange}
              name="title"
              placeholder="Title"
              value={note.title}
            />
            <input
              id="tag"
              onChange={handleChange}
              name="author"
              placeholder="Author"
              value={note.author}
            ></input>
            <input
              id="tag"
              onChange={handleChange}
              name="genres"
              placeholder="Genres"
              value={note.genres}
            ></input>
          </div>
        )}

        <textarea
          onClick={handleExpansion}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={expanded ? "6" : "1"}
          value={note.content}
        />
        {expanded && (
          <Zoom in={expanded}>
            <Fab>
              <AddCIcon onClick={handleClick} />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
