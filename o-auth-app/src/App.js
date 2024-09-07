import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  // Destructure the necessary properties from useAuth0
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {/* If the user is authenticated, display their name */}
        {isAuthenticated && (
          <h3 style={{ textAlign: "center" }}>Hello, {user.name}</h3>
        )}

        {/* Conditional rendering based on authentication status */}
        {isAuthenticated ? (
          // Logout button with onClick handler
          <button onClick={(e) => logout()}>Logout</button>
        ) : (
          // Login button with onClick handler
          <button onClick={(e) => loginWithRedirect()}>
            Login with Redirect
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
