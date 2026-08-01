"use client";

import { useMemo, useState } from "react";
import { roiCalculator } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function estimateRoi({
  monthlyBill,
  units,
  hvacPct,
}: {
  monthlyBill: number;
  units: number;
  hvacPct: number;
}) {
  const annualBill = monthlyBill * 12;
  const hvacSpend = annualBill * (hvacPct / 100);
  const annualSavings = hvacSpend * roiCalculator.savingsRateOfHvac;
  const monthlySavings = annualSavings / 12;
  const billReductionPct =
    annualBill > 0 ? (annualSavings / annualBill) * 100 : 0;
  const projectCost = units * roiCalculator.netProjectCostPerUnit;
  const paybackMonths =
    monthlySavings > 0 ? projectCost / monthlySavings : Infinity;

  return {
    annualSavings,
    monthlySavings,
    billReductionPct,
    projectCost,
    paybackMonths,
  };
}

export function RoiCalculator() {
  const { defaults, ranges, hvacPctOptions, labels } = roiCalculator;
  const [monthlyBill, setMonthlyBill] = useState<number>(defaults.monthlyBill);
  const [units, setUnits] = useState<number>(defaults.units);
  const [hvacPct, setHvacPct] = useState<number>(defaults.hvacPct);

  const results = useMemo(
    () => estimateRoi({ monthlyBill, units, hvacPct }),
    [monthlyBill, units, hvacPct],
  );

  const paybackLabel =
    !Number.isFinite(results.paybackMonths)
      ? "—"
      : results.paybackMonths < 12
        ? `${Math.round(results.paybackMonths)} months`
        : `${(results.paybackMonths / 12).toFixed(1)} yrs`;

  return (
    <section id="roi-calculator" className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{roiCalculator.eyebrow}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {roiCalculator.headline}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delayMs={80}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
            <div className="grid lg:grid-cols-2">
              {/* Inputs */}
              <div className="space-y-7 p-5 sm:space-y-8 sm:p-8 lg:p-10">
                <div>
                  <label
                    htmlFor="roi-bill"
                    className="mb-2 block text-sm font-semibold text-navy"
                  >
                    {labels.monthlyBill}
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-sm font-medium text-slate-400">
                      $
                    </span>
                    <input
                      id="roi-bill"
                      type="number"
                      min={ranges.monthlyBill.min}
                      max={ranges.monthlyBill.max}
                      step={ranges.monthlyBill.step}
                      value={monthlyBill}
                      onChange={(e) =>
                        setMonthlyBill(
                          Math.min(
                            ranges.monthlyBill.max,
                            Math.max(
                              ranges.monthlyBill.min,
                              Number(e.target.value) || 0,
                            ),
                          ),
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-3 pl-8 text-sm font-medium text-navy shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <input
                    type="range"
                    aria-label={labels.monthlyBill}
                    min={ranges.monthlyBill.min}
                    max={ranges.monthlyBill.max}
                    step={ranges.monthlyBill.step}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="roi-slider mt-4 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="roi-units"
                    className="mb-2 block text-sm font-semibold text-navy"
                  >
                    {labels.units}
                  </label>
                  <div className="relative">
                    <input
                      id="roi-units"
                      type="number"
                      min={ranges.units.min}
                      max={ranges.units.max}
                      step={ranges.units.step}
                      value={units}
                      onChange={(e) =>
                        setUnits(
                          Math.min(
                            ranges.units.max,
                            Math.max(
                              ranges.units.min,
                              Number(e.target.value) || 1,
                            ),
                          ),
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-16 pl-3.5 text-sm font-medium text-navy shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    <span className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-sm text-slate-400">
                      units
                    </span>
                  </div>
                  <input
                    type="range"
                    aria-label={labels.units}
                    min={ranges.units.min}
                    max={ranges.units.max}
                    step={ranges.units.step}
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="roi-slider mt-4 w-full"
                  />
                </div>

                <div>
                  <p
                    id="roi-hvac-label"
                    className="mb-3 text-sm font-semibold text-navy"
                  >
                    {labels.hvacPct}
                  </p>
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-labelledby="roi-hvac-label"
                  >
                    {hvacPctOptions.map((pct) => {
                      const active = hvacPct === pct;
                      return (
                        <button
                          key={pct}
                          type="button"
                          onClick={() => setHvacPct(pct)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            active
                              ? "bg-accent text-white shadow-sm"
                              : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                          }`}
                          aria-pressed={active}
                        >
                          {pct}%
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-between border-t border-accent/15 bg-accent-soft/90 p-5 sm:p-8 lg:border-t-0 lg:border-l lg:border-accent/15 lg:p-10">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.16em] text-accent-dark uppercase">
                    {labels.annualSavings}
                  </p>
                  <p className="mt-2 break-words font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
                    {formatUsd(results.annualSavings)}
                  </p>

                  <dl className="mt-6 space-y-3 border-t border-accent/20 pt-5 text-sm sm:mt-8 sm:pt-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="min-w-0 text-slate-600">{labels.monthlySavings}</dt>
                      <dd className="shrink-0 font-semibold tabular-nums text-navy">
                        {formatUsd(results.monthlySavings)}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="min-w-0 text-slate-600">{labels.billReduction}</dt>
                      <dd className="shrink-0 font-semibold tabular-nums text-navy">
                        {results.billReductionPct.toFixed(0)}%
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="min-w-0 text-slate-600">{labels.payback}</dt>
                      <dd className="shrink-0 font-semibold tabular-nums text-navy">
                        {paybackLabel}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8">
                  <p className="text-xs leading-relaxed text-accent-dark">
                    {roiCalculator.disclaimer}
                  </p>
                  <a
                    href={roiCalculator.cta.href}
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-light"
                  >
                    {roiCalculator.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
