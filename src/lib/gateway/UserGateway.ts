import { UserId, User, UserName, UserEmail, UserPhone } from "../domain/User";
import { UserDriver } from "../driver/UserDriver";
import { UserInputPort } from "../usecase/port/UserInputPort";

export class UserGateway implements UserInputPort {
  constructor(private readonly driver: UserDriver) {}

  async findById(userId: UserId): Promise<User> {
    const user = await this.driver.findById(userId.value);
    return new User(
      new UserName(user.name),
      new UserEmail(user.email),
      new UserPhone(user.phone)
    );
  }
}
