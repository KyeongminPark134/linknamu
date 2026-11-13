export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로 (예: "/profile.jpg"). 비워 두면 이름 첫 글자를 표시 */
  image?: string;
  links: LinkItem[];
};

// TODO: 본인 정보와 링크로 바꿔 주세요.
export const profile: Profile = {
  name: "박경민",
  bio: "에이전틱 코딩 입문자",
  links: [
    { id: "instagram", title: "Instagram", url: "https://instagram.com" },
    { id: "blog", title: "블로그", url: "https://blog.naver.com" },
    { id: "github", title: "GitHub", url: "https://github.com" },
  ],
};
