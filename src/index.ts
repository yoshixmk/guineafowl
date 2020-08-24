require('dotenv').config()

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.API_KEY)

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2
  .topHeadlines({
    q: 'trump',
    category: 'politics',
    language: 'en',
    country: 'us'
  })
  .then((response: Response) => {
    console.log(response)
    /*
{
  status: "ok",
  articles: [...]
}
*/
  })

// To query everything
// You must include at least one q, source, or domain
newsapi.v2
  .everything({
    q: 'trump',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk,techcrunch.com',
    from: '2020-07-24',
    to: '2020-08-24',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  })
  .then((response: Response) => {
    console.log(response)
    /*
{
  status: "ok",
  articles: [...]
}
*/
  })

// To query sources
// All options are optional
newsapi.v2
  .sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  })
  .then((response: Response) => {
    console.log(response)
    /*
{
  status: "ok",
  sources: [...]
}
*/
  })