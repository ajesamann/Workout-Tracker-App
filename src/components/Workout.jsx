import React from "react";
import "../css-components/workout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

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
          <p className="reps">
            <b>{props.reps}</b> reps
          </p>
          <span className="x">x</span>
          <p className="sets">
            <b>{props.sets}</b> sets
          </p>
        </div>
      </div>
      <div onClick={() => props.onDelete(props.id)} className="delete">
        <FontAwesomeIcon icon={faMinusCircle} />
      </div>
    </div>
  );
};

export default Workout;
