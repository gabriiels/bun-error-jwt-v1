import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userInterface } from './user.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(user: userInterface, pass: string) {
    const { userId, username, password } = user;
    if (password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: userId, username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
