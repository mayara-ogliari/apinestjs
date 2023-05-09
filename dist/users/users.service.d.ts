import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(userData: User): Promise<User>;
    findOneByEmail(username: string): Promise<User>;
    findOne(email: string, password: string): Promise<User>;
    findOneById(id: any): Promise<User>;
    checkCredentials(userData: User): Promise<User>;
    private hashPassword;
    signUp(userData: User): Promise<User>;
    createUser(userData: User): User | PromiseLike<User>;
    save(user: Promise<User>): User | PromiseLike<User>;
    signIn(userData: User): Promise<void>;
}
