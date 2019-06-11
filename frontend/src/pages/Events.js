import React, { Component, Fragment } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";

import "./Events.css";

class EventsPage extends Component {
  state = {
    createing: false
  };

  startCreateEventHandler = () => {
    this.setState({ createing: true });
  };

  modalConfirmHandler = () => {};

  modalCancelHandler = () => {
    this.setState({ createing: false });
  };

  render() {
    return (
      <Fragment>
        {this.state.createing && <Backdrop />}
        {this.state.createing && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <p>Modal Content</p>
          </Modal>
        )}
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create Event
          </button>
        </div>
      </Fragment>
    );
  }
}

export default EventsPage;
