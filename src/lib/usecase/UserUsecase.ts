import { User, UserId } from "../domain/User";
import { UserInputPort } from "./port/UserInputPort";

export class UserUsecase {
  constructor(readonly inputPort: UserInputPort) {}

  async execute(userId: number): Promise<User> {
    return await this.inputPort.findById(new UserId(userId));
  }
}
