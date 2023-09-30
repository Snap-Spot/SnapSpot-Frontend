import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import SpotBox from "./SpotBox";
import { getFeedPosts } from "../../api/area";
const SpotList = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const data = await getFeedPosts();
    setPosts(data.images);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <GridBox>
        {posts &&
          posts.map((post) => {
            return <SpotBox post={post} />;
          })}
      </GridBox>
    </Wrapper>
  );
};

export default SpotList;

const GridBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  row-gap: 16px;
  column-gap: 14px;
  @media (max-width: 768px) {
    //모바일
    row-gap: 5px;
    column-gap: 9px;
  }
`;

const Wrapper = styled.div`
  max-width: 1001px;
  width: 95%;
  margin-top: 71px;
  @media (max-width: 768px) {
    //모바일
    width: 100%;
    margin-top: 32px;
  }
`;
