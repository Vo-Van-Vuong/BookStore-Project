import axios from 'axios'

const USER_REST_API_ULR = "http://localhost:8080/api/users";
const DELETE_API = "http://localhost:8080/api/delete";
class UserService {

    getUsers(){
        return axios.get(USER_REST_API_ULR);
    }

    deleteUser(userid){
        axios.delete("http://localhost:8080/api/delete/${userid}");
    }

}
export default new UserService();