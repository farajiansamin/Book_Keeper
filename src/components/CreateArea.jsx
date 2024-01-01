import React, { useState } from "react";
import AddCIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [expanded, setExpanded] = useState(false);

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
  function handleExpansion() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onClick={handleExpansion}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={expanded ? "4" : "1"}
          value={note.content}
        />
        {expanded && (
          <Zoom in={true}>
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
