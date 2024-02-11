import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      
      if (response.status) { 
        const token = response.data.token;
        
        localStorage.setItem('access_token', token);

        navigate('/user')
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className=" min-h-[60vh] flex justify-center items-center">
      <div className="max-w-md w-full bg-white dark:bg-black p-8 rounded shadow-lg">
        <h2 className="text-2xl mb-4 font-semibold text-gray-800 dark:text-white">Login</h2>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 dark:text-white">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              value={formData.username} 
              onChange={handleChange} 
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-emerald-500" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 dark:text-white">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-emerald-500" 
            />
          </div>
          <div className="mt-6">
            <button type="submit" className=" bg-emerald-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
