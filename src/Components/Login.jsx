import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router';
import AuthCard from './AuthCard';
import InputField from './InputField';
import AuthButton from './AuthButton';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill the form');
      return;
    }

    setLoading(true);
    
    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        navigate('/notes');
      } else {
        setError('Login Failed');
      }
    } catch (err) {
      setError('Login Failes');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
    }}>
      <AuthCard
        title="Welcome back!"
        footer={
          <>
            <p>Don't have an account? <a href="/register">Sign up</a></p>
          </>
        }
      >
        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '1rem',
            padding: '0.5rem',
            backgroundColor: '#ffeeee',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="yourmail@email.com"
            onChange={handleChange}
            required
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••••••••••"
            required
          />
          <AuthButton type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </AuthButton>
        </form>
      </AuthCard>
    </div>
  );
}