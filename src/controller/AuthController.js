import Validator from 'validator';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../actions/types';
import { loginOperationResponse, loginFailed } from '../actions'

class AuthController {
    static async handleUserLogin({email, password}) {
        return new Promise( async (resolve, reject) => {
            if(this.isEmailPasswordValid({email, password})){
                try{
                    let response = null;
                     axios.post(`${baseUrl}/api/v1/auth/login`, {
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json"
                        },
                        data: {
                            email,
                            password
                        }
                    })
                    .then(res => {
                        console.log('response in', res);
                        resolve(this.setToken(res));
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err);
                    });
                } catch(error){
                    console.log('error', error);
                    reject(error);
                } finally {
                    
                }
            }else{
                reject('Invalid Email or password');
            }
             
        })
    }
    static isEmailPasswordValid({email, password}) {
        console.log('validating')
        console.log('ema', email, 'pass', password);
        return ( (email && Validator.isEmail(email)) && (password && password != ''));
    }
    static async setToken(response){
        console.log('confirm ooo', response);
        if(response !== null && response.status === 200){
            try{
                await AsyncStorage.setItem('token', response.data.token);
                return response.status
            } catch(error){
                console.log(error)
                return 406
            }
            
        }
        return 406
    }
}

export default AuthController;
