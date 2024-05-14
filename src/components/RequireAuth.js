import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { _saveRedirecPath } from '../data/existingUsers';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  let location = useLocation();

  if (!isLoggedIn) {
    _saveRedirecPath(location.pathname)
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children

};

export default ProtectedRoute;