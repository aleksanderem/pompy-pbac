"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([RadarChart, TooltipComponent, LegendComponent, CanvasRenderer]);

const co2Data = [
  { name: "Węgiel", value: 8.2 },
  { name: "Olej opałowy", value: 5.8 },
  { name: "Gaz ziemny", value: 4.5 },
  { name: "Ogrzewanie elektr.", value: 3.9 },
  { name: "Klimatyzator", value: 2.8 },
  { name: "Pompa ciepła", value: 1.4 },
];

export default function Co2RadarChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = echarts.init(containerRef.current, undefined, { renderer: "canvas" });
    chartRef.current = chart;

    const option: echarts.EChartsCoreOption = {
      backgroundColor: "transparent",
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.85)",
        borderColor: "rgba(255,255,255,0.1)",
        textStyle: { color: "#fff", fontSize: 12 },
      },
      legend: {
        bottom: 0,
        textStyle: { color: "rgba(255,255,255,0.5)", fontSize: 11 },
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 20,
      },
      radar: {
        indicator: co2Data.map((d) => ({
          name: d.name,
          max: 10,
        })),
        shape: "polygon",
        splitNumber: 4,
        center: ["50%", "48%"],
        radius: "60%",
        axisName: {
          color: "rgba(255,255,255,0.6)",
          fontSize: 11,
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: [
              "rgba(255,255,255,0.02)",
              "rgba(255,255,255,0.04)",
              "rgba(255,255,255,0.02)",
              "rgba(255,255,255,0.04)",
            ],
          },
        },
        splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } },
        axisLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
      },
      series: [
        {
          type: "radar",
          data: [
            {
              value: co2Data.map((d) => d.value),
              name: "Emisja tradycyjna",
              lineStyle: { color: "#ef4444", width: 2 },
              itemStyle: { color: "#ef4444", borderWidth: 0 },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(239, 68, 68, 0.25)" },
                  { offset: 1, color: "rgba(239, 68, 68, 0.05)" },
                ]),
              },
              symbolSize: 6,
            },
            {
              value: co2Data.map(() => 1.4),
              name: "Pompa ciepła",
              lineStyle: { color: "#22c55e", width: 2 },
              itemStyle: { color: "#22c55e", borderWidth: 0 },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(34, 197, 94, 0.3)" },
                  { offset: 1, color: "rgba(34, 197, 94, 0.08)" },
                ]),
              },
              symbolSize: 6,
            },
          ],
          animationDuration: 1500,
          animationEasing: "cubicOut",
        },
      ],
    };

    chart.setOption(option);

    let resizeTimer = 0;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => chart.resize(), 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      chart.dispose();
      chartRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (inView && chartRef.current) {
      chartRef.current.resize();
    }
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <div
        ref={containerRef}
        className="w-full h-[350px]"
        style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease-out" }}
      />
    </div>
  );
}
