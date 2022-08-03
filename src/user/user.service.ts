import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return [{ id: 1, 'name': 'root', 'email': 'root@example.com' }, { id: 2, 'name': 'tamar', 'email': 'tamar@example.com' }];
  }
}
