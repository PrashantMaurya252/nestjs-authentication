import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}
    async registerUser(registerUserDto:RegisterDto){
        console.log("register User DTO",registerUserDto)

        const salt = 10

        const hash = await bcrypt.hash(registerUserDto.password,salt)
        /* 
        1- check email exist or not
        2 - hash the password
        3 - store the user into db
        4 - generate jwt token
        5 - send token in response
        */
        // return {message:"User registered successfully !"}
        return this.userService.createUser({...registerUserDto,password:hash})
    }
}
