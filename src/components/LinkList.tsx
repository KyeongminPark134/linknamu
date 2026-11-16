"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Props = { links: LinkItem[] };

export default function LinkList({ links }: Props) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: Record<string, number> }) => {
        // 응답 전에 이미 누른 클릭(+1)이 있으면 덮어쓰지 않도록 큰 값을 유지
        setCounts((prev) => {
          const next = { ...data.counts };
          for (const [id, n] of Object.entries(prev)) next[id] = Math.max(next[id] ?? 0, n);
          return next;
        });
      })
      .catch((err) => console.error("클릭 수 불러오기 실패:", err));
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 반영
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // keepalive: 페이지가 이동해도 요청이 끝까지 전송되도록
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch((err) => console.error("클릭 수 저장 실패:", err));
  }

  return (
    <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            emoji={link.emoji}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
