import React, { Component } from "react";
import "../css-components/app.css";
import NewWorkout from "./NewWorkout";
import Workout from "./Workout";

class App extends Component {
  state = {
    showWorkoutInput: false,
    workout: "",
    sets: "",
    reps: "",
    workouts: []
  };

  handleHideWorkout = () => {
    this.setState({ showWorkoutInput: !this.state.showWorkoutInput });
  };

  handleWorkoutChange = e => {
    this.setState({ workout: e.target.value });
  };

  handleSetsChange = e => {
    this.setState({ sets: e.target.value });
  };

  handleRepsChange = e => {
    this.setState({ reps: e.target.value });
  };

  handleNewWorkout = () => {
    const workout = {
      workout: this.state.workout,
      reps: this.state.reps,
      sets: this.state.sets,
      id: 0
    };

    this.state.workouts.forEach(workout => {
      workout.id++;
    });

    this.state.workouts.push(workout);

    this.setState({
      workouts: this.state.workouts,
      workout: "",
      sets: "",
      reps: ""
    });
  };

  handleDelete = workoutId => {
    const workouts = this.state.workouts.filter(w => w.id !== workoutId);
    this.setState({ workouts });
  };

  render() {
    return (
      <div className="container">
        <div className="input-wrapper">
          <p>Workout Tracker!</p>
          <div className="workoutButtons">
            <button
              onClick={() => {
                this.setState({ showWorkoutInput: true });
              }}
              className="addWorkout"
            >
              Add new workout
            </button>
          </div>
          {this.state.showWorkoutInput ? (
            <NewWorkout
              value={this.state}
              workoutChange={this.handleWorkoutChange}
              repsChange={this.handleRepsChange}
              setsChange={this.handleSetsChange}
              closeWorkout={this.handleHideWorkout}
              newWorkout={this.handleNewWorkout}
            />
          ) : null}
        </div>
        <div className="workout-wrapper">
          <p className="workout-title">Your Workouts</p>
          {this.state.workouts.length === 0 ? (
            <p className="no-workouts">You have no workouts! Pathetic.</p>
          ) : (
            this.state.workouts.map(workout => (
              <Workout
                key={workout.id}
                id={workout.id}
                workout={workout.workout}
                reps={workout.reps}
                sets={workout.sets}
                onDelete={this.handleDelete}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
