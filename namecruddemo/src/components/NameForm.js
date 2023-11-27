import { useState } from "react"

const NameForm=(props)=>{
    //create a set to store the values of the textbox
    const[name,setname]=useState("");
    //change event on the textbox to change the value of name state,as soon  as user changes
    //the textbox contents
    const handleChange=(event)=>{
        setname(event.target.value);
    }
    const addname=()=>{
        props.insertname(name);
        setname("");
    }   
    const delname=()=>{
        props.deletename(name);
        setname("");
    }
     return(
        <div>
            <hr></hr>
            Name:{name}
            <form>
                <div class="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="name" class="form-control" id="name"
                    value={name}
                    onChange={handleChange}
                    />

                </div>
                <button type="button" class="btn btn-success" name="btn" id="btn"
                onClick={addname}>Add</button>
                <button type="button" class="btn btn-danger" name="btn" id="btn"
                onClick={delname}>Delete</button>
            </form>
        </div>
    )

}
export default NameForm;