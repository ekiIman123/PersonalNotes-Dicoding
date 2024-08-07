import React from "react";
import { getInitialData } from "../utils";
import AppBody from "./AppBody";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      unfilteredNotes: getInitialData(),
    };

    console.log(this.state.notes);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.addNewNoteHandler = this.addNewNoteHandler.bind(this);
    this.onDetailHandler = this.onDetailHandler.bind(this);
  }

  onSearchHandler = (keyword) => {
    const filteredNotes = this.state.unfilteredNotes.filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    this.setState({ notes: filteredNotes });
  };

  addNewNoteHandler(newDataNote) {
    try {
      this.setState((prevState) => {
        return {
          notes: [newDataNote, ...prevState.notes],
          unfilteredNotes: [newDataNote, ...prevState.unfilteredNotes],
        };
      });
      return {
        error: false,
        message: "Success!",
      };
    } catch (error) {
      return {
        error: true,
        message: "Failed!",
      };
    }
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ ...this.state, notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const modifiedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      });

      return {
        notes: modifiedNotes,
      };
    });
  }

  onDetailHandler(id) {
    const note = this.state.notes.find((note) => note.id === id);
    return note;
  }

  render() {
    return (
      <>
        <AppHeader onSearch={this.onSearchHandler} />
        <AppBody
          notes={this.state.notes}
          addNewNote={this.addNewNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onDetailHandler={this.onDeleteHandler}
        />
        <AppFooter />
      </>
    );
  }
}

export default App;
