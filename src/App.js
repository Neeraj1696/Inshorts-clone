import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import axios from "axios";
import API_KEY from "./Components/Key";
import NavContents from "./Components/NavContents";

function App() {
  const [Categories, setCategories] = useState("general");
  const [newsResults, SetNewsResults] = useState();
  const [newsArray, SetNewsArray] = useState([]);
  const [loadmore, SetLoadmore] = useState(10);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${Categories}&pageSize=${loadmore}`
      );
      console.log(news);
      SetNewsArray(news.data.articles);
      SetNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [Categories, newsResults, loadmore]);
  return (
    <div className="App">
      <Nav setCategory={setCategories} />
      <NavContents
        newsArray={newsArray}
        newsResults={newsResults}
        loadmore={loadmore}
        SetLoadmore={SetLoadmore}
      />
    </div>
  );
}

export default App;
