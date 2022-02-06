import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({
  component: Component,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return <>{shouldNavigate ? <Navigate to={redirectTo} /> : <Component />}</>;
}
