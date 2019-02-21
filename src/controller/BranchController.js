import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../actions/types';


class BranchController{
    static async getBranches(){
        return new Promise( async (resolve, reject) => {
            try {
                const value = await AsyncStorage.getItem('token');
                console.log('values - toke ', value);
                fetch(`${baseUrl}/api/v1/branches`, {
                    method: 'GET',
                    headers:{
                        "content-type":"application/json",
                        "authorization": value
                    }
                })
                .then(res => {status = res.status; return res.json()})
                 .then((res) => {
                     if( status === 200){
                         console.log('finally',res);
                         resolve(res.branches);
                     }
                 })
                 .catch((err) => reject(err));
            } catch( error){
                console.log('errror', error);
            }
            
        })
    }
}

export default BranchController;
