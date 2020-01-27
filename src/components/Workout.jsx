import React from "react";
import "../css/workout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Workout = props => {
  return (
    <div className="workout-main-container">
      <div className="workout-container">
        <p className="workout">
          <b>{props.workout}</b>
        </p>
        {props.weight.length > 0 ? (
          <div
            className="weight"
            onClick={() =>
              props.convert(
                props.useKg,
                props.weight,
                props.permWeight,
                props.beenConverted,
                props.id
              )
            }
          >
            {props.beenConverted === false ? (
              <span>{props.permWeight}</span>
            ) : (
              <span>{props.weight}</span>
            )}{" "}
            {props.useKg === true ? <span> kg</span> : <span> lbs</span>}
          </div>
        ) : null}
        <div className="workout-numbers">
          <p className="reps">{props.reps} reps</p>
          <span className="x">x</span>
          <p className="sets">{props.sets} sets</p>
        </div>
        <div onClick={() => props.onDelete(props.id)} className="delete">
          <div className="icon">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
