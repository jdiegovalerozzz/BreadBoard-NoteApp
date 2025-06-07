import { useAuth } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
}