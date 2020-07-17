import React, {useState} from 'react';
import axios from 'axios'

export const SmurfForm = ({dispatch}) => {
    const [smurfName, setName] = useState('');
    const [smurfAge, setAge] = useState('');
    const [smurfHeight, setHeight] = useState('');
  
    const handleNameChanges = e => {
      setName(e.target.value);
    };

    const handleAgeChanges = e => {
        setAge(e.target.value);
    };

    const handleHeightChanges = e => {
        setHeight(e.target.value);
    };
  
    const submitForm = e => {
      //e.preventDefault();
      axios
      .post('http://localhost:3333/smurfs/', {
          name: smurfName,
          age: smurfAge,
          height: smurfHeight
      })
      .then(res => {
          console.log(res)
          //dispatch({ type: SMURF_SUBMIT, payload: res})
      })
      .catch(err => {
          console.log('Error:', err)
      })
    };
  
    // const clearCompleted = e => {
    //   e.preventDefault();
    //   dispatch({
    //     type: 'ClearCompleted'
    //   });
    // };
  
    return (
        <div>
        <form onSubmit={submitForm}>
          <label>Smurf Name
            <input name='name' onChange={handleNameChanges} value={smurfName} />
          </label>
          <label>Smurf Age
            <input name='age' onChange={handleAgeChanges} value={smurfAge} />
          </label>
          <label>Smurf Height
            <input name='height' onChange={handleHeightChanges} value={smurfHeight} />
          </label>
          <button>Add Smurf</button>
        </form>
      </div>
    );
} 