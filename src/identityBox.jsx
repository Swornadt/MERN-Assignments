import React from 'react';
import {useState} from 'react';

const IdentityBox = ({title,onAgeChange,onNameChange}) => {
    const [newName,setNewName] = useState("");
    const [newAge,setNewAge] = useState("");
    const [arrObjPerson,setArrObjPerson] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        if(newName==="" || newAge===""){
            return;
        }
        
        const newPerson = {
            name: newName,
            age: newAge,
        }
        console.log("current age",newAge)
        setArrObjPerson([...arrObjPerson, newPerson]);
        console.log([...arrObjPerson, newPerson]);
        console.log("Submitted!")
        setIsSubmitted(true);
        e.preventDefault();
        /*
        setNewName("");
        setNewAge("");
        */
    }
    
    const handleNameChange = (e) => {
        const newNameValue = e.target.value;
        setNewName(newNameValue)
        onNameChange(newNameValue); //to return name value to parent
    }
    const handleAgeChange = (e) => {
        const newAgeValue = e.target.value; //this was necessary as update to name did not reflect immediately
        setNewAge(newAgeValue); //to return age value to parent
        onAgeChange(newAgeValue);
        console.log("returning age:",newAge)
    }

    return (
        <div id="person1-div">
            <h2>ID Number: {title}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" 
                           value={newName} 
                           onChange={handleNameChange}
                           disabled={isSubmitted}/>
                </label><br></br>
                <label>
                    Age:
                    <input type="number" 
                           value={newAge} 
                           onChange={handleAgeChange}
                           disabled={isSubmitted}/>
                </label>
                <br></br>
                <button type="submit" 
                        onClick={handleSubmit}
                        disabled={isSubmitted}> 
                    Submit 
                </button>
            </form>             
        </div>
    );
}

export default IdentityBox;
