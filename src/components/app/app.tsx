import "./app.css";
import SearchSection from "../search-section/search-section";
import ListBooks from "../list-books/list-books";

function App() {
  return (
    <div className="app">
      <SearchSection />
      <ListBooks />
    </div>
  );
}

export default App;
