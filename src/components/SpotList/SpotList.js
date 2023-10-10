import React, { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import SpotBox from "./SpotBox";
import { getFeedPosts } from "../../api/area";
import LoadingImg from "../../assets/signup/loading.png";
const SpotList = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    try {
      const data = await getFeedPosts();
      setPosts(data.images);
    } catch (err) {
      alert("에러발생");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {posts.length > 0 ? (
        <Wrapper>
          <GridBox>
            {posts.map((post, index) => {
              return <SpotBox key={index} post={post} />;
            })}
          </GridBox>
        </Wrapper>
      ) : (
        <LoadingImage src={LoadingImg} />
      )}
    </>
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

// 로딩 관련 style
const spinner_animation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const LoadingImage = styled.img`
  margin: 200px auto;
  width: 200px;
  animation: ${spinner_animation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;
