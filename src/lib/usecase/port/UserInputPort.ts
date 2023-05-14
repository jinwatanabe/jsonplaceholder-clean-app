import { User, UserId } from "../../domain/User";

export interface UserInputPort {
  findById(userId: UserId): Promise<User>;
}
