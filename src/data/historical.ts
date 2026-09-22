import type { HistoricalEvent } from "@/types";

export const historicalEvents: HistoricalEvent[] = [
  {
    id: "hist-1",
    year: "2025",
    date: "Aug 14, 2025",
    title: "Reference Event — Central Basin",
    location: "Valley Sector A",
    rainfall: "CRITICAL",
    riverStatus: "CRITICAL",
    impact: "Unverified placeholder — pending integration with regional flood records",
    isDemo: true,
  },
  {
    id: "hist-2",
    year: "2024",
    date: "Jul 02, 2024",
    title: "Reference Event — Eastern Confluence",
    location: "River Station 04",
    rainfall: "HIGH",
    riverStatus: "HIGH",
    impact: "Unverified placeholder — pending integration with regional flood records",
    isDemo: true,
  },
  {
    id: "hist-3",
    year: "2023",
    date: "Sep 21, 2023",
    title: "Reference Event — Upper Watershed",
    location: "Northern Basin",
    rainfall: "MODERATE",
    riverStatus: "MODERATE",
    impact: "Unverified placeholder — pending integration with regional flood records",
    isDemo: true,
  },
  {
    id: "hist-4",
    year: "2022",
    date: "Jun 30, 2022",
    title: "Reference Event — Western Slope",
    location: "Pinehill Settlement",
    rainfall: "HIGH",
    riverStatus: "MODERATE",
    impact: "Unverified placeholder — pending integration with regional flood records",
    isDemo: true,
  },
];

export const rainfallComparison = [
  { year: "2022", rainfall: 210 },
  { year: "2023", rainfall: 180 },
  { year: "2024", rainfall: 260 },
  { year: "2025", rainfall: 310 },
];
