
const API_KEY = import.meta.env.VITE_API_KEY ?? process.env.VITE_API_KEY;

export async function getTopNews(inputData, page){
    const {category, country} = inputData;
    try{
        const result = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=12&apiKey=${API_KEY}`);
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

