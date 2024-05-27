import React from 'react';
import {useState} from 'react'
//name, gender form, submit button, display data in para
const App2 = () => {
    const [person,setPerson] = useState({
        name: "",
        gender: ""
    });
    const [newName, setNewName] = useState("");
    const [newGender, setNewGender] = useState("");

    const submit = (e) =>{
        if (newName==="" || newGender===""){
            return;
        }
        const newPerson = {
            name: newName,
            gender: newGender
        }
        setNewName("")
        setNewGender("")
        console.log(newName, newGender)
        e.preventDefault();
    }
    const handleNameChange = (event) =>{
        setNewName(event.target.value)
    }
    const handleGenderChange = (event) => {
        setNewGender(event.target.value)
    } 

    return (
        <div>
        <form>
            <label>
                Name:
            <input type="text" value={newName} onChange={handleNameChange}></input>
            </label>
            <label>
                Gender:
            <input type="text" value={newGender} onChange={handleGenderChange}></input>   
            </label>
            <button type="submit" onClick={submit}>Submit</button>
        </form>    
        </div>
    );
}

export default App2;

/*two forms of ppl with name and age, two objects, submit both, display the greater age
and display how older are they*/