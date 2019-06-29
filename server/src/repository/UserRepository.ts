import { Service } from 'typedi';
import { User } from '../model/User';

@Service()
export class UserRepository {
  private users = [
    new User(1, '127.0.0.1:10009', '0xdeadbeef', '0xdeadbeef'),
    new User(2, '127.0.0.2:10009', '0xdeadbeef', '0xdeadbeef'),
    new User(3, '127.0.0.3:10009', '0xdeadbeef', '0xdeadbeef'),
    new User(4, '127.0.0.4:10009', '0xdeadbeef', '0xdeadbeef'),
    new User(5, '127.0.0.5:10009', '0xdeadbeef', '0xdeadbeef'),
  ];

  findAll() {
    return Promise.resolve(this.users);
  }

  findOne(id: number) {
    let foundUser: User = undefined;
    this.users.forEach(user => {
      if (user.id === id) {
        foundUser = user;
      }
    });
    return foundUser;
  }

  save(user: User) {
    this.users.push(user);
    return user;
  }

  remove(id: number) {
    const user = this.findOne(id);
    if (user) {
      this.users.splice(this.users.indexOf(user), 1);
    }

    return user;
  }
}
