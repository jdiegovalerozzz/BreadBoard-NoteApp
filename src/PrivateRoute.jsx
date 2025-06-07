// PrivateRoute.jsx
// import { useAuth } from './AuthContext';
// import { Navigate } from 'react-router-dom';

// export function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// }

// PrivateRoute.jsx
import { useAuth } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
}