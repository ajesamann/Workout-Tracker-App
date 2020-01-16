import React, { Component } from "react";
import "../css/app.css";
import NewWorkout from "./NewWorkout";
import Workout from "./Workout";

class App extends Component {
  state = {
    showWorkoutInput: false,
    showAddWeight: false,
    isKgChecked: false,
    hasBeenConverted: false,
    workout: "",
    sets: "",
    reps: "",
    weight: "",
    permWeight: "",
    convertedWeight: "",
    workouts: []
  };

  handleAddWeight = () => {
    this.setState({ showAddWeight: !this.state.showAddWeight });
  };

  handleRemoveWeight = () => {
    this.setState({
      showAddWeight: !this.state.showAddWeight,
      isKgChecked: false,
      weight: ""
    });
  };

  handleHideWorkout = () => {
    this.setState({
      showWorkoutInput: !this.state.showWorkoutInput,
      workout: "",
      sets: "",
      reps: "",
      weight: ""
    });
  };

  handleKgChecked = e => {
    let checked = e.target.checked;
    this.setState({ isKgChecked: checked });
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

  handleWeightChange = e => {
    this.setState({ weight: e.target.value, permWeight: e.target.value });
  };

  handleNewWorkout = () => {
    const workout = {
      workout: this.state.workout,
      reps: this.state.reps,
      sets: this.state.sets,
      weight: this.state.weight,
      permWeight: this.state.permWeight,
      hasBeenConverted: this.state.hasBeenConverted,
      useKg: this.state.isKgChecked,
      id: 0
    };

    this.state.workouts.forEach(workout => {
      workout.id++;
    });

    this.state.workouts.push(workout);

    this.setState({
      workouts: this.state.workouts
    });
  };

  handleDelete = workoutId => {
    const workouts = this.state.workouts.filter(w => w.id !== workoutId);
    this.setState({ workouts });
  };

  handleConversion = (
    kgBoolean,
    weightToBeConverted,
    permanentWeight,
    hasBeenConverted,
    workoutId
  ) => {
    if (kgBoolean === true) {
      let newWeight = weightToBeConverted * 2.205;
      this.setState(prev => ({
        workouts: prev.workouts.map(workout =>
          workout.id === workoutId
            ? {
                ...workout,
                weight: newWeight.toFixed(0).toString(),
                useKg: false,
                hasBeenConverted: !hasBeenConverted
              }
            : workout
        )
      }));
    } else if (kgBoolean === false) {
      let newWeight = weightToBeConverted / 2.205;
      this.setState(prev => ({
        workouts: prev.workouts.map(workout =>
          workout.id === workoutId
            ? {
                ...workout,
                weight: newWeight.toFixed(0).toString(),
                useKg: true,
                hasBeenConverted: !hasBeenConverted
              }
            : workout
        )
      }));
    }
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
              kgChecked={this.handleKgChecked}
              addWeight={this.handleAddWeight}
              removeWeight={this.handleRemoveWeight}
              workoutChange={this.handleWorkoutChange}
              repsChange={this.handleRepsChange}
              weightChange={this.handleWeightChange}
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
                convert={this.handleConversion}
                addWeight={this.state.showAddWeight}
                beenConverted={workout.hasBeenConverted}
                useKg={workout.useKg}
                weight={workout.weight}
                permWeight={workout.permWeight}
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
