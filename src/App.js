import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';

function App() {
  
  return (
    <div className='App'>
      <h1>React-Material-UI</h1>
      
      <Button color='primary'
      variant='contained'
       //disabled
      size='small'
      onClick={()=>{alert("button clicked")}} 
      startIcon={<Delete/>}

      // endIcon={<Delete/>}

      
      >Material UI button</Button>
      

    </div>
    
  );
}

export default App;
