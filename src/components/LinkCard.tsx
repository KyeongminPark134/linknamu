type Props = {
  title: string;
  url: string;
  emoji?: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, emoji, count, onClick }: Props) {
  // mailto: 같은 링크는 새 탭으로 열 필요가 없다
  const isWeb = /^https?:\/\//.test(url);

  return (
    <a
      href={url}
      onClick={onClick}
      {...(isWeb && { target: "_blank", rel: "noopener noreferrer" })}
      className="group relative flex w-full items-center justify-center gap-2 rounded-3xl border border-white/60 bg-white/45 px-16 py-4 text-[15px] font-semibold tracking-tight text-stone-800 shadow-[0_4px_20px_-6px_rgba(120,72,40,0.18)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_8px_28px_-8px_rgba(120,72,40,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 active:translate-y-0 sm:py-[18px]"
    >
      {emoji && (
        <span aria-hidden className="text-xl leading-none">
          {emoji}
        </span>
      )}
      {title}
      <span className="absolute right-5 text-xs font-medium tabular-nums text-stone-500">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
