import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userInterface } from './user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn() {
    const user: userInterface = {
      userId: 1,
      username: 'admin',
      password: 'admin',
    };
    return await this.authService.signIn(user, 'admin');
  }
}
