import { System } from "../System";

describe("System", () => {
  it("ping", () => {
    const actual = System();
    expect(actual).toBe("pong");
  });
});
