import './App.css';
import './data/passChar.jsx'
import { uc, lc, nc, sc } from './data/passChar.jsx';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [upercase,setupercase] = useState(false)
  let [lowercase,setlowercase] = useState(false)
  let [number,setnumber] = useState(false)
  let [symbol,setsymbol] = useState(false)
  let [passwordlen,setpasswordlen] = useState(10)
  let [fpassword,setfpassword] = useState()
  

  let createpassword = () =>{
    let charset =''
    let finalpass=''
    if (upercase||lowercase||number||symbol) {
      if (upercase) charset+=uc;
      if (lowercase) charset+=lc;
      if (number) charset+=nc;
      if (symbol) charset+=sc;
      for(let i=0;i<passwordlen;i++){
        finalpass += charset.charAt(Math.floor(Math.random()*charset.length))
      }
      setfpassword(finalpass)

    }else{
      toast.warning("please one checkbox!");
    }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(fpassword)
  }
  return (
    <div className="App">
      <div className='prince'>
      <ToastContainer/>
      
      <div className='passwordBox'>
        <h2>password Generator</h2>
        <div className='passwordBoxin'>
          <input type='text' readOnly value={fpassword} /><button onClick={copypass}>copy</button>
        </div>
        <div className='passlength'>
          <label>password length</label>
          <input type='number' max={20} min={5} value={passwordlen} onChange={(event)=>setpasswordlen(event.target.value)}/>
        </div>
        <div className='passlength'>
        <label>include lowercase letter </label>
        <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)}/>
        </div>
        <div className='passlength'>
        <label>include upercase letter</label>
        <input type='checkbox' checked={upercase} onChange={()=>setupercase(!upercase)}/>
        </div>
        <div className='passlength'>
        <label>include number</label>
        <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}/>
        </div>
        <div className='passlength'>
        <label>include symbols</label>
        <input type='checkbox' checked={symbol} onChange={()=>setsymbol(!symbol)}/>
        </div>
        <div>
          <button onClick={createpassword}>generate password</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
