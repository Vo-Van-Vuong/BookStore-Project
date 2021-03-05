import axios from 'axios'

const USER_REST_API_ULR = "http://localhost:8080/api/list-books";

class ProductApi {

    getBooks(){
        return axios.get(USER_REST_API_ULR);
    }

}
export default new ProductApi();