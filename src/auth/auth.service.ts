import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService,private readonly jwtService:JwtService){}
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
        const user = await this.userService.createUser({...registerUserDto,password:hash})
        console.log(user)

        const payload = {sub:user._id,email:user.email}
        const token = await this.jwtService.signAsync(payload)

        return {user,token}
    }
}
