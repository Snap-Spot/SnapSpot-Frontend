export const categoryList = [
  {
    eng: "COUPLE",
    kor: "커플스냅",
    id: 0,
  },
  {
    eng: "FRIEND",
    kor: "우정스냅",
    id: 1,
  },
  {
    eng: "GRADUATION",
    kor: "졸업스냅",
    id: 2,
  },
  {
    eng: "WEDDING",
    kor: "웨딩스냅",
    id: 3,
  },
  {
    eng: "FAMILY",
    kor: "가족스냅",
    id: 4,
  },
  {
    eng: "ETC",
    kor: "기타",
    id: 5,
  },
];

export const getCategoryFromEng = (engString) => {
  let result = {};
  categoryList.map((el) => {
    if (el.eng === engString) {
      result = el;
    }
  });

  return result;
};
