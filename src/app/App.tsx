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

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
};

export default App;
