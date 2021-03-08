import axios from 'axios'

const USER_REST_API_ULR = "http://localhost:8080/api/list-books";
const ADD_BOOK_API_ULR = "http://localhost:8080/api/add-book";
class ProductApi {

    getBooks(){
        return axios.get(USER_REST_API_ULR);
    }

    

    saveBook(book){
        try {
            axios.post(ADD_BOOK_API_ULR, { book });
        } catch (error) {
            console.log("ERROr AT SAVE BOOK")
        }
        
    }

}
export default new ProductApi();