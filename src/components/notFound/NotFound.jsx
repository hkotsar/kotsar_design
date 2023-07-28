import React from 'react';
import './notFound.scss';

function NotFound({ message }) {
  return (
    <div className="not-found">
      <h1>404 - Not found</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default NotFound
