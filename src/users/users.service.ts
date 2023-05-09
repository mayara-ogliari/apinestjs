import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userData: User): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  async findOneByEmail(username: string): Promise<User> {
    return this.userRepository.findOneBy({ email: username });
  }

  async findOne(email: string, password: string): Promise<User> {
    return this.userRepository.findOne({ where: { email, password } });
  }

  async findOneById(id): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async checkCredentials(userData: User): Promise<User> {
    const { email, password } = userData;
    const user = await this.findOne(email, password);

    if (user && (await user.checkPassword(password))) {
      return user;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async signUp(userData: User): Promise<User> {
    return await this.createUser(userData);
  }

  createUser(userData: User): User | PromiseLike<User> {
    const user = this.create(userData);
    return this.save(user);
  }

  save(user: Promise<User>): User | PromiseLike<User> {
    return this.save(user);
  }

  async signIn(userData: User) {
    const user = await this.checkCredentials(userData);

    if (user === null) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
