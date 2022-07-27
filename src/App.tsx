import { UserProvider } from "./context/user";
import { UserPage } from "./pages/UserPage";

const App = () => {
  return (
    <UserProvider>
      <UserPage />
    </UserProvider>
  );
};

export default App;
