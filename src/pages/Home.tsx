
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <div>
      <UserList />
      <div className="flex justify-center items-center bg-gray-100">
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add User
      </button>
    </div>
    </div>
  );
};

export default Home;
