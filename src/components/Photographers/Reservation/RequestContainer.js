import UpcomingSchedule from "./UpcomingSchedule";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../../assets/photograph/arrow.png";
import { category } from "../../common/category";

const RequestContainer = ({ request }) => {
  const navigate = useNavigate();

  return (
    <>
      {request.length > 0 && (
        <>
          <Title onClick={() => navigate("/photographer/request")}>
            새로 들어온 <Highlight>촬영 요청</Highlight>이 있어요
            <Arrow src={arrow} />
          </Title>
          {request.slice(0, 3).map((item, idx) => (
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
              btn_text="예약신청"
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

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.3rem;
  align-self: flex-start;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 1rem;
  }
`;

const Highlight = styled.span`
  color: #3c3aac;
`;

export default RequestContainer;
