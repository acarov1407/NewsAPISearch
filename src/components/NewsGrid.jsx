import useNews from "../hooks/useNews"
import NewsCard from "./NewsCard";
import "../styles/newsGrid.css";

function NewsGrid() {
  const {newsData} = useNews();
  return (
    <div className="news__content">
        {
          newsData.map((news, index) => (
            <NewsCard 
            key={index}
            news={news}
            />
          ))
        }
    </div>
  )
}

export default NewsGrid