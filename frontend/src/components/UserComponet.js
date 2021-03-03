import React, { Component } from 'react'
import UserService from '../API/UserService'

export default class UserComponet extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response =>{
            this.setState({users: response.data})
        }));
    }

    delete(userid){
        alert(userid)
        UserService.deleteUser(userid);
    }
    add(inta){
        alert(inta);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">User List</h1>
                <button onClick={()=>{this.add(1)}} type="button" className="btn btn-success mb-2">Add new user</button>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>User id</td>
                            <td>User name</td>
                            <td>User email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key= {user.userid}>
                                    <td>{user.userid}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={()=> {this.delete(user.userid)}} type="button" className="btn btn-danger">del</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
