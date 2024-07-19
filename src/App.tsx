import Login from "./pages/login";
import Users from "./pages/users";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Login />
      <Users />
    </div>
  );
}

export default App;
