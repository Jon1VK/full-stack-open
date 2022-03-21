import React from "react";
import { useDispatch } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteReducer";
import { createNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const vote = async () => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    dispatch(updateAnecdote(updatedAnecdote));
    dispatch(createNotification(`you voted '${anecdote.content}'`, 5));
  };

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={vote}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;
