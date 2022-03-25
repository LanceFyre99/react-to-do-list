import React from "react";
import { IListEntry } from "../types";

export default function ListEntry(props: IListEntry) {
    return (
      <>
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={props.checked} onChange={() => props.toggle(props.id)}/>
          <label className="todo-label" htmlFor="todo-0">
            {props.name}
          </label>
        </div>
        <button type="button" onClick={() => props.delete(props.id)}className="btn btn__danger">
          Delete
        </button>
        <br></br><br></br>
      </>
    );
  }