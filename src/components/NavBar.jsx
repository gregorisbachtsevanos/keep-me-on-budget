import styles from './NavBar.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.title}>NavBar</li>
				<li><Link to='/login'>Login</Link></li>
				<li><Link to='signup'>Signup</Link></li>
			</ul>
		</nav>
	);
};

export default NavBar;