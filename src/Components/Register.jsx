import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthButton from './AuthButton'
import AuthCard from './AuthCard'
import InputField from './InputField'

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(email, password)) {
      alert('¡Registro exitoso! Redirigiendo...');
      navigate('/notes'); 
    } else {
      alert('El usuario ya existe');
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
            title="Sign up"
            footer= {
                <p>
                    Already have an account? <a href="/">Sign in</a>
                </p>
            }       
        > 
            <form onSubmit={handleSubmit} className='auth-form'>
                <InputField
                    label="Email"
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="yourmail@email.com"
                    value={email} 
                    required
                />
                <InputField
                    label="Password"
                    type="password"
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="••••••••••••••••"
                />
        
                <AuthButton type="submit">Create account</AuthButton>
                
            </form>
        </AuthCard>
    </div>
  );
}
