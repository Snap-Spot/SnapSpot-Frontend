import styled from "styled-components";
import LayOut from "../../components/common/LayOut";
import BasicInput from "../../components/Photographers/Custom/BasicInput";
import OtherInputs from "../../components/Photographers/Custom/OtherInputs";
import { getCustomInfo, putCustomInfo } from "../../api/photographer";
import { useEffect, useState } from "react";

const Custom = () => {
  const [data, setData] = useState({ member: {} });
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [paymentImage, setPaymentImage] = useState("");
  const [lowestPay, setLowestPay] = useState("");
  const [bio, setBio] = useState("");
  const [areaId, setAreaId] = useState([]);
  const [sns, setSns] = useState({
    instagram: "",
    twitter: "",
    kakaoChannel: "",
    naverBlog: "",
    homepage: "",
  });
  const [specialList, setSpecialList] = useState([]);
  const [tag, setTag] = useState({
    tag1: "",
    tag2: "",
    tag3: "",
  });
  const [unableDates, setUnableDates] = useState([]);
  const [image, setImage] = useState({});

  const getCustomInfos = async () => {
    try {
      const res = await getCustomInfo();
      setData(res);
      setNickname(res.member.nickname);
      setProfileImage(res.member.profile);
      setPaymentImage(res.paymentImage);
      setLowestPay(res.lowestPay);
      setAreaId(res.areas);
      setSns(res.sns);
      setBio(res.bio);
      setSpecialList(res.specialList);
      setTag(res.tags);
      setUnableDates(res.unableSchedules.unableDates);
      setImage(res.images);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("닉네임", nickname);
  // console.log("프로필", profileImage);

  const putCustomInfos = async () => {
    try {
      const res = await putCustomInfo(
        nickname,
        profileImage,
        paymentImage,
        lowestPay,
        bio,
        areaId,
        sns,
        specialList,
        tag,
        unableDates,
        image
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCustomInfos();
  }, []);

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
            />
            <Line2 />
            <OtherInputs
              location={areaId}
              sns={sns}
              bio={bio}
              specialList={specialList}
              tags={tag}
              unableSchedules={unableDates}
              images={image}
            />
            <ChangeBtn onClick={() => putCustomInfos()}>변경하기</ChangeBtn>
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
