import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')     // /auth/register
export class AuthController {
    // authService:AuthService
    // constructor(authService:AuthService){
    //     this.authService = authService
    // }
    constructor(private readonly authService:AuthService){}
    @Post('register')
    register(){
        const result = this.authService.registerUser()
        return result
    }
}
