import React, {useState} from 'react'

function Calculator() {

    const [data,setData]= useState(null)
    var problem;

    function getData(val) {
        setData(val.target.value)
        console.log(val.target.value)
    }
    function cal(){
        console.log()
    }

    return (
        <div>
            <input onChange={getData} ></input>
            <button onClick={cal} type="submit">=</button>
            <h1>{data}</h1>
        </div>
    )
}

export default Calculator
