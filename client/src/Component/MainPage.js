import React, { useState, useEffect, useCallback } from "react";
import List from "./Post/List.js";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { GNBDiv, FooterDiv } from "../Style/MainPageCSS.js";

function MainPage() {
  const [PostList, setPostList] = useState([]);
  const [Sort, setSort] = useState("Latest");
  const [SearchTerm, setSearchTerm] = useState("");
  const [Skip, setSkip] = useState(0);
  const [LoadMore, setLoadMore] = useState(true);

  const getLoadMore = () => {
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: Skip,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...PostList, ...response.data.postList]);
          setSkip(Skip + response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getPostList = () => {
  //   setSkip(0);

  //   let body = {
  //     sort: Sort,
  //     searchTerm: SearchTerm,
  //     skip: 0,
  //   };

  //   axios
  //     .post("/api/post/list", body)
  //     .then((response) => {
  //       if (response.data.success) {
  //         setPostList([...response.data.postList]);
  //         setSkip(response.data.postList.length);
  //         if (response.data.postList.length < 5) {
  //           setLoadMore(false);
  //         }
  //         if (response.data.postList.length === 0) {
  //           setLoadMore(false);
  //         }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const getPostList = useCallback(() => {
    setSkip(0);
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: 0,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
          setSkip(response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
          if (response.data.postList.length === 0) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Sort, SearchTerm]);

  useEffect(() => {
    getPostList();
  }, [Sort, getPostList]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <div>
      <GNBDiv>
        <div className="search">
          <input
            type="text"
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) SearchHandler();
            }}
          />
          <button onClick={() => SearchHandler()}>
            <i className="bi bi-search"></i>
          </button>
        </div>

        <DropdownButton variant="outline-secondary" title={Sort}>
          <Dropdown.Item onClick={() => setSort("Latest")}>
            Latest
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("popularity")}>
            popularity
          </Dropdown.Item>
        </DropdownButton>
      </GNBDiv>
      <List PostList={PostList} />
      {LoadMore && (
        <FooterDiv>
          <button
            style={{ marginBottom: "10vh" }}
            onClick={() => getLoadMore()}
          >
            Load more
          </button>
        </FooterDiv>
      )}
    </div>
  );
}

export default MainPage;
