import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import { useState } from 'react';



function App() {

  const [activeTasks, setActiveTasks] = useState(() => {
    return localStorage.getItem('activeTasks')
      ? JSON.parse(localStorage.getItem('activeTasks'))
      : []
  })
  const [completedTasks, setCompletedTasks] = useState(() => {
    return localStorage.getItem('completedTasks')
    ? JSON.parse(localStorage.getItem('completedTasks'))
    : []
  })

  const handleActiveTasks = (newTasks) => {
    localStorage.setItem('activeTasks', JSON.stringify(newTasks));
    setActiveTasks(newTasks)
  }

  const handleCompletedTasks = (newTasks) => {
    localStorage.setItem('completedTasks', JSON.stringify(newTasks));
    setCompletedTasks(newTasks)
  }
  
  const value = {
    activeTasks,
    handleActiveTasks,
    completedTasks,
    handleCompletedTasks
  }

  return (
    <GlobalContext.Provider value={value}>
      <Routes>
        <Route path='/' element={<Layout><All /></Layout>} /> 
        <Route path='/active' element={<Layout><Active /></Layout>} /> 
        <Route path='/completed' element={<Layout><Completed /></Layout>} /> 
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
