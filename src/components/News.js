import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
let totalResults;

function News(props) {
  const [data, setData] = useState({ articles: [], page: 1, loading: true });
  useEffect(() => {
    console.log("Called use effect");
    const getData = async () => {
      let url =
        `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=e01ab294fe9e40e68fe72e1d964c5e44&pageSize=${props.pageSize}`;
      let temp = await fetch(url);
      // console.log(data);
      let parsed_data = await temp.json();
      console.log(parsed_data);
      totalResults = parsed_data.totalResults;
      console.log(totalResults);
      setData({
        ...data,
        articles: parsed_data.articles,
        page: 1,
        loading: false,
      });
    };
    getData();
  }, []);

  let handlePrevClick = async () => {
    console.log("Called next button effect");
    const getData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=e01ab294fe9e40e68fe72e1d964c5e44&page=${
        data.page - 1
      }&pageSize=${props.pageSize}`;
      let temp = await fetch(url);
      // console.log(data);
      let parsed_data = await temp.json();
      console.log(parsed_data);
      setData({
        ...data,
        articles: parsed_data.articles,
        page: data.page - 1,
        loading: false,
      });
    };
    getData();
  };
  let handleNextClick = () => {
    console.log("Called next button effect");
    const getData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=e01ab294fe9e40e68fe72e1d964c5e44&page=${
        data.page + 1
      }&pageSize=${props.pageSize}`;
      let temp = await fetch(url);
      // console.log(data);
      let parsed_data = await temp.json();
      console.log(parsed_data);
      setData({
        ...data,
        articles: parsed_data.articles,
        page: data.page + 1,
        loading: false,
      });
    };
    getData();
  };

  return (
    <>
      {data.loading && <Spinner />}
      {!data.loading && (
        <div className="container my-3 ">
          <div >
            <h2>NewsRefresher Top Headlines</h2>
            <div className="row">
              {data.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <Newsitem
                      sourceName = {element.source.name}
                      author = {element.author}
                      publishedAt = {element.publishedAt}
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={data.page === 1}
              type="button"
              className="btn btn-dark"
              onClick={handlePrevClick}
            >
              {" "}
              &#8592; Previous
            </button>
            <button
              disabled={data.page * 15 >= totalResults}
              type="button"
              className="btn btn-dark"
              onClick={handleNextClick}
            >
              Next &#8594;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default News;
