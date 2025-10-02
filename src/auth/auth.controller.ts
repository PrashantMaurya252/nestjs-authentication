import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')     // /auth/register
export class AuthController {
    // authService:AuthService
    // constructor(authService:AuthService){
    //     this.authService = authService
    // }
    constructor(private readonly authService:AuthService,private readonly userService:UserService){}
    @Post('register')
    async register(@Body() registerUserDto:RegisterDto){
        const {user,token} = await this.authService.registerUser(registerUserDto)
        return {user,token}
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req){
        const userId = req.user.sub

        const user = await this.userService.getUserById(userId)
        return user
    }
}
