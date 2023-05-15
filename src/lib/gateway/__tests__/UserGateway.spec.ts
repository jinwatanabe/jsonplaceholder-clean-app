import { when } from "jest-when";
import {
  AddressJson,
  CompanyJson,
  GeoJson,
  UserDriver,
  UserJson,
} from "../../driver/UserDriver";
import { UserGateway } from "../UserGateway";
import {
  User,
  UserEmail,
  UserId,
  UserName,
  UserPhone,
} from "../../domain/User";

describe("UserGateway", () => {
  test("UserIDに基づくユーザーを取得することができる", async () => {
    const driver = {} as UserDriver;
    const findByIdMock = jest.fn();
    driver.findById = findByIdMock;
    const userId = new UserId(1);
    const json = new UserJson(
      "1",
      "watanabe",
      "username",
      "test@example.com",
      new AddressJson(
        "street",
        "suite",
        "city",
        "zipcode",
        new GeoJson("lat", "lug")
      ),
      "080-0000-0000",
      "website",
      new CompanyJson("name", "catchPhrase", "bs")
    );
    when(findByIdMock).calledWith(userId.value).mockReturnValueOnce(json);

    const target = new UserGateway(driver);
    const actual = await target.findById(userId);
    const expected = new User(
      new UserName("watanabe"),
      new UserEmail("test@example.com"),
      new UserPhone("080-0000-0000")
    );

    expect(actual).toStrictEqual(expected);
  });
});
