import './App.css';
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, useHistory } from 'react-router-dom'

function New(props) {

 let history = useHistory()

  useEffect(() => {
    console.log(history)
    window.location.assign('http://localhost:3000/auth')
  }, [])

  return (
    <div>
        New
    </div>
  );
}

export default New;
