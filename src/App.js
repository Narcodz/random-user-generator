import './App.css';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserDetails from './components/UserDetails';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import axios from 'axios'

function App() {
  //states
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //effects
  useEffect(() => {
    getUsers()
  }, []);

  //functions

  const numerOfUsers = 560
  const getUsers = () => {
    setIsLoading(true)
    axios.get(`https://randomuser.me/api/?results=${numerOfUsers}`)
      .then(response => {
        setAllUsers(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      })
  }
  return (
    <div className="App">
      <Router>
        <div>
          <div className='main-section'>
            <Navbar getUsers={getUsers} />
            <Routes>
              <Route path="/" element={<UserList allUsers={allUsers} isLoading={isLoading} />} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
