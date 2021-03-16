import axios from 'axios'


const ADD_BOOK_API_ULR = "http://localhost:8080/api/addnewbook";
class FormikApi {


    saveBook(data){
        try {
            axios.post(ADD_BOOK_API_ULR, data);
        } catch (error) {
            console.log("cannot post to API");
        }
        
    }

}
export default new FormikApi();