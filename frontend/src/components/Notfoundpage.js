import React from 'react';
import './Notfound.css'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className='container'>
    <div className="error-page">
      <h1>404 Bad Request</h1>
      <p>The request cannot be fulfilled due to bad syntax.</p>
      <Link to="/" >Go to Home</Link>

    </div>
    </div>
  );
};

export default ErrorPage;