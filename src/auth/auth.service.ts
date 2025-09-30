import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    registerUser(){
        /* 
        1- check email exist or not
        2 - hash the password
        3 - store the user into db
        4 - generate jwt token
        5 - send token in response
        */
        return {message:"User registered successfully !"}
    }
}
