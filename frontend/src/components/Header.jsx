import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const user = useContext(UserContext);

  return (
    <div className="p-6 bg-linear-to-r from-blue-100 to-blue-200 shadow-md rounded-lg mb-4">
      <h1 className="text-2xl font-bold text-blue-900">
        Welcome, {user.name}
      </h1>
    </div>
  );
};

export { Header };
