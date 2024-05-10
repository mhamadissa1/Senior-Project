import NewsCard from "../components/news/cards/newsCard";

function News() {
  return (
    <>
      <h1>News</h1>
      <div className="flex items-center justify-center">
        <div className="mx-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
            <NewsCard
              logo=""
              dateUploaded="2 days ago"
              newsSource="Bloomberg"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="BTC"
            />
            <NewsCard
              logo=""
              dateUploaded="2 days ago"
              newsSource="Bloomberg"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="BTC"
            />
            <NewsCard
              logo=""
              dateUploaded="2 days ago"
              newsSource="Bloomberg"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="BTC"
            />
            <NewsCard
              logo=""
              dateUploaded="2 days ago"
              newsSource="Bloomberg"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="BTC"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
