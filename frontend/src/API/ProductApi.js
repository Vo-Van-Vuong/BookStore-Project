import axios from 'axios'

const USER_REST_API_ULR = "http://localhost:8080/api/allbooks";
const BOOK_REST_API_ULR = "http://localhost:8080/api/book/";
class ProductApi {

    getBooks(){
        return axios.get(USER_REST_API_ULR);
    }

    getABook(idbook){
        console.log(BOOK_REST_API_ULR+idbook)
        return axios.get(BOOK_REST_API_ULR+idbook);
    }

}
export default new ProductApi();