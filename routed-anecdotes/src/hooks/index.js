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

  return anecdotes;
};
