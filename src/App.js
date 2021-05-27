import { BrowserRouter, Route, Link } from "react-router-dom";
import styles from "./App.module.css";

import WordsList from "./Pages/WordsList";
import ForeignCreate from "./Pages/ForeignCreate";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Link to="/">Foreign Create</Link>
        <Route path="/" exact>
          <WordsList />
        </Route>
        <Route path="/foreign_create">
          <ForeignCreate />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
