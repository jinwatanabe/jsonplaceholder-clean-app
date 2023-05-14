import { User, UserId } from "../../domain/User";
import { UserUsecase } from "../UserUsecase";
import { UserInputPort } from "../port/UserInputPort";
import { when } from "jest-when";

describe("UserUsecase", () => {
  test("ユーザーを表示する", async () => {
    const user = {};
    const inputPort = {} as UserInputPort;
    const findByIdMock = jest.fn();
    inputPort.findById = findByIdMock;
    const userId = new UserId(1);
    when(findByIdMock).calledWith(userId).mockReturnValueOnce(user);

    const target = new UserUsecase(inputPort);
    const expected = {} as User;
    const actual = await target.execute(1);

    expect(actual).toEqual(expected);
  });
});
