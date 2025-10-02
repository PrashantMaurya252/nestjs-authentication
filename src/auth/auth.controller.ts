import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth')     // /auth/register
export class AuthController {
    // authService:AuthService
    // constructor(authService:AuthService){
    //     this.authService = authService
    // }
    constructor(private readonly authService:AuthService){}
    @Post('register')
    async register(@Body() registerUserDto:RegisterDto){
        const {user,token} = await this.authService.registerUser(registerUserDto)
        return {user,token}
    }
}
