// RegisterPage.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
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
      const response = await axios.post('http://localhost:3000/signup', formData);
      if(response.status){
        localStorage.setItem('acess_token', response.data.token)
        navigate('/user')
      }
    } catch (error) {
      console.log('error', error)
    }
  };


  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <div className="max-w-md w-full bg-white dark:bg-black p-8 rounded shadow-lg">
        <h2 className="text-2xl mb-4 font-semibold text-gray-800 dark:text-white">Register</h2>
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
