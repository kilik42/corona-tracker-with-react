import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

 export const fetchData = async() => {
    try{
        const {data} = await  axios.get(url);

        const modifiedData = {

        }

        return response;
        console.log(response);
    }catch(error){


        console.log("you have an error" + error);
    }
}
