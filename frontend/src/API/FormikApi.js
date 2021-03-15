import axios from 'axios'


const ADD_BOOK_API_ULR = "http://localhost:8080/api/upload";
class FormikApi {


    saveFormik(data){
        try {
            axios.post(ADD_BOOK_API_ULR, data);
        } catch (error) {
            console.log("ERROr AT SAVE formik")
        }
        
    }

}
export default new FormikApi();