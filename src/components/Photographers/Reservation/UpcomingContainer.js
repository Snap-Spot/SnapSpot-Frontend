import styled from "styled-components";
import arrow from "../../../assets/photograph/arrow.png";
import { useNavigate } from "react-router-dom";
import UpcomingSchedule from "./UpcomingSchedule";
import { category } from "../../common/category";

const UpcomingContainer = ({ reservation }) => {
  const navigate = useNavigate();

  return (
    <>
      {reservation.length && (
        <>
          <Title onClick={() => navigate("/photographer/reservationlist")}>
            곧 돌아오는 <Highlight>촬영 일정</Highlight>이 있어요
            <Arrow src={arrow} />
          </Title>
          {reservation.slice(0, 3).map((item, idx) => (
            <UpcomingSchedule
              key={idx}
              nickname={item.customer.nickname}
              snapType={category.filter((el) => el.key === item.category)}
              headCount={item.people}
              time={item.time || 0}
              place={item.wishPlace}
              requirement={item.request}
              date={item.planDate.slice(0, 10)}
              num={item.planId}
              id={item.planId}
              profile={item.customer.profile}
              btn_text="예약완료"
            />
          ))}
        </>
      )}
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
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 1rem;
  }
`;

export default UpcomingContainer;
