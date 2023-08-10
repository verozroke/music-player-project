import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUserById(@Param() params: { id: string }, @Req() req: Request) {
    return this.usersService.getUserById(params.id, req)
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }
}
