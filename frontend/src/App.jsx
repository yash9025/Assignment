import { UserProvider } from "./context/UserContext";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { InviteForm } from "./components/InviteForm";
import { ExportButton } from "./components/ExportButton";
import { FirstAdmin } from "./components/FirstAdmin";

const App = () => {
  return (
    <UserProvider>
      <div className="p-6 space-y-6">
        <Header />

        <div className="flex gap-6">
          <Sidebar />

          <div className="flex flex-col gap-6">
            <ExportButton />
            <InviteForm />
            <FirstAdmin />
          </div>
        </div>
      </div>
    </UserProvider>
  );
};

export default App;


