import React from 'react';
import  { createRoot }  from 'react-dom/client';
import BallList from './components/BallList';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<BallList  />)
