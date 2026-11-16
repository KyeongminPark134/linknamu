export type LinkItem = {
  id: string;
  title: string;
  url: string;
  /** 링크 제목 앞에 표시할 이모지 */
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로 (예: "/profile.jpg"). 비워 두면 이름 첫 글자를 표시 */
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "박경민",
  bio: "왕초보 개발자 | 클로드 코드를 활용한 바이브 코딩에 관심이 많아요",
  image: "/profile.jpg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/KyeongminPark134", emoji: "😺" },
    // TODO: 실제 블로그 주소로 바꿔 주세요.
    { id: "blog", title: "블로그", url: "https://blog.naver.com", emoji: "✍️" },
    { id: "email", title: "이메일", url: "mailto:spencer04@snu.ac.kr", emoji: "🌐" },
  ],
};
