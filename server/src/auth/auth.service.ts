import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  async signup(dto: AuthDto) {
    const { email, name, password } = dto

    const foundUser = await this.prisma.user.findUnique({ where: { email: email } })

    if (foundUser) {
      throw new BadRequestException('Email already taken')
    }

    const hashedPassword = await this.hashPassword(password)

    await this.prisma.user.create({
      data: {
        email,
        name,
        hashedPassword
      }
    })

    return {
      message: 'signup was successful'
    }
  }
  async signin(dto: AuthDto) {
    const { email, password } = dto

    const foundUser = await this.prisma.user.findUnique({ where: { email: email } })

    if (!foundUser) {
      throw new BadRequestException('Wrong credentials')
    }

    const isMatch = await this.comparePasswords({
      password,
      hash: foundUser.hashedPassword
    })

    if (!isMatch) {
      throw new BadRequestException('Passwords does not match')
    }


    // TODO: sign jwt and return token
    return '';
  }
  async signout() {
    return '';
  }


  async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds)

    return hashedPassword
  }


  async comparePasswords(args: { password: string, hash: string }) {
    return await bcrypt.compare(args.password, args.hash)
  }
}