import { BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./pages/Profile/SignIn";
import Signup from "./pages/Profile/Signup";
import Root from "./Root";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/root/*" element={<Root/>} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
