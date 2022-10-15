import React, {useState} from "react";
import Pets from "./Pets";

export default function ArraysEx(){
    const [colors, setColors] = useState(["red", "orange", "yellow"]);
    const [pets, setPets] = useState([{name: "Rocko", type: "Rock", id: 1}, {name: "Bella", type: "Bunny", id: 2}]);

    function addColor(color:string):void {
        setColors(prev => [...prev, color]);
    }

    return(
        <div className="ArraysEx">
            <ol>
                {colors.map(color => <li>{color}</li>)}
            </ol>
            <button onClick={()=> addColor("red")}>Add Red</button>
            <button onClick={()=> addColor("orange")}>Add Orange</button>
            <button onClick={()=> addColor("yellow")}>Add Yellow</button>
            <Pets pets={pets}></Pets>
        </div>
    )
}