import React from 'react';
import  { createRoot }  from 'react-dom/client';
// import Test from './components/common/CheckBoxGroup/Test';
// import Test from './components/common/RadioBoxGroup/Test';
import Test from './components/common/Select/Test';



const container = document.getElementById('root');
const root = createRoot(container);


root.render(<Test />)