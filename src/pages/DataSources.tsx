import { CloudRain, Thermometer, Waves, Droplets, Satellite, Mountain } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";
import type { DataSourceStatus } from "@/types";
import { cn } from "@/lib/cn";

const sources: (DataSourceStatus & { icon: typeof CloudRain })[] = [
  { id: "rain", name: "Rainfall", status: "Connected", description: "Precipitation from Open-Meteo, refreshed every 10 minutes.", icon: CloudRain },
  { id: "weather", name: "Weather", status: "Connected", description: "Temperature and general conditions via Open-Meteo.", icon: Thermometer },
  { id: "river", name: "River Signal", status: "Connected", description: "River discharge proxy via the Open-Meteo Flood API — not a direct gauge reading.", icon: Waves },
  { id: "soil", name: "Soil Moisture", status: "Estimated", description: "Near-surface volumetric water content from Open-Meteo, normalized to a saturation %.", icon: Droplets },
  { id: "satellite", name: "Satellite", status: "Available", description: "Optical & radar imagery for terrain change — not yet wired into scoring.", icon: Satellite },
  { id: "elevation", name: "Elevation", status: "Connected", description: "Terrain steepness proxy via Open-Elevation, sampled around each zone.", icon: Mountain },
];

const statusStyle: Record<string, string> = {
  Connected: "border-risk-low/30 bg-risk-low/10 text-risk-low",
  Estimated: "border-risk-moderate/30 bg-risk-moderate/10 text-risk-moderate",
  Available: "border-accent-blue/30 bg-accent-blue/10 text-accent-electric",
  "Not Connected": "border-slate-600/40 bg-slate-600/10 text-slate-400",
};

export default function DataSources() {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-display text-2xl font-bold text-white">DATA SOURCES</p>
        <p className="mt-1 text-sm text-slate-400">
          Live environmental data feeds powering the prediction engine.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((s) => (
          <GlassCard key={s.id} hoverable>
            <div className="flex items-start justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-base-border bg-white/5">
                <s.icon className="h-4.5 w-4.5 text-accent-cyan" />
              </div>
              <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase", statusStyle[s.status])}>
                ● {s.status}
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-100">{s.name}</p>
            <p className="mt-1 text-xs text-slate-500">{s.description}</p>
          </GlassCard>
        ))}
      </div>

      <p className="text-center text-[11px] text-slate-600">
        All sources shown are free, keyless public APIs. See the backend README for how to
        swap in a regional gauge network for river level if one is available for your area.
      </p>
    </div>
  );
}
