import {React} from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
    id:'a1',
    title:'BurjKhalifa',
    description:'Tallest building in the world',
    imageUrl:'https://www.guinnessworldrecords.com/Images/Burj-portrait-lagre_tcm25-475749.jpg',
    address:'1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates',
    location:{
        lat: 24.8879221,
        long: 67.0583741
    },
    creator:'a1'
}]
const UserPlaces = () => {
    const id = useParams().userId;
    const users = DUMMY_PLACES.filter((user)=>user.id === id);
    return(
        <PlaceList items={users}/>
    )
}

export default UserPlaces;