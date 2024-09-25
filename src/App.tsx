import React from "react";
import axios from "axios";
import { RouterConfig } from "./routes/RouterConfig";
// import { useQuery } from "@tanstack/react-query";
// import { getUsersData } from "./services";
import { useUserSignupStore } from "./store/dashboard/user-auth";
import { Flex } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const { updateUserFields } = useUserSignupStore();
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  const auth = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const uid = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("UID") || "null") : null;
  const logged_in = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("LOGGED_IN") || "null") : null;

  const isUserLoggedIn = !!logged_in && uid && auth;

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
    if (isUserLoggedIn && token) {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("User data:", response.data);
          updateUserFields(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [isUserLoggedIn, token, updateUserFields]);

  // React.useEffect(() => {
  //   console.log("Store values after API request:", { avatar, username, email });
  // }, [avatar, username, email]);

  if (isLoading && !/\/(login|signup|forget-password)/.test(location.pathname)) {
    return (
      <Flex w={"100%"} h={"100vh"} justify={"center"} align={"center"}>
        <div>Loading..</div>.
      </Flex>
    );
  }

  return <RouterConfig />;
};

export default App;
