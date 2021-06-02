import { useHistory } from 'react-router';

const HomeView = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/contacts');
  };
  return (
    <div>
      <h1>HomeView</h1>
      <button onClick={handleClick}>Phonebook</button>
    </div>
  );
};

export default HomeView;
