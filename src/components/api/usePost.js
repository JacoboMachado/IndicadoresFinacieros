import axios from "axios";
import getUrl from "./UrlBuilder";
import { useQuery } from "react-query";

const fletch = async (iden) => {

    try{
        const response = await axios.get(getUrl(iden))
        .catch(function(error) {
            throw new Error(error)
        });

        return response;
    }catch (err){
        console.error(err);

        // la api no devuelve status !=200 cuando hay un error, esto es un problema de handling :/
        // aqui también iría el manejo de la api down 
    }
}

const usePost = (iden) => useQuery([ 'post' , iden], () => fletch(iden));

export default usePost;