// FilteringBox에 사용되는 리스트 목록입니다.

export const regions = [
  {
    name: "서울",
    subregions: [
      { areaId: 1, subregion: "강남/역삼/삼성/논현" },
      { areaId: 2, subregion: "서초/신사/방배" },
      { areaId: 3, subregion: "잠실/신천" },
      { areaId: 4, subregion: "여의도/당산/문래" },
      { areaId: 5, subregion: "신림/서울대/사당/동작" },
      { areaId: 6, subregion: "천호/길동/둔촌" },
      { areaId: 7, subregion: "화곡/까치산/양천/목동" },
      { areaId: 8, subregion: "구로/금천/오류/신도림" },
      { areaId: 9, subregion: "신촌/홍대/합정/연남" },
      { areaId: 10, subregion: "망원/성산/상암" },
      { areaId: 11, subregion: "구파발/연신내/불광/응암" },
      { areaId: 12, subregion: "종로/대학로/동묘" },
      { areaId: 13, subregion: "성신여대/성북/월곡" },
      { areaId: 14, subregion: "이태원/용산/서울역" },
      { areaId: 15, subregion: "시청/명동/회현" },
      { areaId: 16, subregion: "동대문/을지로/충무로" },
      { areaId: 17, subregion: "신당/약수/한강진" },
      { areaId: 18, subregion: "회기/고려대/청량리/신설동" },
      { areaId: 19, subregion: "장안동/답십리" },
      { areaId: 20, subregion: "왕십리/성수/금호" },
      { areaId: 21, subregion: "수유/미아" },
      { areaId: 22, subregion: "상봉/중랑/면목" },
      { areaId: 23, subregion: "태릉/노원/도봉/창동" },
    ],
  },
  {
    name: "경기",
    subregions: [
      { areaId: 24, subregion: "수원 인계" },
      { areaId: 25, subregion: "수원역/구운/행궁/장안구" },
      { areaId: 26, subregion: "수원시청/권선/영통/세류" },
      { areaId: 27, subregion: "안양/평촌/인덕원/과천" },
      { areaId: 28, subregion: "성남/분당/위례" },
      { areaId: 29, subregion: "용인" },
      { areaId: 30, subregion: "동탄/화성/오산/병점" },
      { areaId: 31, subregion: "하남/광주/여주/이천" },
      { areaId: 32, subregion: "안산 중앙역" },
      { areaId: 33, subregion: "안산 고잔/상록수/선부동/월피동" },
      { areaId: 34, subregion: "군포/의왕/금정/산본" },
      { areaId: 35, subregion: "시흥/월곶" },
      { areaId: 36, subregion: "광명" },
      { areaId: 37, subregion: "평택/송탄/안성" },
      { areaId: 38, subregion: "부천" },
      { areaId: 39, subregion: "일산/고양" },
      { areaId: 40, subregion: "파주" },
      { areaId: 41, subregion: "김포" },
      { areaId: 42, subregion: "의정부" },
      { areaId: 43, subregion: "구리" },
      { areaId: 44, subregion: "남양주" },
      { areaId: 45, subregion: "포천" },
      { areaId: 46, subregion: "양주/동두천/연천" },
      { areaId: 47, subregion: "양평" },
      { areaId: 48, subregion: "가평/청평" },
      { areaId: 49, subregion: "제부도/대부도" },
    ],
  },
  {
    name: "인천",
    subregions: [
      { areaId: 50, subregion: "부평" },
      { areaId: 51, subregion: "구월" },
      { areaId: 52, subregion: "석남/서구청/검단" },
      { areaId: 53, subregion: "작전/경인교대" },
      { areaId: 54, subregion: "주안" },
      { areaId: 55, subregion: "송도/연수" },
      { areaId: 56, subregion: "인천공항/을왕리/영종도" },
      { areaId: 57, subregion: "월미도/신포/동인천/연안부두" },
      { areaId: 58, subregion: "강화/웅진" },
      { areaId: 59, subregion: "동암/간석" },
      { areaId: 60, subregion: "소래포구/호구포" },
      { areaId: 61, subregion: "용현/숭의/도화/동구" },
    ],
  },
  {
    name: "강원",
    subregions: [
      { areaId: 62, subregion: "춘천/강촌" },
      { areaId: 63, subregion: "원주" },
      { areaId: 64, subregion: "경포대/사천/주문진/정동진" },
      { areaId: 65, subregion: "강릉역/교동/옥계" },
      { areaId: 66, subregion: "영월/정선" },
      { areaId: 67, subregion: "속초/고성" },
      { areaId: 68, subregion: "양양" },
      { areaId: 69, subregion: "동해/삼척/태백" },
      { areaId: 70, subregion: "평창" },
      { areaId: 71, subregion: "홍천/횡성" },
      { areaId: 72, subregion: "화천/철원/인제/양구" },
    ],
  },
  {
    name: "제주",
    subregions: [
      { areaId: 73, subregion: "서귀포시/중문/모슬포" },
      { areaId: 74, subregion: "이호테우/하귀/애월/한림/협재" },
      { areaId: 75, subregion: "함덕/김녕/세화" },
      { areaId: 76, subregion: "남원/표선/성산" },
      { areaId: 77, subregion: "용담/도두/뎐동/노형동" },
      { areaId: 78, subregion: "제주시청/탑동/건입동" },
    ],
  },

  {
    name: "대전",
    subregions: [
      { areaId: 79, subregion: "유성구" },
      { areaId: 80, subregion: "은행/대흥/선화/유천" },
      { areaId: 81, subregion: "용전/복합터미널" },
      { areaId: 82, subregion: "둔산/용문/월평" },
      { areaId: 83, subregion: "중리/신탄진" },
    ],
  },
  {
    name: "충북",
    subregions: [
      { areaId: 84, subregion: "청주 흥덕구/서원구" },
      { areaId: 85, subregion: "청주 상당구/청원구" },
      { areaId: 86, subregion: "충주/수안보" },
      { areaId: 87, subregion: "제천/단양" },
      { areaId: 88, subregion: "진천/음성" },
      { areaId: 89, subregion: "보은/옥천/괴산/증평/영동" },
    ],
  },
  {
    name: "충남/세종",
    subregions: [
      { areaId: 90, subregion: "천안 서북구" },
      { areaId: 91, subregion: "천안 동남구" },
      { areaId: 92, subregion: "아산" },
      { areaId: 93, subregion: "공주/동학사/세종" },
      { areaId: 94, subregion: "계룡/금산/논산/청양" },
      { areaId: 95, subregion: "예산/홍성" },
      { areaId: 96, subregion: "태안/안면도/서산" },
      { areaId: 97, subregion: "당진" },
      { areaId: 98, subregion: "보령/대천해수욕장" },
      { areaId: 99, subregion: "서천/부여" },
    ],
  },
  {
    name: "부산",
    subregions: [
      { areaId: 100, subregion: "해운대/센텀시티/재송" },
      { areaId: 101, subregion: "송정/기장/정관/오시리아 관광단지" },
      { areaId: 102, subregion: "광안리/수영" },
      { areaId: 103, subregion: "경성대/대연/용호동/문현" },
      { areaId: 104, subregion: "서면/양정/초읍/부산시민공원" },
      { areaId: 105, subregion: "남포동/중앙동/태종대/송도/영도" },
      { areaId: 106, subregion: "부산역/범일동/부산진역" },
      { areaId: 107, subregion: "연산/토곡" },
      { areaId: 108, subregion: "동래/사직/미남/온천장/부산대/구서/서동" },
      { areaId: 109, subregion: "사상/엄궁/학장" },
      { areaId: 110, subregion: "덕천/화명/만덕/구포" },
      {
        areaId: 111,
        subregion: "하단/명지/김해공항/다대포/강서/신호/괴정/지사",
      },
    ],
  },
  {
    name: "울산",
    subregions: [
      { areaId: 112, subregion: "남구/중구" },
      { areaId: 113, subregion: "동구/북구/울주군" },
    ],
  },
  {
    name: "경남",
    subregions: [
      { areaId: 114, subregion: "창원 상남동/용호동/중앙동/창원시청" },
      {
        areaId: 115,
        subregion: "창원 명서동/봉곡동/팔용동/북면온천/창원종합버스터미널",
      },
      { areaId: 116, subregion: "마산" },
      { areaId: 117, subregion: "진해" },
      { areaId: 118, subregion: "김해/장유" },
      { areaId: 119, subregion: "양산/밀양" },
      { areaId: 120, subregion: "진주" },
      { areaId: 121, subregion: "거제/통영/고성" },
      { areaId: 122, subregion: "사천/남해" },
      { areaId: 123, subregion: "하동/산청/함양" },
      { areaId: 124, subregion: "거창/함안/창녕/합천/의령" },
    ],
  },
  {
    name: "대구",
    subregions: [
      { areaId: 125, subregion: "동성로/서문시장/대구역/경북대/엑스코" },
      {
        areaId: 126,
        subregion: "동대구역/신천동/수성못/범어/라이온즈파크/알파시티/시지",
      },
      {
        areaId: 127,
        subregion: "대구공항/혁신도시/동촌유원지/팔공산/이시아폴리스/군위",
      },
      {
        areaId: 128,
        subregion: "서대구역/북부정류장/평리/비산/칠곡지구/동천동/금호지구",
      },
      {
        areaId: 129,
        subregion:
          "두류/이월드/본리동/죽전동/서부정류장/앞산공원/안지랑/대명동/봉덕동",
      },
      {
        areaId: 130,
        subregion: "성서/계명대/상인동/대곡/현풍/테크노폴리스/가창/달성군",
      },
    ],
  },
  {
    name: "경북",
    subregions: [
      { areaId: 131, subregion: "포항 남구" },
      { areaId: 132, subregion: "포항 북구" },
      { areaId: 133, subregion: "경주" },
      { areaId: 134, subregion: "구미" },
      { areaId: 135, subregion: "경산" },
      { areaId: 136, subregion: "안동" },
      { areaId: 137, subregion: "영천/청도" },
      { areaId: 138, subregion: "김천/칠곡/성주" },
      { areaId: 139, subregion: "문경/상주/영주/예천/의성/봉화" },
      { areaId: 140, subregion: "울진/영덕/청송" },
      { areaId: 141, subregion: "울릉도" },
    ],
  },
  {
    name: "광주",
    subregions: [
      { areaId: 142, subregion: "상무지구/금호지구/유스퀘어/서구" },
      {
        areaId: 143,
        subregion: "충장로/대인시장/국립아시아문화전당/동구/남구",
      },
      { areaId: 144, subregion: "첨단지구/양산동" },
      { areaId: 145, subregion: "하남/광주여대/송정역/광산구" },
      { areaId: 146, subregion: "광주역/기아챔피언스월드/전대사거리/북구" },
    ],
  },
  {
    name: "전북",
    subregions: [
      { areaId: 147, subregion: "전주 덕진구" },
      { areaId: 148, subregion: "전주 완산구/완주" },
      { areaId: 149, subregion: "군산" },
      { areaId: 150, subregion: "익산" },
      { areaId: 151, subregion: "남원/임실/순창/무주/진안/장수" },
      { areaId: 152, subregion: "정읍/부안/김제/고창" },
    ],
  },
];

export const sections = [
  { key: "COUPLE", label: "커플스냅" },
  { key: "FRIENDSHIP", label: "우정스냅" },
  { key: "GRADUATION", label: "졸업스냅" },
  { key: "WEDDING", label: "웨딩스냅" },
  { key: "FAMILY", label: "가족스냅" },
];

export const orders = ["기본", "별점 높은 순", "가격 낮은 순", "후기 많은 순"];
