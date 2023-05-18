import "./App.css";
import {
  BrowserRouter,
 
} from "react-router-dom";
import { Loyut } from "./components/Louyt";
function AppContent() {
  return (
    <div>
    <header>
      <Loyut/>
    </header>
    <main>
    </main>
    <footer>

    </footer>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
export default App;
