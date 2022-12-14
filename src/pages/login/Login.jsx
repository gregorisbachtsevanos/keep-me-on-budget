import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isPending } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<form className={styles['login-form']} onSubmit={handleSubmit}>
			<h2>Login</h2>
			<label>
				<span>email:</span>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<label>
				<span>password:</span>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			{isPending ? (
				<button className="btn" disabled>
					loading
				</button>
			) : (
				<button className="btn">Login</button>
			)}
			{error && <p>{error}</p>}
		</form>
	);
};

export default Login;
