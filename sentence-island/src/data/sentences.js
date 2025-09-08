export const sentences = [
  // 연애 카테고리
  {
    id: 1,
    text: "사랑은 두 사람이 함께 같은 방향을 바라보는 것입니다.",
    author: "생텍쥐페리",
    book: "어린왕자",
    category: "love",
    tags: ["연애", "사랑", "관계"]
  },
  {
    id: 2,
    text: "진정한 사랑은 서로를 완성시키는 것이 아니라, 서로를 받아들이는 것입니다.",
    author: "익명",
    book: "",
    category: "love",
    tags: ["연애", "수용", "이해"]
  },
  {
    id: 3,
    text: "사랑에 빠지는 것은 쉽지만, 사랑을 지켜나가는 것이 진짜 사랑입니다.",
    author: "익명",
    book: "",
    category: "love",
    tags: ["연애", "지속", "노력"]
  },
  
  // 우정 카테고리
  {
    id: 4,
    text: "진정한 친구는 당신의 과거를 이해하고, 현재를 믿으며, 미래를 응원하는 사람입니다.",
    author: "익명",
    book: "",
    category: "friendship",
    tags: ["우정", "이해", "응원"]
  },
  {
    id: 5,
    text: "친구는 당신이 누구인지 알면서도 여전히 당신을 사랑하는 사람입니다.",
    author: "일리아 버트",
    book: "",
    category: "friendship",
    tags: ["우정", "수용", "사랑"]
  },
  {
    id: 6,
    text: "좋은 친구는 당신의 최고의 순간을 함께 축하하고, 최악의 순간을 함께 견뎌줍니다.",
    author: "익명",
    book: "",
    category: "friendship",
    tags: ["우정", "동반", "위로"]
  },
  
  // 진로 카테고리
  {
    id: 7,
    text: "당신의 일이 당신의 삶에 큰 부분을 차지할 테니, 만족하려면 위대한 일이라고 믿는 일을 하세요.",
    author: "스티브 잡스",
    book: "",
    category: "career",
    tags: ["진로", "만족", "열정"]
  },
  {
    id: 8,
    text: "성공의 비결은 남들이 하기 싫어하는 일을 하는 것입니다.",
    author: "토마스 에디슨",
    book: "",
    category: "career",
    tags: ["진로", "성공", "차별화"]
  },
  {
    id: 9,
    text: "꿈을 이루는 가장 좋은 방법은 깨어나는 것입니다.",
    author: "폴 발레리",
    book: "",
    category: "career",
    tags: ["진로", "꿈", "실행"]
  },
  
  // 위로 카테고리
  {
    id: 10,
    text: "힘들어하는 당신에게, 지금 이 순간도 지나갈 것입니다.",
    author: "익명",
    book: "",
    category: "comfort",
    tags: ["위로", "시간", "희망"]
  },
  {
    id: 11,
    text: "울어도 괜찮습니다. 눈물은 마음을 씻어주는 빗물이니까요.",
    author: "익명",
    book: "",
    category: "comfort",
    tags: ["위로", "슬픔", "치유"]
  },
  {
    id: 12,
    text: "당신은 생각보다 훨씬 강한 사람입니다. 이미 많은 것을 견뎌냈잖아요.",
    author: "익명",
    book: "",
    category: "comfort",
    tags: ["위로", "강함", "용기"]
  },
  
  // 여행 카테고리
  {
    id: 13,
    text: "여행은 우리를 겸손하게 만듭니다. 세상에서 우리가 차지하는 자리가 얼마나 작은지 보여주죠.",
    author: "구스타브 플로베르",
    book: "",
    category: "travel",
    tags: ["여행", "겸손", "세상"]
  },
  {
    id: 14,
    text: "여행의 진짜 발견은 새로운 풍경을 찾는 것이 아니라 새로운 눈을 갖는 것입니다.",
    author: "마르셀 프루스트",
    book: "",
    category: "travel",
    tags: ["여행", "발견", "관점"]
  },
  {
    id: 15,
    text: "세계는 한 권의 책이고, 여행하지 않는 사람은 한 페이지만 읽는 것입니다.",
    author: "성 아우구스티누스",
    book: "",
    category: "travel",
    tags: ["여행", "경험", "배움"]
  }
];

export const categories = {
  all: { name: '전체', color: '#87CEEB', emoji: '🌊' },
  love: { name: '사랑', color: '#FF69B4', emoji: '💞' },
  friendship: { name: '우정', color: '#87CEEB', emoji: '👥' },
  career: { name: '진로', color: '#FFD700', emoji: '🧭' },
  comfort: { name: '위로', color: '#98FB98', emoji: '💧' },
  travel: { name: '여행', color: '#DDA0DD', emoji: '🧳' }
};