import React, { useEffect, useState } from "react";
import axios from "axios";

const limitedItems = 20;
const LoadMore = () => {
  const [next, setNext] = useState(limitedItems);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos", {
        params: {
          _limit: 40,
        },
      })
      .then((res) => setPhotos(res?.data))
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [next]);

  const LoadMoreHandler = () => {
    setLoading(true);
    setNext(next + limitedItems);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          position: "relative",
        }}
      >
        {photos.slice(0, next).map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 1 calc(20% - 8px)",
            }}
          >
            <img
              src={item?.url}
              alt={item?.title}
              style={{
                width: "200px",
              }}
            />
          </div>
        ))}
      </div>
      {loading && <h2>Loading...</h2>}
      <button onClick={LoadMoreHandler} disabled={next < photos.length ? false : true}>
        LoadMore
      </button>
    </>
  );
};

export default LoadMore;
