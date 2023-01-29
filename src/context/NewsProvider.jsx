import { createContext, useEffect, useState } from "react";
import { getTopNews } from "../data/newsAPI";

const NewsContext = createContext();

function NewsProvider({ children }) {

    const [inputData, setInputData] = useState({
        category: 'general',
        country: 'co'
    });

    const [newsData, setNewsData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalNews, setTotalNews] = useState(0);

    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        setPage(0);
        getTopNewsFromAPI();
    }, [inputData])

    useEffect(() => {
        
        if(firstLoad){
            setFirstLoad(false);
        } else{
            getTopNewsFromAPI();
        }
        
    }, [page])

    const handleInputData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name] : e.target.value
        })
    }

    const handlePageClick = (e) => {
        setPage(e.selected);
    }

    const getTopNewsFromAPI = async () =>{
        const result = await getTopNews(inputData, page);
        const news = result.articles;
        console.log(news)
        setNewsData(news);
        setTotalNews(result.totalResults);
        console.log('llamado a la api')
        console.log(process.env.VITE_API_KEY)
    }

    

    return (
        <NewsContext.Provider
            value={{
               handleInputData,
               inputData,
               newsData,
               totalNews,
               page,
               handlePageClick
               
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext;