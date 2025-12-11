import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Sidebar = () => {
  const user = useContext(UserContext);

  return (
    <div className="p-6 border rounded-xl w-52 bg-white shadow-lg">
      <p className="text-gray-500 text-sm mb-1">Current Plan</p>
      <p className="font-semibold text-gray-800 text-lg">{user.plan}</p>
    </div>
  );
};

export { Sidebar };
