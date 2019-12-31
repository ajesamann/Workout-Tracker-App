import React from "react";
import "../css-components/newworkout.css";

const NewWorkout = props => {
  return (
    <div className="new-workout-container">
      <div className="new-workout-inputs">
        <input
          type="text"
          value={props.value.workout}
          onChange={props.workoutChange}
          placeholder="Workout..."
        />
        <input
          type="text"
          value={props.value.reps}
          onChange={props.repsChange}
          placeholder="Total Reps..."
        />
        <input
          type="text"
          value={props.value.sets}
          onChange={props.setsChange}
          placeholder="Total Sets..."
        />
        {props.value.showAddWeight === true ? (
          <input
            value={props.value.weight}
            onChange={props.weightChange}
            placeholder="Weight"
            type="text"
          />
        ) : null}
      </div>
      <div className="new-workout-buttons">
        <button className="close" onClick={props.closeWorkout}>
          Close
        </button>
        {props.value.showAddWeight === false ? (
          <div className="add-weight" onClick={props.addWeight}>
            Add Weight
          </div>
        ) : (
          <div className="add-weight-con">
            <div className="remove-weight" onClick={props.removeWeight}>
              Remove Weight
            </div>
            <div className="kg">
              <label htmlFor="kg-checkbox" className="kg-label">
                <input
                  type="checkbox"
                  id="kg-checkbox"
                  onChange={props.kgChecked}
                />
                <div className="">Use kilograms</div>
                <div className="kg-custom-checkbox"></div>
              </label>
            </div>
          </div>
        )}
        <button className="submit-workout" onClick={props.newWorkout}>
          Submit Workout
        </button>
      </div>
    </div>
  );
};

export default NewWorkout;
