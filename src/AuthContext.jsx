// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) return false; // Usuario ya existe
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem(`notes_${email}`, JSON.stringify([])); // Notas iniciales vacías
    setUser({ email });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);