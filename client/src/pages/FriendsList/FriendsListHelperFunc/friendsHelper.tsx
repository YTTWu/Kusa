
import { person } from "./personHelper";
import { wsv } from "./WSV";

import React, {useEffect, useState} from 'react';






//var names = ["kusa","kusa","kusa","kusa"]
var array_of_people:any[] = []
export function Friends()
{

    const[names,setNames] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch('http://localhost:8000/api/GetFriendsId/?steamid=76561198283847615')
            const data = await response.json();
            setNames(data)
        }
    )();
    },[]);

    array_of_people = []
    for (var i = 0; i < names.length; i++)
    {
        array_of_people.push(person(names[i]))
        array_of_people.push(wsv())
    }
    return array_of_people
}


//things I can improve
//What do we want to do when we click on the friends?
//if we want to see more steam realated thins, should i pass a dict {"SturmKoala":34230498230498204}
//so i can use its steamid to do more things