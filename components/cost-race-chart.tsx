"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInView } from "motion/react";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

/* ── cost rates per m² (PLN/year) ── */
const FUEL_RATES = [
  { name: "vs Ogrzewanie elektryczne", costPerM2: 80, color: "#ef4444" },
  { name: "vs Olej opałowy", costPerM2: 55, color: "#f97316" },
  { name: "vs Gaz ziemny", costPerM2: 45, color: "#eab308" },
  { name: "vs Węgiel", costPerM2: 40, color: "#a3a3a3" },
  { name: "vs Klimatyzator (split)", costPerM2: 35, color: "#60a5fa" },
];
const HEAT_PUMP_COST_PER_M2 = 18;
const years = Array.from({ length: 11 }, (_, i) => i);

interface CostRaceChartProps {
  area?: number;
  insulationMult?: number;
}

export default function CostRaceChart({ area = 120, insulationMult = 1 }: CostRaceChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);
  const hasAnimated = useRef(false);
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, margin: "-50px" });

  // Computed once on mount — component remounts for new calculations
  const dataRef = useRef({
    heatPumpAnnual: Math.round(area * HEAT_PUMP_COST_PER_M2 * insulationMult),
    sources: FUEL_RATES.map((r) => ({
      name: r.name,
      annualCost: Math.round(area * r.costPerM2 * insulationMult),
      color: r.color,
    })),
  });

  const startAnimation = useCallback(() => {
    const chart = chartRef.current;
    if (!chart || hasAnimated.current) return;
    hasAnimated.current = true;

    const { sources, heatPumpAnnual } = dataRef.current;
    const buildSavings = (annualCost: number) =>
      years.map((y) => y * (annualCost - heatPumpAnnual));

    const totalDuration = 3000;
    const stepDuration = totalDuration / years.length;

    for (let step = 1; step <= years.length; step++) {
      setTimeout(() => {
        const option: echarts.EChartsCoreOption = {
          xAxis: { data: years.slice(0, step) },
          series: sources.map((s) => ({
            name: s.name,
            data: buildSavings(s.annualCost).slice(0, step),
          })),
        };
        chart.setOption(option);
      }, step * stepDuration);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const { sources } = dataRef.current;

    const chart = echarts.init(containerRef.current, undefined, {
      renderer: "canvas",
    });
    chartRef.current = chart;

    const initialOption: echarts.EChartsCoreOption = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.85)",
        borderColor: "rgba(255,255,255,0.1)",
        textStyle: { color: "#fff", fontSize: 12 },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: (params: any) => {
          const items = params as {
            seriesName: string;
            value: number;
            color: string;
            dataIndex: number;
          }[];
          const yr = items[0]?.dataIndex ?? 0;
          const year = yr === 0 ? "Start" : yr === 1 ? "Po 1 roku" : `Po ${yr} latach`;
          let html = `<div style="font-weight:700;margin-bottom:6px">${year}</div>`;
          const sorted = [...items].sort((a, b) => b.value - a.value);
          for (const item of sorted) {
            html += `<div style="display:flex;align-items:center;gap:6px;margin:3px 0">
              <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${item.color}"></span>
              <span style="flex:1">${item.seriesName}</span>
              <span style="font-weight:700;color:#22c55e">+${Number(item.value).toLocaleString("pl-PL")} zł</span>
            </div>`;
          }
          return html;
        },
      },
      legend: {
        data: sources.map((s) => s.name),
        bottom: 0,
        textStyle: { color: "rgba(255,255,255,0.5)", fontSize: 11 },
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 14,
      },
      grid: { left: 65, right: 20, top: 20, bottom: 60 },
      xAxis: {
        type: "category",
        data: [0],
        axisLabel: {
          color: "rgba(255,255,255,0.4)",
          fontSize: 11,
          formatter: (v: string) => (v === "0" ? "Start" : `${v} lat`),
        },
        axisLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,0.4)",
          fontSize: 11,
          formatter: (v: number) =>
            v >= 1000 ? `${(v / 1000).toFixed(0)} tys. zł` : `${v} zł`,
        },
        splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } },
        axisLine: { show: false },
      },
      series: sources.map((s) => ({
        name: s.name,
        type: "line" as const,
        data: [0],
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: { width: 3, color: s.color },
        itemStyle: { color: s.color },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: s.color.replace(")", ",0.15)").replace("rgb", "rgba") },
            { offset: 1, color: "transparent" },
          ]),
        },
        emphasis: {
          lineStyle: { width: 5 },
          itemStyle: { borderWidth: 2, borderColor: "#fff" },
        },
      })),
      animationDuration: 300,
      animationEasing: "linear",
    };

    chart.setOption(initialOption);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
      chartRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) startAnimation();
  }, [inView, startAnimation]);

  return (
    <div ref={inViewRef}>
      <div ref={containerRef} className="w-full h-[350px]" />
    </div>
  );
}
