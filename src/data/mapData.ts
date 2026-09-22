import type { MonitoringZone, GeographyData } from "@/types";

// Mock fallback used only when USE_MOCK_DATA is true in src/services/api.ts.
// Mirrors the backend's app/data/zones.py and app/data/geography.py so the
// map looks identical whether you're running against mock or live data.
export const MAP_CENTER: [number, number] = [30.32, 78.05];

export const monitoringZones: MonitoringZone[] = [
  { id: "zone-a", name: "Valley Sector A", lat: 30.34, lng: 78.03, risk: "HIGH", probability: 82, rainfall: 87, riverLevel: 3.8, soilMoisture: 78, radius: 1800 },
  { id: "zone-b", name: "River Station 04", lat: 30.29, lng: 78.09, risk: "CRITICAL", probability: 91, rainfall: 104, riverLevel: 4.6, soilMoisture: 85, radius: 1400 },
  { id: "zone-c", name: "Northern Basin", lat: 30.40, lng: 78.00, risk: "MODERATE", probability: 54, rainfall: 42, riverLevel: 2.1, soilMoisture: 58, radius: 2200 },
  { id: "zone-d", name: "Pinehill Settlement", lat: 30.31, lng: 77.96, risk: "LOW", probability: 21, rainfall: 12, riverLevel: 1.2, soilMoisture: 34, radius: 1600 },
  { id: "zone-e", name: "Eastern Ridge", lat: 30.36, lng: 78.14, risk: "MODERATE", probability: 47, rainfall: 38, riverLevel: 1.9, soilMoisture: 51, radius: 1900 },
  { id: "zone-f", name: "Cedar Fork", lat: 30.35, lng: 78.05, risk: "HIGH", probability: 63, rainfall: 66, riverLevel: 3.1, soilMoisture: 69, radius: 1500 },
  { id: "zone-g", name: "Rivermouth", lat: 30.27, lng: 78.11, risk: "LOW", probability: 15, rainfall: 8, riverLevel: 1.0, soilMoisture: 28, radius: 1400 },
  { id: "zone-h", name: "Ridgeview", lat: 30.37, lng: 78.13, risk: "MODERATE", probability: 41, rainfall: 30, riverLevel: 1.6, soilMoisture: 45, radius: 1700 },
  { id: "zone-i", name: "Lower Basin Outlet", lat: 30.22, lng: 78.16, risk: "HIGH", probability: 71, rainfall: 74, riverLevel: 3.4, soilMoisture: 72, radius: 2000 },
  { id: "zone-j", name: "Highland Pass", lat: 30.43, lng: 77.94, risk: "LOW", probability: 18, rainfall: 10, riverLevel: 0.9, soilMoisture: 25, radius: 1600 },
  { id: "zone-k", name: "Millbrook Crossing", lat: 30.28, lng: 77.90, risk: "MODERATE", probability: 39, rainfall: 27, riverLevel: 1.4, soilMoisture: 42, radius: 1500 },
];

export const riverPaths: [number, number][][] = [
  [
    [30.44, 77.94],
    [30.40, 78.00],
    [30.38, 78.01],
    [30.34, 78.03],
    [30.31, 78.06],
    [30.29, 78.09],
    [30.27, 78.11],
    [30.24, 78.14],
    [30.22, 78.16],
  ],
  [
    [30.37, 78.13],
    [30.33, 78.11],
    [30.29, 78.09],
  ],
];

export const roadPaths: [number, number][][] = [
  [
    [30.44, 77.95],
    [30.36, 78.00],
    [30.29, 78.10],
    [30.22, 78.17],
  ],
  [
    [30.31, 77.96],
    [30.34, 78.03],
    [30.36, 78.14],
  ],
  [
    [30.28, 77.90],
    [30.31, 77.96],
    [30.35, 78.05],
  ],
  [
    [30.43, 77.94],
    [30.40, 78.00],
    [30.37, 78.13],
  ],
];

export const settlements: { name: string; lat: number; lng: number }[] = [
  { name: "Pinehill", lat: 30.31, lng: 77.96 },
  { name: "Cedar Fork", lat: 30.35, lng: 78.05 },
  { name: "Rivermouth", lat: 30.27, lng: 78.11 },
  { name: "Ridgeview", lat: 30.37, lng: 78.13 },
  { name: "Millbrook", lat: 30.28, lng: 77.90 },
  { name: "Highland Pass", lat: 30.43, lng: 77.94 },
  { name: "Southgate", lat: 30.22, lng: 78.16 },
];

export const geographyMock: GeographyData = {
  mapCenter: MAP_CENTER,
  riverPaths,
  roadPaths,
  settlements,
};
