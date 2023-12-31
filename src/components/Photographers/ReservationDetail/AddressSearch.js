import { useState, useEffect } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

function AddressSearch({ setPlaceAddress, placeAddress }) {
  // const [address, setAddress] = useState(""); // 주소 상태
  const [popupVisible, setPopupVisible] = useState(false); // 주소 검색 팝업

  // Daum 우편번호 검색 완료 시 호출되는 함수
  const handleAddress = (data) => {
    setPlaceAddress(data.address);
    setPopupVisible(false);
  };

  return (
    <Container>
      <AddressInput
        type="text"
        id="sample5_address"
        placeholder="처음 만날 장소를 검색해 주세요!"
        value={placeAddress}
        readOnly
      />
      <SearchBtn
        type="button"
        onClick={() => setPopupVisible(true)}
        value="주소 검색"
      />
      <br />
      {popupVisible && (
        <PopupContainer>
          <PopupContent>
            <Header>
              <P>주소를 검색하고 선택해주세요.</P>
              <CloseBtn onClick={() => setPopupVisible(false)}>x</CloseBtn>
            </Header>
            <DaumPostcode
              style={{
                height: "510px",
              }}
              onComplete={handleAddress}
              autoClose
            />
          </PopupContent>
        </PopupContainer>
      )}
    </Container>
  );
}

const P = styled.p`
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  font-size: 30px;
  border: none;
  background-color: white;
  margin: 0;
  margin-right: 1rem;
  margin-top: -0.3rem;
  cursor: pointer;
  color: black;

  @media (max-width: 768px) {
    font-size: 23px;
    margin-right: 0.4rem;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: white;
  width: 600px;
  height: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 300px;
    height: 560px;
  }
`;

const AddressInput = styled.input`
  width: 400px;
  height: 25px;
  font-size: 18px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--darkgrey, #777);
  outline: none;
  margin-top: 0.8rem;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    width: 180px;
    height: 20px;
    font-size: 14px;
    margin-top: 0.4rem;
  }
`;

const SearchBtn = styled.input`
  width: 5rem;
  height: 2rem;
  border-radius: 8px;
  font-size: 18px;
  border: none;
  font-weight: 500;
  border: 1px solid gray;
  background-color: #fafafa;
  margin-top: 0.8rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 0.5rem;
    margin-left: auto;
    width: 4rem;
    height: 1.5rem;
  }
`;

export default AddressSearch;
