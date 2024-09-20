import React from "react";
import axios from "axios";
import { RouterConfig } from "./routes/RouterConfig";
// import { useQuery } from "@tanstack/react-query";
// import { getUsersData } from "./services";
import { useUserSignupStore } from "./store/dashboard/user-auth";
// import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const { updateUserFields } = useUserSignupStore();
  // const navigate = useNavigate();

  const auth = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  //const uid = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("UID") || "null") : null;
  const logged_in = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("LOGGED_IN") || "null") : null;

  const isUserLoggedIn = !!logged_in && auth;

  // const { data } = useQuery({
  //   queryKey: ["getUsersData"],
  //   queryFn: async () => {
  //     const res = await getUsersData();
  //     console.log(res);
  //     // updateUserFields(res);
  //     return res;
  //   },
  //   enabled: () => isUserLoggedIn,
  //   refetchOnWindowFocus: false,
  //   staleTime: Infinity,
  // });
  // console.log(data, 88);

  const token = JSON.parse(localStorage.getItem("USER_AUTH") || "{}");
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user-information";

  React.useEffect(() => {
    if (isUserLoggedIn) {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          updateUserFields({
            username: response.data.username,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            role: response.data.role_name,
          });
          // window.localStorage.setItem("UID", JSON.stringify(response.data.user.user_id));
          console.log(response.data.role_name, 999);
        })
        .catch((error) => {
          console.error(error);
        });

      console.log(token, "token");
    }
  }, [auth, logged_in]);

  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
};

export default App;
