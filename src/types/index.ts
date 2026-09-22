export type RiskLevel = "LOW" | "MODERATE" | "HIGH" | "CRITICAL";

export type { GeographyData, Settlement } from "./geography";

export interface FloodPrediction {
  id: string;
  location: string;
  region: string;
  latitude: number;
  longitude: number;
  probability: number; // 0-100
  risk: RiskLevel;
  rainfall: number; // mm, last 6h
  riverLevel: number; // meters
  soilMoisture: number; // %
  updatedAt: string; // relative label
}

export interface AlertItem {
  id: string;
  title: string;
  location: string;
  severity: RiskLevel | "INFO";
  timestamp: string;
  status: "ACTIVE" | "RESOLVED" | "MONITORING";
  description?: string;
}

export interface TimeseriesPoint {
  time: string;
  value: number;
}

export interface HistoricalEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  location: string;
  rainfall: RiskLevel;
  riverStatus: RiskLevel;
  impact: string;
  isDemo: true;
}

export interface MonitoringZone {
  id: string;
  name: string;
  lat: number;
  lng: number;
  risk: RiskLevel;
  probability: number;
  rainfall: number;
  riverLevel: number;
  soilMoisture: number;
  radius: number;
}

export interface DataSourceStatus {
  id: string;
  name: string;
  status: "Connected" | "Estimated" | "Available" | "Not Connected";
  description: string;
}

export interface SystemComponentStatus {
  id: string;
  name: string;
  status: "Operational" | "In-Memory" | "Not Connected";
}
