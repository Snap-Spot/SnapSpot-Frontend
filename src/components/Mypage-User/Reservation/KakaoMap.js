import React, { useEffect } from "react";
import { styled } from "styled-components";
import arrow from "../../../assets/mypage/reservation/arrow.png";
import mapMarker from "../../../assets/mypage/reservation/mapMarker.png";
const KakaoMap = () => {
  const { kakao } = window;
  const openKakaoMap = () => {
    window.open(
      "https://map.kakao.com/link/to/카카오판교오피스,37.402056,127.108212",
      "_blank"
    );
  };
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(container, options); // 지도를 생성합니다

    var markerSize;
    if (matchMedia("screen and (min-width: 768px)").matches) {
      // 768px 이상에서 사용할 스크립트
      markerSize = new kakao.maps.Size(30, 40);
    } else {
      // 768px 미만에서 사용할 스크립트
      markerSize = new kakao.maps.Size(19.286, 27.2);
    }
    const imageSrc = mapMarker, // 마커이미지의 주소입니다
      imageSize = markerSize, // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(14, 39) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커가 표시될 위치입니다
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 마커가 드래그 가능하도록 설정합니다
    marker.setDraggable(false);
  }, []);

  return (
    <Wrapper>
      <div className="location">게임파티룸 시크 신대방점</div>
      <div className="detailLocation">서울 관악구 신사로 128-1 지하 1층</div>
      <Container>
        <Map id="map" />
        <div className="button" onClick={openKakaoMap}>
          카카오로 길찾기 <img src={arrow} alt="" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default KakaoMap;
const Map = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const Container = styled.div`
  width: 80%;
  height: 80%;
  margin: 0px auto;
  margin-top: 35px;

  @media (max-width: 768px) {
    //모바일
    width: 80%;
    height: 70%;
    margin-top: 17px;
  }
  .button {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    color: var(--black, #060606);
    font-size: 20px;
    font-weight: 500;
    margin-top: 12px;
    @media (max-width: 768px) {
      //모바일
      font-size: 14px;
      font-weight: 400;
    }

    img {
      width: 12px;
      height: 20px;
      margin-top: 3px;
      margin-left: 10px;
      @media (max-width: 768px) {
        //모바일
        width: 8px;
        height: 13.333px;
      }
    }
  }
`;
const Wrapper = styled.div`
  margin-top: 84px;
  width: 100%;
  height: 1018px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    //모바일
    height: 394px;
    margin-top: 40px;
  }

  .location {
    color: var(--black, #060606);
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
      //모바일
      font-size: 16px;
    }
  }

  .detailLocation {
    margin-top: 5px;
    color: var(--black, #060606);
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 768px) {
      //모바일
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
