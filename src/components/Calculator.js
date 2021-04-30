import React, {useState} from 'react'

function Calculator() {

  

    const [data,setData]= useState("")

    function getData(val) {
        try {
            setData(val.target.value)


        } catch (error) {
            console.log(error);
        }

    }
    function cal(val){
        setData(eval(data))
    }


    return (
        <div className="all">
            <h2>Problem:</h2>
            <input value={data} onChange={getData}></input>
            <div className="buttons">
                <button className="equals" onClick={cal} type="submit">=</button>
                <button onClick={()=>{setData(data+"+")}}>+</button>
                <button onClick={()=>{setData(data+"-")}}>-</button>
                <button onClick={()=>{setData(data+"*")}}>*</button>
                <button onClick={()=>{setData(data+"/")}}>/</button>
                <button onClick={()=>{setData(data+"0")}}>0</button>
                <button onClick={()=>{setData(data+"1")}}>1</button>
                <button onClick={()=>{setData(data+"2")}}>2</button>
                <button onClick={()=>{setData(data+"3")}}>3</button>
                <button onClick={()=>{setData(data+"4")}}>4</button>
                <button onClick={()=>{setData(data+"5")}}>5</button>
                <button onClick={()=>{setData(data+"6")}}>6</button>
                <button onClick={()=>{setData(data+"7")}}>7</button>
                <button onClick={()=>{setData(data+"8")}}>8</button>
                <button onClick={()=>{setData(data+"9")}}>9</button>
            </div>

        </div>
    )
}

export default Calculator
