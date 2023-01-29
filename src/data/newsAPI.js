
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getTopNews(inputData, page){
    const {category, country} = inputData;
    try{
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page + 1}&pageSize=12&apiKey=${API_KEY}`; 
        console.log("URL: " + url)
        const result = await fetch(url);
        const data = await result.json();

        let filteredArticles = data.articles.map(news => {
            if(news.urlToImage === null){
                news.urlToImage = "https://img.freepik.com/vector-gratis/fondo-boletin-noticias-tecnologia-global-tierra_1017-33687.jpg?w=2000";
            }
            return news;
        })

        filteredArticles = filteredArticles.filter(news => news.description !== null);

        data.articles = filteredArticles;

        return data;
    } catch(error){
        return {};
    }
    
}

