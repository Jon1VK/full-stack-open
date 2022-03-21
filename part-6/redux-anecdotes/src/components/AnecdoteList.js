import React from "react";
import { useSelector } from "react-redux";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes
      .filter((a) =>
        a.content.toLowerCase().includes(state.filter.toLowerCase())
      )
      .sort((a1, a2) => a2.votes - a1.votes)
  );

  return (
    <>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </>
  );
};

export default AnecdoteList;
