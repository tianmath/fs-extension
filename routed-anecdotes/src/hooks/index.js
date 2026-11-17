import { useEffect, useState } from 'react';
import anecdoteService from '../services/anecdotes';

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};

export const useAnecdotes = () => {
  const [anecdotes, setAnecdotes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await anecdoteService.getAll();
      setAnecdotes(data);
    })();
  }, []);

  const addAnecdote = async (anecdote) => {
    const anecdoteToAdd = {
      ...anecdote,
      votes: 0,
      id: Math.round(Math.random() * 10000),
    };

    await anecdoteService.createNew(anecdoteToAdd);
    setAnecdotes(anecdotes.concat(anecdoteToAdd));
  };

  const deleteAnecdote = async (id) => {
    await anecdoteService.remove(id);
    setAnecdotes(anecdotes.filter((anec) => anec.id !== id));
  };

  return { anecdotes, addAnecdote, deleteAnecdote };
};
