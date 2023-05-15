import { useEffect, useState } from "react";
import { usecase } from "./container";
import { User } from "./lib/domain/User";

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async (userId: number) => {
      const user = await usecase.execute(userId);
      setUser(user);
    };

    fetchUser(1);
  });
  return <div>{user ? `User name ${user.name.value}` : "Loading ..."}</div>;
}

export default App;
