import React, { useRef } from "react";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import nullstar from "../../../assets/mypage/modals/nullstar.png";
import filledstar from "../../../assets/mypage/modals/filledstar.png";
import photo from "../../../assets/mypage/modals/photo.png";
import { postReview } from "../../../api/review";

const ReviewModal = ({ planId }) => {
  const imgRef = useRef();
  const [inputs, setInputs] = useState({
    planId: planId,
    score: 0,
    title: "",
    comment: "",
    image: "",
  });
  const { title, comment } = inputs;
  const [previewImg, setPreviewImg] = useState(null);

  //사진 첨부 및 미리보기
  const uploadImg = () => {
    let file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async (e) => {
      setPreviewImg(e.target.result);

      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        image: file, // name 키를 가진 값을 value 로 설정
      });
    };
  };
  const submitReview = async () => {
    try {
      const res = await postReview(inputs);
      if (res.stauts === 201) {
        alert("리뷰가 등록되었습니다.");
        window.location.reload();
      }
    } catch (err) {
      alert("제목, 별점, 리뷰, 사진을 모두 작성 및 첨부해주세요");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <Wrapper>
      <div className="subTitle">제목</div>
      <input
        name="title"
        placeholder="제목을 작성하세요."
        className="titleField"
        onChange={handleChange}
        value={title}
      />
      <div className="subTitle">별점을 매겨주세요</div>
      <Stars setInputs={setInputs} inputs={inputs} />
      <Form
        name="comment"
        placeholder="리뷰를 작성해주세요.(1000자 이내)"
        onChange={handleChange}
        value={comment}
      ></Form>
      <input
        className="imageInput"
        accept=".jpg, .jpeg, .png"
        type="file"
        id="file"
        multiple
        onChange={uploadImg}
        ref={imgRef}
      />
      <label htmlFor="file">
        <div className="subTitle" style={{ cursor: "pointer" }}>
          사진 첨부하기 <img src={photo} alt="" />
        </div>
      </label>

      <Preview previewImg={previewImg} />

      <div className="button" onClick={submitReview}>
        등록
      </div>
    </Wrapper>
  );
};

export default ReviewModal;

const Stars = ({ setInputs, inputs }) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  useEffect(() => {
    //setStarCount(clicked.filter(Boolean).length);
    setInputs({
      ...inputs,
      score: clicked.filter(Boolean).length,
    });
  }, [clicked]);
  return (
    <>
      <StarContainer>
        {array.map((el) =>
          clicked[el] ? (
            <div>
              <img
                src={filledstar}
                key={el}
                onClick={() => handleStarClick(el)}
                alt=""
              />
            </div>
          ) : (
            <div>
              <img
                src={nullstar}
                key={el}
                onClick={() => handleStarClick(el)}
                alt=""
              />
            </div>
          )
        )}
      </StarContainer>
    </>
  );
};

const Preview = ({ previewImg }) => {
  return (
    <PreviewContainer>
      {previewImg && (
        <div className="image">
          <img src={previewImg} alt="" />
        </div>
      )}
    </PreviewContainer>
  );
};

const StarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: 8px;
  div {
    margin-right: 6px;
  }

  img {
    width: 32px;
    height: 32px;
    @media (max-width: 768px) {
      //모바일
      width: 20px;
      height: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  .imageInput {
    display: none;
  }
  .titleField {
    margin: 14px 0;
    width: 75%;
    height: 44px;
    border-radius: 22px;
    background: var(--lightgrey1, #e6e6e6);
    outline: none;
    border: none;
    font-size: 20px;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 1rem;
    @media (max-width: 768px) {
      margin: 11px 0;
      width: 100%;
      height: 34px;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .subTitle {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 400;
    }
    display: flex;
    align-items: center;

    img {
      margin-left: 13px;
      width: 32px;
      height: 28.681px;
      flex-shrink: 0;
      margin-top: 3px;
      @media (max-width: 768px) {
        margin-left: 3px;
        width: 16px;
        height: 14.341px;
        flex-shrink: 0;
      }
    }
  }
  .button {
    cursor: pointer;
    margin: auto;
    display: flex;
    width: 240px;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    background: #a6b9ff;
    margin-top: 30px;
    @media (max-width: 768px) {
      width: 120px;
      height: 40px;
      font-size: 14px;
    }
  }
`;
const Form = styled.textarea`
  display: flex;
  min-height: 160px;
  box-sizing: border-box;
  padding: 20px 32px;
  width: 100%;
  border: none;
  border-radius: 32px;
  background: var(--lightgrey-1, #e6e6e6);
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  resize: none;
  font-size: 16px;
  @media (max-width: 768px) {
    border-radius: 12px;
    display: flex;
    min-height: 100px;
    padding: 12px 12px;
    align-items: flex-start;
    font-size: 12px;
  }
`;
const PreviewContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  justify-content: start;
  height: 140px;
  @media (max-width: 768px) {
    height: 80px;
  }
  .image {
    border-radius: 12px;
    background: lightgray 50% / cover no-repeat;
    margin-right: 10px;
  }
  img {
    width: 140px;
    height: 140px;

    border-radius: 12px;
    @media (max-width: 768px) {
      height: 80px;
      width: 80px;
    }
  }
`;
