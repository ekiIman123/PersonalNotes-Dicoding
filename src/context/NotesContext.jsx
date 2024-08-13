import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getActiveNotes,
  getArchivedNotes,
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
  const [isLoading, setIsLoading] = useState(false);

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

    const fetchData = async () => {
      if (authedUser) {
        await fetchActiveNotes();
        await fetchArchivedNotes();
      } else {
        await fetchUser();
      }
    };

    fetchData();
  }, [authedUser]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { error, data } = await getUserLogged();

    if (!error) {
      setAuthedUser(data);
      navigate("/");
    }
  };

  const logoutHandler = () => {
    putAccessToken(null);
    localStorage.removeItem("accessToken");
    setAuthedUser(null);
    navigate("/login");
  };

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate("/login");
    }
  };

  const addNewNoteHandler = async (newDataNote) => {
    setIsLoading(true);
    const { error, data } = await addNote({
      title: newDataNote.title,
      body: newDataNote.body,
    });
    if (!error) {
      setActiveNotes((prevState) => [...prevState, data]);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return { error: false, message: "Success!" };
    } else {
      return { error: true, message: "Failed!" };
    }
  };

  const onDeleteHandler = async (id) => {
    setIsLoading(true);
    const { error } = await deleteNote(id);
    if (!error) {
      setActiveNotes((prevState) => prevState.filter((note) => note.id !== id));
      setArchivedNotes((prevState) =>
        prevState.filter((note) => note.id !== id)
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const onArchiveHandler = async (id) => {
    setIsLoading(true);
    const note = activeNotes.find((note) => note.id === id);
    if (note) {
      const { error } = await archiveNote(id);
      if (!error) {
        setActiveNotes((prevState) =>
          prevState.filter((note) => note.id !== id)
        );
        setArchivedNotes((prevState) => [
          ...prevState,
          { ...note, archived: true },
        ]);
      }
    } else {
      const archivedNote = archivedNotes.find((note) => note.id === id);
      if (archivedNote) {
        const { error } = await unarchiveNote(id);
        if (!error) {
          setArchivedNotes((prevState) =>
            prevState.filter((note) => note.id !== id)
          );
          setActiveNotes((prevState) => [
            ...prevState,
            { ...archivedNote, archived: false },
          ]);
        }
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <NotesContext.Provider
      value={{
        activeNotes,
        archivedNotes,
        authedUser,
        isLoading,
        setIsLoading,
        logoutHandler,
        onRegisterHandler,
        onLoginSuccess,
        addNewNoteHandler,
        onDeleteHandler,
        onArchiveHandler,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
