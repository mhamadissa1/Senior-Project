import NewsCard from "../components/news/cards/newsCard";

function News() {
  return (
    <>
      <h1>News</h1>

      <NewsCard
        logo=""
        dateUploaded="2 days ago"
        newsSource="Bloomberg"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        alt="BTC"
      />
    </>
  );
}

export default News;
