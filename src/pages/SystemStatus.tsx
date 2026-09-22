import { CheckCircle2, Circle } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";
import { cn } from "@/lib/cn";

const components = [
  { name: "Frontend", status: "Operational" },
  { name: "Prediction Engine", status: "Operational" },
  { name: "GIS Engine", status: "Operational" },
  { name: "Alert Store", status: "In-Memory" },
  { name: "Auth Service", status: "Operational" },
];

const statusColor: Record<string, string> = {
  Operational: "text-risk-low",
  "In-Memory": "text-risk-moderate",
  "Not Connected": "text-slate-500",
};

export default function SystemStatus() {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-display text-2xl font-bold text-white">SYSTEM STATUS</p>
        <p className="mt-1 text-sm text-slate-400">Technical monitoring for the FloodGuard AI stack.</p>
      </div>

      <GlassCard>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6 text-risk-low" />
          <div>
            <p className="text-xs text-slate-500">Overall Status</p>
            <p className="text-lg font-bold text-risk-low">OPERATIONAL</p>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {components.map((c) => (
          <GlassCard key={c.name} hoverable className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-200">{c.name}</span>
            <span className={cn("flex items-center gap-1.5 text-xs font-semibold uppercase", statusColor[c.status])}>
              <Circle className="h-2 w-2 fill-current" /> {c.status}
            </span>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Pipeline Details
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <div>
            <p className="text-xs text-slate-500">Model</p>
            <p className="mt-0.5 font-medium text-slate-200">Weighted Risk Engine v1</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Data Refresh</p>
            <p className="mt-0.5 font-medium text-slate-200">Every 10 minutes</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Prediction Pipeline</p>
            <p className="mt-0.5 font-medium text-risk-low">Ready</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Data Pipeline</p>
            <p className="mt-0.5 font-medium text-risk-low">Live</p>
          </div>
        </div>
        <p className="mt-4 border-t border-base-border pt-4 text-[11px] text-slate-500">
          River signal is a discharge-based proxy (Open-Meteo Flood API), not a direct gauge
          reading. Alert history is recomputed live rather than persisted across restarts —
          see the backend README for the upgrade path to a trained model and persistent storage.
        </p>
      </GlassCard>
    </div>
  );
}
