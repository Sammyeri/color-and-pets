import React, {useState} from "react";

interface PetsProps{
    name:string;
    type:string;
    id:number;
}

interface PetsTableProps{
    pets: PetsProps[];
}

export default function Pets({pets}:PetsTableProps) {
    return(
        <table>
            <tr>
                <th>Name:</th>
                <th>Type: </th>
            </tr>
            {pets.map(pet=> (
                <tr key={pet.id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                </tr>
            ))}
        </table>
    )
}