import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePasswordHelper } from 'src/helpers/util';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    const isValidPassword = await comparePasswordHelper(pass, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('username/pass không hợp lệ');
    }
    const payload = { sub: user._id, username: user.password };

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
