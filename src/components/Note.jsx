import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tag from "./Tag";

function Note(props) {
  console.log(props);
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="tag_container">
        <Tag title={props.tagAuthor} />
        <Tag title={props.tagGenres} />
      </div>

      <button onClick={() => props.deleteNote(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
