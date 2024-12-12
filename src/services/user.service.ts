import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getList(): Promise<any[]> {
    return await userRepository.getList();
  }
  public async create(dto: Partial<any>): Promise<any> {
    return await userRepository.create(dto);
  }
  public async getById(id: number): Promise<IUser | undefined> {
    return await userRepository.getById(id);
  }

  public async deleteById(id: number): Promise<boolean> {
    return await userRepository.deleteById(id);
  }
}

export const userService = new UserService();
