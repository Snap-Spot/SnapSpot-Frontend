import styled from "styled-components";
import LayOut from "../../components/common/LayOut";
import ReservationContainer from "../../components/Photographers/Reservation/ReservationContainer";
import RequestContainer from "../../components/Photographers/Reservation/RequestContainer";
import UpcomingContainer from "../../components/Photographers/Reservation/UpcomingContainer";

const Reservation = () => {
  return (
    <LayOut>
      <Container>
        <ReservationContainer />
        <RequestContainer />
        <UpcomingContainer />
      </Container>
    </LayOut>
  );
};

const Container = styled.div`
  width: 75%;
  max-width: 1052px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 90%;
  }
`;

export default Reservation;
