import { IUser } from "../interfaces/user.interface";
import { read, write } from "../services/fs.service";

class UserRepository {
  public async getList(): Promise<any[]> {
    return await read();
  }

  public async create(dto: Partial<IUser>): Promise<any> {
    const users = await read();
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name: dto.name,
      email: dto.email,
      password: dto.password,
    };
    users.push(newUser);
    await write(users);
    return newUser;
  }
  public async getById(id: number): Promise<IUser | undefined> {
    const users = await read();
    return users.find((user) => user.id === id);
  }

  public async deleteById(id: number): Promise<boolean> {
    const users = await read();
    const filteredUsers = users.filter((user) => user.id !== id);
    if (filteredUsers.length === users.length) {
      return false;
    }
    await write(filteredUsers);
    return true;
  }
}

export const userRepository = new UserRepository();
