import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.navigation}>
      {!isLoggedIn && (
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
