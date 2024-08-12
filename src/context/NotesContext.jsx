import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getActiveNotes,
  getArchivedNotes,
  getNote,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  getUserLogged,
  putAccessToken,
  register,
} from "../utils/network-data";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [authedUser, setAuthedUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchActiveNotes = async () => {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setActiveNotes(data);
      }
    };

    const fetchArchivedNotes = async () => {
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setArchivedNotes(data);
      }
    };

    const fetchUser = async () => {
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      } else {
        navigate("/login");
      }
    };

    fetchActiveNotes();
    fetchArchivedNotes();
    fetchUser();
  }, []);

  const logoutHandler = () => {
    putAccessToken(null);
    setAuthedUser(null);
    navigate("/login");
  };

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  };

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthedUser(data);
      navigate("/");
    }
  };

  const onSearchHandler = (keyword) => {
    const filteredNotes = unfilteredNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  const addNewNoteHandler = async (newDataNote) => {
    const { error, data } = await addNote({
      title: newDataNote.title,
      body: newDataNote.body,
    });
    if (!error) {
      setActiveNotes((prevState) => [...prevState, data]);
      return { error: false, message: "Success!" };
    } else {
      return { error: true, message: "Failed!" };
    }
  };

  const onDeleteHandler = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      if (activeNotes.find((note) => note.id === id)) {
        const updatedNotes = activeNotes.filter((note) => note.id !== id);
        setActiveNotes(updatedNotes);
      } else {
        const updatedNotes = archivedNotes.filter((note) => note.id !== id);
        setArchivedNotes(updatedNotes);
      }
    }
  };

  const onArchiveHandler = async (id) => {
    if (activeNotes.find((note) => note.id === id)) {
      const note = activeNotes.find((note) => note.id === id);
      const { error } = note.archived
        ? await unarchiveNote(id)
        : await archiveNote(id);
      if (!error) {
        setActiveNotes((prevState) =>
          prevState.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
          )
        );
      }
    } else {
      const note = archivedNotes.find((note) => note.id === id);
      const { error } = note.archived
        ? await unarchiveNote(id)
        : await archiveNote(id);
      if (!error) {
        setArchivedNotes((prevState) =>
          prevState.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
          )
        );
      }
    }
  };

  return (
    <NotesContext.Provider
      value={{
        activeNotes,
        archivedNotes,
        authedUser,
        logoutHandler,
        onRegisterHandler,
        onLoginSuccess,
        onSearchHandler,
        addNewNoteHandler,
        onDeleteHandler,
        onArchiveHandler,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
