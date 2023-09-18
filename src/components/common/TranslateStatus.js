export const statusList = [
  {
    eng: "REQUEST",
    kor: "예약신청",
    id: 0,
  },
  {
    eng: "DEPOSIT",
    kor: "입금요청",
    id: 1,
  },
  {
    eng: "REFUSE",
    kor: "예약거절",
    id: 2,
  },
  {
    eng: "RESERVED",
    kor: "예약완료",
    id: 3,
  },
  {
    eng: "TODAY",
    kor: "촬영진행",
    id: 4,
  },
  {
    eng: "COMPLETE",
    kor: "촬영완료",
    id: 5,
  },
  {
    eng: "DELIVERY",
    kor: "사진전달",
    id: 6,
  },
  {
    eng: "CANCEL",
    kor: "예약취소",
    id: 7,
  },
];

export const getStatusFromEng = (engString) => {
  let result = {};
  statusList.map((el) => {
    if (el.eng === engString) {
      result = el;
    }
  });

  return result;
};
