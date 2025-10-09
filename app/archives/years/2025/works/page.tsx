"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import { works as allWorks } from "@/app/lib/data/works";
import { designers as allDesigners } from "@/app/lib/data/designers";

type StudioKey = "convergence" | "innovation";

const STUDIOS: Record<StudioKey, { label: string; en: string; icon: string; desc: string; professors: string[] }> = {
  convergence: {
    label: "융합디자인스튜디오",
    en: "Convergence Design studio",
    icon: "/images/works/convergence.svg",
    desc:
      "융합디자인스튜디오는 다양한 전공과 배경을 가진 학생들이 모여 협업하는 실험적 디자인 수업입니다. 이 수업에서는 문제 해결을 위한 창의적인 방법론과 디자인 프로세스를 학습하며, 실제 프로젝트를 통해 아이디어를 구체화합니다. 학생들은 시각디자인, 서비스 디자인, 인터페이스 기획 등 여러 분야를 융합하여 새로운 결과물을 만들어내는 과정을 경험합니다.",
    professors: ["이원제 교수님", "유동관 교수님", "신윤진 교수님", "남정 교수님"],
  },
  innovation: {
    label: "혁신디자인스튜디오",
    en: "Innovative Design studio",
    icon: "/images/works/inovation.svg",
    desc:
      "혁신디자인스튜디오 수업은 다양한 전공과 배경을 가진 학생들이 모여 협업하는 실험적 디자인 수업입니다. 이 수업에서는 문제 해결을 위한 창의적인 방법론과 디자인 프로세스를 학습하며, 실제 프로젝트를 통해 아이디어를 구체화합니다. 학생들은 시각디자인, 서비스 디자인, 인터페이스 기획 등 여러 분야를 융합하여 새로운 결과물을 만들어내는 과정을 경험합니다.",
    professors: ["김한솔 교수님", "손우성 교수님", "서승연 교수님", "안혜선 교수님"],
  },
};

export default function WorksPage() {
  const [active, setActive] = useState<StudioKey>("convergence");
  const [profFilter, setProfFilter] = useState<string>("전체");

  // userId -> 디자이너 이름 매핑
  const nameById = useMemo(() => {
    const m = new Map<number, string>();
    allDesigners.forEach((d) => m.set(d.id, d.name));
    return m;
  }, []);

  // 실데이터 기반 필터링
  const filtered = useMemo(() => {
    const targetCategory = active === "innovation" ? "혁신디자인스튜디오" : "융합디자인스튜디오";
    let byStudio = allWorks.filter((w) => w.category === targetCategory);
    if (profFilter !== "전체") byStudio = byStudio.filter((w) => w.professor === profFilter);
    return byStudio;
  }, [active, profFilter]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 pt-8 pb-16">
        {/* 상단 제목 및 설명 제거 요청에 따라 삭제됨 */}

        {/* 상단 스튜디오 탭 (두 개) */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(STUDIOS).map(([key, info]) => {
            const k = key as StudioKey;
            const isActive = active === k;
            return (
              <button
                key={k}
                type="button"
                onClick={() => {
                  setActive(k);
                  setProfFilter("전체");
                }}
                aria-pressed={isActive}
                className={[
                  "relative w-full text-center transition-all",
                  isActive
                    ? "bg-lime-300 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                    : "bg-gray-100 text-gray-400",
                ].join(" ")}
              >
                <div className="px-5 py-4 text-center">
                  <div>
                    <div className={(isActive ? "text-lg text-black" : "text-lg text-gray-400") + " text-center"}>
                      {info.label}
                    </div>
                    <div className={(isActive ? "text-sm text-black/80" : "text-sm text-gray-400") + " text-center"}>{info.en}</div>
                  </div>
                </div>
                {/* {isActive && <div className="absolute left-5 right-5 -bottom-2 h-[12px] bg-black" />} */}
              </button>
            );
          })}
        </div>

        {/* 스튜디오 설명 + 교수 필터 + 그리드 */}
        <section className="mt-2">
          <h2 className="text-3xl md:text-4xl font-normal">{STUDIOS[active].label}</h2>
          <div className="mt-1 text-sm text-gray-700">{STUDIOS[active].en}</div>
          <p className="pretendard-font mt-6 text-gray-700 leading-7 max-w-4xl break-keep" style={{ wordBreak: 'keep-all' }}>{STUDIOS[active].desc}</p>

          {/* 교수 필터 */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setProfFilter("전체")}
              className={[
                "px-3 py-1 text-sm",
                profFilter === "전체"
                  ? "bg-lime-300 text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-50",
              ].join(" ")}
            >
              전체
            </button>
            {STUDIOS[active].professors.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProfFilter(p)}
                className={[
                  "px-3 py-1 text-sm",
                  profFilter === p
                    ? "bg-lime-300 text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-50",
                ].join(" ")}
              >
                {p}
              </button>
            ))}
          </div>

          {/* 작품 그리드 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((w) => (
              <Link key={`${w.category}-${w.id}`} href={`/archives/years/2025/works/${w.id}`} className="group block">
                <div className="aspect-[4/3] w-full rounded-md border border-gray-200 bg-[repeating-linear-gradient(45deg,#e9e9e9_0px,#e9e9e9_12px,#f6f6f6_12px,#f6f6f6_24px)]" />
                <div className="mt-3 pretendard-font font-bold text-[20px] text-gray-900">{w.title}</div>
                <div className="pretendard-font font-bold text-[16px] text-[#8b8b8b]">{nameById.get(w.userId) || ""}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
