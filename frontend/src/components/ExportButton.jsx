import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ExportButton = () => {
  const user = useContext(UserContext);

  const handleClick = () => {
    if (user.plan === "Free") {
      alert("Please upgrade to Pro.");
    } 
    else if(user.plan == "Pro") {
      console.log("Downloading...");
    }
    else{
        console.log("Subscribe to the plan")
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow"
    >
      Export to PDF
    </button>
  );
};

export { ExportButton };
