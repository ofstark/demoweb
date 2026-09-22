import type { FloodPrediction } from "@/types";

export const predictions: FloodPrediction[] = [
  { id: "zone-a", location: "Valley Sector A", region: "Central Basin", latitude: 30.34, longitude: 78.03, probability: 82, risk: "HIGH", rainfall: 87, riverLevel: 3.8, soilMoisture: 78, updatedAt: "2m ago" },
  { id: "zone-b", location: "River Station 04", region: "Eastern Confluence", latitude: 30.29, longitude: 78.09, probability: 91, risk: "CRITICAL", rainfall: 104, riverLevel: 4.6, soilMoisture: 85, updatedAt: "4m ago" },
  { id: "zone-c", location: "Northern Basin", region: "Upper Watershed", latitude: 30.40, longitude: 78.00, probability: 54, risk: "MODERATE", rainfall: 42, riverLevel: 2.1, soilMoisture: 58, updatedAt: "6m ago" },
  { id: "zone-d", location: "Pinehill Settlement", region: "Western Slope", latitude: 30.31, longitude: 77.96, probability: 21, risk: "LOW", rainfall: 12, riverLevel: 1.2, soilMoisture: 34, updatedAt: "9m ago" },
  { id: "zone-e", location: "Eastern Ridge", region: "Highland Corridor", latitude: 30.36, longitude: 78.14, probability: 47, risk: "MODERATE", rainfall: 38, riverLevel: 1.9, soilMoisture: 51, updatedAt: "11m ago" },
  { id: "zone-f", location: "Cedar Fork", region: "Central Basin", latitude: 30.35, longitude: 78.05, probability: 63, risk: "HIGH", rainfall: 66, riverLevel: 3.1, soilMoisture: 69, updatedAt: "13m ago" },
  { id: "zone-g", location: "Rivermouth", region: "Eastern Confluence", latitude: 30.27, longitude: 78.11, probability: 15, risk: "LOW", rainfall: 8, riverLevel: 1.0, soilMoisture: 28, updatedAt: "15m ago" },
  { id: "zone-h", location: "Ridgeview", region: "Highland Corridor", latitude: 30.37, longitude: 78.13, probability: 41, risk: "MODERATE", rainfall: 30, riverLevel: 1.6, soilMoisture: 45, updatedAt: "16m ago" },
  { id: "zone-i", location: "Lower Basin Outlet", region: "Southern Reach", latitude: 30.22, longitude: 78.16, probability: 71, risk: "HIGH", rainfall: 74, riverLevel: 3.4, soilMoisture: 72, updatedAt: "18m ago" },
  { id: "zone-j", location: "Highland Pass", region: "Upper Watershed", latitude: 30.43, longitude: 77.94, probability: 18, risk: "LOW", rainfall: 10, riverLevel: 0.9, soilMoisture: 25, updatedAt: "20m ago" },
  { id: "zone-k", location: "Millbrook Crossing", region: "Western Slope", latitude: 30.28, longitude: 77.90, probability: 39, risk: "MODERATE", rainfall: 27, riverLevel: 1.4, soilMoisture: 42, updatedAt: "22m ago" },
];
