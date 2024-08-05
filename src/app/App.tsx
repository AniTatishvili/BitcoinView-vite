// function App() {

//   return (
//     <>

//     </>
//   );
// }

// export default App;

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
import { RouterConfig } from "../app/routes/RouterConfig";

// interface UserProfile {
//   id: number;
//   username: string;
//   email: string;
//   display_name: string;
//   // Add other fields as necessary
// }

const App: React.FC = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [displayName, setDisplayName] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [profile, setProfile] = useState<UserProfile | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   if (name === "username") setUsername(value);
  //   if (name === "email") setEmail(value);
  //   if (name === "display_name") setDisplayName(value);
  //   if (name === "password") setPassword(value);
  // };
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2NvaW4iLCJpYXQiOjE3MjI3MjMwNjMsIm5iZiI6MTcyMjcyMzA2MywiZXhwIjoxNzIzMzI3ODYzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.xSb9oyCqZnzxr_KGj0xHapmPIB4DtgvbHvEvB0VO9aI";

  // const getJWTToken = async (username: string, password: string) => {
  //   try {
  //     const res = await axios.post("http://localhost/coin/wp-json/jwt-auth/v1/token", {
  //       username,
  //       password,
  //     });
  //     return res.data.token;
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       setError("Login failed: " + (error.response?.data?.message || error.message));
  //     } else {
  //       setError("An unexpected error occurred: " + (error as Error).message);
  //     }
  //     return null;
  //   }
  // };
  // const newUserData = {
  //   username: "newuser1",
  //   email: "newuser1@example.com",
  //   display_name: "New User",
  //   password: "password123",
  // };

  // const insertData = async (token: string, newUserData: { username: string; email: string; display_name: string; password: string }) => {
  //   try {
  //     await axios.post(`http://localhost/coin/wp-json/wp/v2/users`, newUserData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Use the admin JWT token
  //       },
  //     });
  //     console.log("User registered successfully.");
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.error("Registration failed:", error.response?.data?.message || error.message);
  //     } else {
  //       console.error("Unexpected error:", (error as Error).message);
  //     }
  //   }
  // };

  // const fetchProfile = async (token: string) => {
  //   try {
  //     const res = await axios.get<UserProfile>(`http://localhost/coin/wp-json/wp/v2/users/me`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setProfile(res.data);
  //     setError(null);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       setError("Failed to fetch profile: " + error.response?.data?.message || error.message);
  //     } else {
  //       setError("An unexpected error occurred: " + (error as Error).message);
  //     }
  //   }
  // };

  // const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const token = await getJWTToken(username, password);
  //   if (token) {
  //     setLoggedIn(true);
  //     fetchProfile(token);
  //   }
  // };

  // const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     // Register the new user
  //     await insertData(token, newUserData); // You might need to adjust this to register the user

  //     // Obtain JWT token using the registered credentials
  //     // const token = await getJWTToken(username, password);
  //     // if (token) {
  //     //   setLoggedIn(true);
  //     //   fetchProfile(token); // Fetch user profile with the obtained token
  //     // }
  //   } catch (error) {
  //     console.error("Registration or token retrieval failed:", error);
  //     setError("Registration failed or token retrieval failed.");
  //   }
  // };

  return (
    <div className="App">
      {/* {!loggedIn ? (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input name="username" value={username} onChange={handleChange} type="text" className="form-control" id="username" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input name="email" value={email} onChange={handleChange} type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="displayName">Display Name</label>
              <input
                name="display_name"
                value={displayName}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="displayName"
                placeholder="Display name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                value={password}
                onChange={handleChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>

          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="loginUsername">Username</label>
              <input
                name="username"
                value={username}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="loginUsername"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                name="password"
                value={password}
                onChange={handleChange}
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Profile</h2>
          {profile ? (
            <div>
              <p>Username: {profile.username}</p>
              <p>Email: {profile.email}</p>
              <p>Display Name: {profile.display_name}</p>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}
          <button onClick={() => setLoggedIn(false)} className="btn btn-secondary">
            Logout
          </button>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>} */}
      <RouterConfig />
    </div>
  );
};

export default App;
