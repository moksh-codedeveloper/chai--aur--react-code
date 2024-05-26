import { useState, useCallback, useEffect, useRef} from "react";
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null); // takes reference and helps to manipulate on that basics 

  const passwordGenerator = useCallback(() => { 
    // generates the password on the optimised callbacks for re-rendering and store that as a cache
    let  pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*(){}`~:;+-*/=?<>.,[]|";

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);
 /*  why setPassword instead of password? :-  
     because the password will generate everytime and it will run it continuous and form infinite loop optimise it every time basically means */

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();//shows the selection effect 
    passwordRef.current?.setSelectionRange(0, 101); //forms a range and selects the in range part of pass
    window.navigator.clipboard.writeText(password);// access of the clipboard for copy paste of password 
    //writeText means that it writes that text written on the input in clipboard 

  } , [password])
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  //useEffect reruns itself when something changes or updation happens 

  
  return (
   <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-500 bg-gray-800">
   <h1 className="text-white text-center">Password Generator</h1>
   <div 
   className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text" 
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
      ref={passwordRef}
      />

      <button 
      onClick={copyPasswordToClipboard}
      className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
   </div>
    <div className="flex text-sm gap-x-2 ">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={8}
        max={50}
        value={length}
        className="cursor-pointer"
        onChange={(e) => {setlength(e.target.value)}}
         />
         <label>Length = {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked = {numberAllowed}
        id = "numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Number</label>
      </div>
       <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked = {characterAllowed}
        id = "characterInput"
        onChange={() => {
          setCharacterAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput">character</label>
      </div>

    </div>
   </div>
   </>
  )
}

export default App
