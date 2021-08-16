require("dotenv").config();

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.API_KEY);

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  q: "trump",
  category: "politics",
  language: "en",
  country: "us",
}).then((response: Response) => {
  console.log(response);
  /*
{
  status: "ok",
  articles: [...]
}
  */
});

function formatDate(dt: Date) {
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  return (y + "-" + m + "-" + d);
}

function getBeforeDays(dt: Date, n: number) {
  dt.setDate(dt.getDate() - n);
  return dt;
}

const from = formatDate(getBeforeDays(new Date(), 30));
const to = formatDate(new Date());

newsapi.v2.everything({
  q: "trump",
  sources: "bbc-news,the-verge",
  domains: "bbc.co.uk,techcrunch.com",
  from, //
  to,
  language: "en",
  sortBy: "relevancy",
  page: 2,
}).then((response: Response) => {
  console.log(response);
  /*
{
  status: "ok",
  articles: [...]
}
  */
});

// To query sources
// All options are optional
newsapi.v2.sources({
  category: "technology",
  language: "en",
  country: "us",
}).then((response: Response) => {
  console.log(response);
  /*
{
  status: "ok",
  sources: [...]
}
  */
});
