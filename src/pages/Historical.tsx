import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import GlassCard from "@/components/common/GlassCard";
import Badge from "@/components/common/Badge";
import { historicalEvents, rainfallComparison } from "@/data/historical";
import { riskColorMap } from "@/lib/risk";

export default function Historical() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-display text-2xl font-bold text-white">HISTORICAL EVENTS</p>
        <p className="mt-1 text-sm text-slate-400">
          Review of past flood events used to contextualize current risk assessments.
        </p>
      </div>

      <GlassCard>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Annual Rainfall Comparison
        </p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rainfallComparison} margin={{ left: -20 }}>
              <CartesianGrid stroke="rgba(148,178,219,0.06)" vertical={false} />
              <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#0d1424",
                  border: "1px solid rgba(148,178,219,0.15)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="rainfall" fill="#22d3ee" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-[11px] text-slate-600">
          Placeholder rainfall totals — pending integration with regional flood records.
        </p>
      </GlassCard>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Event Timeline</p>
        <div className="relative border-l border-base-border pl-6">
          {historicalEvents.map((e) => (
            <div key={e.id} className="relative mb-6 last:mb-0">
              <span
                className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-base-950"
                style={{ backgroundColor: riskColorMap[e.rainfall] }}
              />
              <GlassCard hoverable>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-slate-500">{e.date}</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-100">{e.title}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{e.location}</p>
                  </div>
                  <Badge risk={e.rainfall}>{e.rainfall}</Badge>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
                  <div>
                    <p className="text-slate-500">Rainfall</p>
                    <p className="font-medium text-slate-300">{e.rainfall}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">River</p>
                    <p className="font-medium text-slate-300">{e.riverStatus}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Impact</p>
                    <p className="font-medium italic text-slate-500">{e.impact}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
