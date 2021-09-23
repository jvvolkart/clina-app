import jwt from 'jsonwebtoken'
import { users } from '../db/users';

export function Login(email: string, password: string) {
    if(users.filter(user => user.email === email && user.password === password).length) {
        return jwt.sign({email, password}, "any-secret");
    } else {
        return 'Error';
    }
}