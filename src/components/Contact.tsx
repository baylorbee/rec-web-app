"use client";

import { useState, type FormEvent } from "react";
import { contact, site } from "@/lib/content";
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
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email";
    if (!values.phone.trim()) next.phone = "Phone is required";
    if (!values.city.trim()) next.city = "Building city is required";
    if (!values.sqft) next.sqft = "Select approximate square footage";
    if (!values.propertyType) next.propertyType = "Select a property type";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }

    // No backend yet — log + mailto fallback for demo
    console.info("[REC contact form]", form);
    const subject = encodeURIComponent(
      `Assessment request — ${form.name} (${form.city})`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Building city: ${form.city}`,
        `Approx. sq ft: ${form.sqft}`,
        `Property type: ${form.propertyType}`,
        "",
        form.message || "(no message)",
      ].join("\n"),
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setStatus("ok");
    setForm(initial);
  }

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-navy shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";
  const label = "mb-1.5 block text-xs font-semibold tracking-wide text-slate-600";

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
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-navy">Email</dt>
                  <dd className="text-slate-600">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="hover:text-accent-dark"
                    >
                      {site.contact.email}
                    </a>
                    <span className="ml-2 text-xs text-slate-400">
                      (placeholder)
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-navy">Phone</dt>
                  <dd className="text-slate-600">
                    {site.contact.phone}
                    <span className="ml-2 text-xs text-slate-400">
                      (placeholder)
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-navy">Service area</dt>
                  <dd className="text-slate-600">{site.serviceArea}</dd>
                </div>
              </dl>
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
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
                <div>
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
                <div>
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
                <div>
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
                <div>
                  <label htmlFor="sqft" className={label}>
                    Approximate square footage
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
                <div>
                  <label htmlFor="propertyType" className={label}>
                    Property type
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
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-light sm:w-auto"
              >
                Submit assessment request
              </button>

              {status === "ok" && (
                <p className="mt-3 text-sm text-accent-dark" role="status">
                  Thanks — your email client should open with the details. We’ll
                  follow up soon.
                </p>
              )}
              {status === "error" && Object.keys(errors).length > 0 && (
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
