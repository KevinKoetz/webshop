import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";

const Login = ({ redirectUrl, onClose }: { redirectUrl?: string, onClose: () => {} }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongLogin, setIsWrongLogin] = useState(false);
  const { userState, setUserState } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        setUserState({ isAuthenticated: true, username });
      } else {
        setIsWrongLogin(true);
      }
    } catch (error) {
      
    }
    
  };
  return (
    <div className="Login">

      <form action="/login" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <strong style={{ visibility: isWrongLogin ? "visible" : "hidden" }}>
          Wrong Username or Password!
        </strong>
        <div>
          <button type="submit">Sign in</button>
        </div>
        <div>
          <button type="button" onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
