import { UserId } from "../domain/User";

export class UserDriver {
  findById(userId: number): UserJson {
    throw Error("test");
  }
}

export class UserJson {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly username: string,
    readonly email: string,
    readonly address: AddressJson,
    readonly phone: string,
    readonly website: string,
    readonly company: CompanyJson
  ) {}
}

export class AddressJson {
  constructor(
    readonly street: string,
    readonly suite: string,
    readonly city: string,
    readonly zipcode: string,
    readonly geo: GeoJson
  ) {}
}

export class GeoJson {
  constructor(readonly lat: string, readonly lug: string) {}
}

export class CompanyJson {
  constructor(
    readonly name: string,
    readonly catchPhrase: string,
    readonly bs: string
  ) {}
}
