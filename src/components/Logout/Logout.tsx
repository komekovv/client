import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('acess_token');

    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;
