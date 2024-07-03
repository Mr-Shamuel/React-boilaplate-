import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTodoData } from './Redux/Todos/TodosAction';

function App() {
  const {todosData} = useSelector((state) => state.todosData);
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    dispatch(getTodoData());
  },[dispatch])
  console.log(todosData);

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <h1>Welcome to React Boilaplate  <FontAwesomeIcon icon={faCoffee} /> </h1>
     
       
      
    </div>
  );
}

export default App;
