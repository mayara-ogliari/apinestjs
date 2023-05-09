import { UserService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    createUser(userData: User): Promise<{
        user: User;
        message: string;
    }>;
}
