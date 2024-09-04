import { RouterConfig } from "./routes/RouterConfig";
// import { useQuery } from "@tanstack/react-query";
// import { getUsersData } from "./services";

const App: React.FC = () => {
  // const auth = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  // // const uid = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("UID") || "null") : null;
  // const logged_in = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("LOGGED_IN") || "null") : null;

  // const isUserLoggedIn = !!logged_in && auth;

  // const { data } = useQuery({
  //   queryKey: ["getUsersData"],
  //   queryFn: async () => {
  //     const res = await getUsersData();
  //     console.log(res);
  //     // updateUserFields(res);
  //     return res;
  //   },
  //   enabled: isUserLoggedIn,
  //   refetchOnWindowFocus: false,
  //   staleTime: Infinity,
  // });
  // console.log(data, 88);

  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
};

export default App;
