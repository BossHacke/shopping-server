import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './passport/local-auth.guard';
import { JwtAuthGuard } from './passport/jwt-auth.guard';
import { Public } from './decorator/customize';
import { MailerService } from '@nestjs-modules/mailer';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailerService: MailerService
  ) { }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signIn(createAuthDto.name, createAuthDto.password);
  }

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  @Public()
  register(@Body() dto: CreateAuthDto) {
    return this.authService.handleRegister(dto);
  }

  @Post('mail')
  @Public()
  sendEmail() {
    this.mailerService
    .sendMail({
      to: 'vonguyenphihung123@gmail.com',
      subject: 'Test mail',
      text: 'welcome',
      template: "register.hbs",
      context: {
        name: "Hùng",
        activationCode: 123456
      }
    })
      return 'success';
  }
}
