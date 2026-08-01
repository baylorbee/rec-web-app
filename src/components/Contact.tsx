"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import { Container, SectionLabel } from "./ui";
import { FadeIn } from "./FadeIn";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  sqft: string;
  propertyType: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  sqft: "",
  propertyType: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email";
    if (!values.phone.trim()) next.phone = "Phone is required";
    if (!values.city.trim()) next.city = "Building city is required";
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    setServerError("");

    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setServerError(
          data.error ||
            "Something went wrong sending your request. Please try again.",
        );
        setStatus("error");
        return;
      }

      setStatus("ok");
      setForm(initial);
    } catch {
      setServerError(
        "Network error — please check your connection and try again.",
      );
      setStatus("error");
    }
  }

  const field =
    "w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";
  const label =
    "mb-1.5 block text-xs font-semibold tracking-wide text-slate-600";

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <FadeIn>
            <div>
              <SectionLabel>{contact.eyebrow}</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {contact.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {contact.intro}
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="name" className={label}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className={field}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>
                <div className="min-w-0">
                  <label htmlFor="email" className={label}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={field}
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
                <div className="min-w-0">
                  <label htmlFor="phone" className={label}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={field}
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div className="min-w-0">
                  <label htmlFor="city" className={label}>
                    Building city
                  </label>
                  <input
                    id="city"
                    name="city"
                    className={field}
                    value={form.city}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, city: e.target.value }))
                    }
                  />
                  {errors.city && (
                    <p className="mt-1 text-xs text-red-600">{errors.city}</p>
                  )}
                </div>
                <div className="min-w-0">
                  <label htmlFor="sqft" className={label}>
                    Approx. sq ft (optional)
                  </label>
                  <select
                    id="sqft"
                    name="sqft"
                    className={field}
                    value={form.sqft}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, sqft: e.target.value }))
                    }
                  >
                    <option value="">Select…</option>
                    {contact.sqftOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.sqft && (
                    <p className="mt-1 text-xs text-red-600">{errors.sqft}</p>
                  )}
                </div>
                <div className="min-w-0">
                  <label htmlFor="propertyType" className={label}>
                    Property type (optional)
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    className={field}
                    value={form.propertyType}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, propertyType: e.target.value }))
                    }
                  >
                    <option value="">Select…</option>
                    {contact.propertyTypes.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.propertyType && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.propertyType}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={field}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting"
                  ? "Sending…"
                  : "Submit assessment request"}
              </button>

              {status === "ok" && (
                <p className="mt-3 text-sm text-accent-dark" role="status">
                  Thanks — your request was sent. We&apos;ll follow up soon.
                </p>
              )}
              {status === "error" && serverError && (
                <p className="mt-3 text-sm text-red-600" role="alert">
                  {serverError}
                </p>
              )}
              {status === "error" &&
                !serverError &&
                Object.keys(errors).length > 0 && (
                  <p className="mt-3 text-sm text-red-600" role="alert">
                    Please fix the highlighted fields.
                  </p>
                )}
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
