import styled from "styled-components";
import LayOut from "../../components/common/LayOut";
import BasicInput from "../../components/Photographers/Custom/BasicInput";
import OtherInputs from "../../components/Photographers/Custom/OtherInputs";
import { getCustomInfo, putCustomInfo } from "../../api/photographer";
import { useEffect, useState } from "react";
import { category } from "../../components/common/category";

const Custom = () => {
  const [data, setData] = useState({ member: {} });
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [paymentImage, setPaymentImage] = useState("");
  const [lowestPay, setLowestPay] = useState("");
  const [bio, setBio] = useState("");
  const [areaId, setAreaId] = useState([]);
  const [sns, setSns] = useState({
    homepage: "",
    instagram: "",
    kakaoChannel: "",
    twitter: "",
    naverBlog: "",
  });
  const [specialList, setSpecialList] = useState([]);
  const [tag, setTag] = useState({
    tag1: "",
    tag2: "",
    tag3: "",
  });
  const [unableDates, setUnableDates] = useState([]);
  const [image, setImage] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
    image8: "",
    image9: "",
    image10: "",
  });

  useEffect(() => {
    getCustomInfos();
  }, []);

  const getCustomInfos = async () => {
    try {
      const res = await getCustomInfo();

      setData(res);
      setNickname(res.member.nickname);
      setProfileImage(res.member.profile);
      setPaymentImage(res.paymentImage);
      setLowestPay(res.lowestPay);
      setAreaId(res.areas.map((el) => el.areaId));
      setSns(res.sns);
      setBio(res.bio);
      setSpecialList(
        category
          .filter((item) => res.specialList.keywords.includes(item.key))
          .map((el) => el.label)
      );
      setTag(res.tags);
      setUnableDates(res.unableSchedules.unableDates);
      setImage(res.images);

      console.log("결과", res);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("닉네임", nickname);
  // console.log("프로필", profileImage);
  // console.log("가격표", paymentImage);
  // console.log("가격", lowestPay);
  // console.log("소개", bio);
  // console.log("지역id", areaId);
  // console.log("태그", tag);
  // console.log("이미지", image);
  // console.log("전문분야", specialList);
  // console.log("날짜", unableDates);
  // console.log("sns", sns);

  const putCustomInfos = async () => {
    let special = category
      .filter((item) => specialList.includes(item.label))
      .map((el) => el.key);

    const res = await putCustomInfo(
      nickname,
      profileImage,
      paymentImage,
      lowestPay,
      bio,
      areaId,
      sns,
      special,
      tag,
      unableDates,
      image
    );

    console.log(res);
  };

  return (
    <LayOut>
      <Container>
        {data && data.member && (
          <>
            <Title>작가 페이지 커스텀</Title>
            <Line />
            <BasicInput
              profile={profileImage}
              nickname={nickname}
              priceImg={paymentImage}
              lowestPay={lowestPay}
              setNickname={setNickname}
              setProfileImage={setProfileImage}
              setPaymentImage={setPaymentImage}
              setLowestPay={setLowestPay}
            />
            <Line2 />
            <OtherInputs
              areaId={areaId}
              sns={sns}
              bio={bio}
              specialList={specialList}
              tags={tag}
              unableSchedules={unableDates}
              images={image}
              setAreaId={setAreaId}
              setSns={setSns}
              setBio={setBio}
              setSpecialList={setSpecialList}
              setTag={setTag}
              setUnableDates={setUnableDates}
              setImage={setImage}
            />
            <ChangeBtn onClick={putCustomInfos}>변경하기</ChangeBtn>
          </>
        )}
      </Container>
    </LayOut>
  );
};

const ChangeBtn = styled.button`
  border-radius: 30px;
  background: var(--main-font-color, #3c3aac);
  margin-top: 5rem;
  display: flex;
  width: 31rem;
  height: 46px;
  padding: 6px 15px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  border: none;
  margin-bottom: 10rem;
  margin-left: 11rem;

  @media (max-width: 768px) {
    width: 333px;
    height: 39px;
    margin: 0;
    margin-top: 4rem;
  }
`;

const Container = styled.div`
  width: 75%;
  max-width: 1052px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  align-self: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Line2 = styled(Line)`
  background: #e6e6e6;
  width: 777px;
  margin-top: 1.3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export default Custom;
