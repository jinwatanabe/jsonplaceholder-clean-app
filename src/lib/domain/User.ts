export class User {
  constructor(
    readonly name: UserName,
    readonly email: UserEmail,
    readonly phone: UserPhone
  ) {}
}

export class UserId {
  constructor(readonly value: number) {}
}

export class UserName {
  constructor(readonly value: string) {}
}

export class UserEmail {
  constructor(readonly value: string) {}
}

export class UserPhone {
  constructor(readonly value: string) {}
}
