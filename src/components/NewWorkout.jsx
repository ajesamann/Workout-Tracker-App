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
      </div>
      <div className="new-workout-buttons">
        <button className="close" onClick={props.closeWorkout}>
          Close
        </button>
        <button className="submit-workout" onClick={props.newWorkout}>
          Submit Workout
        </button>
      </div>
    </div>
  );
};

export default NewWorkout;
