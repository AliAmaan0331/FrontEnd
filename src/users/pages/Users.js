import {React} from "react";
import UserList from "../components/UserList";

const Users = () => {
    const UsersData = [
        {id:'a1', name:'Ali', image:'https://static.saltinourhair.com/wp-content/uploads/2019/04/23140026/things-to-do-venice-italy-header.jpg', places:1}
    ]
    return(
        <>
            <UserList items={UsersData}/>
        </>
    )
}

export default Users;