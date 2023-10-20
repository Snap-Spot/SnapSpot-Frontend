import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../../components/common/Header";
import EventItem from "../../components/Event/EventItem";

import { bannerData } from "../../components/Main/MainSlider";

const EventPage = () => {
  // url parameter
  const param = useParams();
  // event 관련 data
  const eventData = bannerData[param.id - 1];

  return (
    <>
      <Header />
      <Wrapper>
        <EventItem eventData={eventData}/>
      </Wrapper>
    </>
  );
};

export default EventPage;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  margin-top: 94px;

  @media (max-width: 768px) {
    //모바일
    width: 90%;
    margin-top: 17px;
  }
`;
