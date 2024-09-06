import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import { Link } from 'react-router-dom';
import myImage from '../assets/loading.gif';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const handleDelete = (id: number) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this user?")) {
        const dt = users.filter(item => item.id !== id);
        setUsers(dt);
      }
    }
  };

  useEffect(() => {
    fetchUsers()
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center min-h-screen"><img src={myImage} alt="Loading..." className="w-16 h-16" /></div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">User Management Website</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-800">{user.name}</td>
                <td className="py-2 px-4 border-b text-gray-600">{user.email}</td>
                <td className="py-2 px-4 border-b text-gray-600">{user.phone}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">Edit</Link>
                    <button 
                      onClick={() => handleDelete(user.id)} 
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
