import styled from "styled-components";
import arrow from "../../../assets/photograph/arrow.png";
import { useNavigate } from "react-router-dom";
import UpcomingSchedule from "./UpcomingSchedule";
import { RequestData } from "./MockData/requestData";

const UpcomingContainer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title onClick={() => navigate("/photographer/reservationlist")}>
        곧 돌아오는 <Highlight>촬영 일정</Highlight>이 있어요
        <Arrow src={arrow} />
      </Title>
      {RequestData.map((item, idx) => (
        <UpcomingSchedule
          key={idx}
          nickname={item.nickname}
          snapType={item.snapType}
          headCount={item.headCount}
          time={item.time}
          place={item.place}
          requirement={item.requirement}
          date={item.date}
          num={item.num}
          id={item.id}
          btn_text="예약완료"
        />
      ))}
    </>
  );
};

const Arrow = styled.img`
  width: 0.6rem;
  margin-left: 0.4rem;
`;

const Highlight = styled.span`
  color: #3c3aac;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.3rem;
  align-self: flex-start;
  cursor: pointer;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 3rem;
  }
`;

export default UpcomingContainer;
