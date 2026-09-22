import type { AlertItem } from "@/types";

export const alerts: AlertItem[] = [
  {
    id: "alert-1",
    title: "HIGH RISK DETECTED",
    location: "Valley Sector A",
    severity: "HIGH",
    timestamp: "12 minutes ago",
    status: "ACTIVE",
    description:
      "Elevated flood probability driven by sustained rainfall and rising river level.",
  },
  {
    id: "alert-2",
    title: "RIVER LEVEL RISING",
    location: "River Station 04",
    severity: "CRITICAL",
    timestamp: "28 minutes ago",
    status: "ACTIVE",
    description: "River level rising at 0.42 m/hour, approaching critical threshold.",
  },
  {
    id: "alert-3",
    title: "HEAVY RAINFALL",
    location: "Northern Basin",
    severity: "INFO",
    timestamp: "41 minutes ago",
    status: "MONITORING",
    description: "Rainfall accumulation trending upward over the last 6 hours.",
  },
  {
    id: "alert-4",
    title: "SOIL SATURATION HIGH",
    location: "Cedar Fork",
    severity: "MODERATE",
    timestamp: "1 hour ago",
    status: "MONITORING",
    description: "Soil moisture nearing saturation, reducing runoff absorption capacity.",
  },
  {
    id: "alert-5",
    title: "RISK LEVEL NORMALIZED",
    location: "Pinehill Settlement",
    severity: "LOW",
    timestamp: "2 hours ago",
    status: "RESOLVED",
    description: "Conditions returned to baseline after earlier moderate advisory.",
  },
  {
    id: "alert-6",
    title: "MONITORING STATION OFFLINE",
    location: "Eastern Ridge",
    severity: "INFO",
    timestamp: "3 hours ago",
    status: "RESOLVED",
    description: "Monitoring station reconnected after a brief outage.",
  },
];
