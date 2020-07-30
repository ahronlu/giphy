import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Paginate from "./Paginate";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "QYHGnuIH2dAvwpKhnbpclb1OFNkCM5lK",
            limit: 100,
          },
        });
        setData(results.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
      setTimeout(() => setError(false), 4000);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "QYHGnuIH2dAvwpKhnbpclb1OFNkCM5lK",
          limit: itemsPerPage,
          q: search,
        },
      });
      setData(results.data.data);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }

    setLoading(false);
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="m-2">
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Please try again
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="form-inline justify-content-center m-2"
      >
        <input
          type="text"
          className="form-control"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className="btn btn-primary mx-2">Go</button>
      </form>
      <Paginate
        pageSelected={pageSelected}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      />
      <div className="container gifs">
        {loading ? (
          <Loader />
        ) : (
          currentItems.map((el) => {
            return (
              <div className="gif" key={el.id}>
                <img src={el.images.fixed_height.url} alt="gif" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Giphy;
