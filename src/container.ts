import { UserDriver } from "./lib/driver/UserDriver";
import { UserGateway } from "./lib/gateway/UserGateway";
import { UserUsecase } from "./lib/usecase/UserUsecase";

const driver = new UserDriver();
const gateway = new UserGateway(driver);
export const usecase = new UserUsecase(gateway);
