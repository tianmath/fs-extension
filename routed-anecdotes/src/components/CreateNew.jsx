import { useNavigate } from 'react-router';
import { useAnecdotes, useField } from '../hooks';

const CreateNew = () => {
  const content = useField('text');
  const author = useField('text');
  const info = useField('text');
  const { addAnecdote } = useAnecdotes();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnecdote({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate('/');
  };

  const handleReset = (e) => {
    e.preventDefault();
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} reset='' name='content' />
        </div>
        <div>
          author
          <input {...author} reset='' name='author' />
        </div>
        <div>
          url for more info
          <input {...info} reset='' name='info' />
        </div>
        <button type='submit'>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
