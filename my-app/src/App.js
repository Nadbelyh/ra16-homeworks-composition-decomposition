import News from "./components/news";
import Promo from "./components/promo";
import Search from "./components/search";
import Banner from "./components/banner";
import Widgets from "./components/widgets";

/**
 * Собирает страницу
 */
function App() {
  return (
    <>
      <News />
      <Promo />
      <Search />
      <Banner />
      <Widgets />
    </>
  );
}

export default App;
