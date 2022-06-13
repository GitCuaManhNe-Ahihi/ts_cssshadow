import React, { useContext, useRef } from "react";
import { AppContext } from "../context/AppProvider";
import classes from "./LayerElement.module.css";
import { ConvertColor } from "../util";
import { LayerElementProps } from "../Interface.module";
const LayerElement: React.FC<LayerElementProps> = (
  props: LayerElementProps
) => {
  const { state, dispatch } = useContext(AppContext);
  const {value} = props
  const { right, down, blur, spread, opacity, color, inset } = value;

  return (
    <li
      id={props.ids}
      onClick={() => dispatch({ type: "changeId", payload: +props.ids })}
      style={{ background: `${state.id == +props.ids ? "#5C6AC4" : "white"}` }}
      draggable="true"
      className={`layer ${classes.containlayer}`}
      onDragStart={(e) => {props.OnDragStart(e)}}
      onDragEnter={(e) => {props.OnDragEnter(e)}}
      onDragLeave={(e) => {props.OnDragLeave(e)}}
      onDragEnd={(e) => {props.OnDragEnd(e)}}
    >
      {`${inset ? "Inset" : ""} ${right}px ${down}px ${blur}px ${spread}px  
            ${ConvertColor(color, opacity)}`}
      <button onClick={() => dispatch({ type: "remove" })}>xóa</button>
    </li>
  );
};
export default LayerElement;
