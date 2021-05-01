import React, {useState} from 'react'

function Calculator() {

    window.addEventListener("keypress",function(e){
        if (e.key === 'Enter') {
            cal()
        }
    })


    const [data,setData]= useState("")

    function getData(val) {
        try {
            setData(val.target.value)
        } catch (error) {
            console.log(error);
        }
    }
    function cal(val){
        try{
            setData(eval(data))
        } catch(error){
            console.log(error);
        }   
    }

    return (
        <div className="all">
            <input value={data} onChange={getData}></input>
            <div className="buttons">
                <button className="equals" onClick={cal} type="submit">=</button>
                <button className="syms" onClick={()=>{setData(data+"+")}}>+</button>
                <button className="syms" onClick={()=>{setData(data+"-")}}>-</button>
                <button className="syms" onClick={()=>{setData(data+"*")}}>*</button>
                <button className="syms" onClick={()=>{setData(data+"/")}}>/</button>
                <button className="syms" onClick={()=>{setData(data+"%")}}>%</button>
                <button className="syms" onClick={()=>{setData(data.slice(0, -1))}}>del</button>
                <button className="syms" onClick={()=>{setData(data.slice(-1, -1))}}>CA</button>
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
                <button className="pi" onClick={()=>{setData(data+ Math.PI.toString())}}>π</button>
                <button className="pi" onClick={()=>{setData(data+"(")}}>(</button>
                <button className="pi" onClick={()=>{setData(data+")")}}>)</button>
            </div>
        </div>
    )
}

export default Calculator
