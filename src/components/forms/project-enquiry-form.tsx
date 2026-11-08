"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  enquirySchema,
  enquiryErrors,
  enquiryServices,
  type EnquiryErrors,
} from "@/lib/enquiry-schema";
import { PrimaryButton } from "@/components/ui/primary-button";
export function ProjectEnquiryForm({
  initiallyAvailable,
}: {
  initiallyAvailable: boolean;
}) {
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<
    "loading" | "ready" | "unavailable" | "sending" | "success"
  >(initiallyAvailable ? "loading" : "unavailable");
  const [message, setMessage] = useState("");
  const token = useRef("");
  const requestId = useRef("");
  const feedback = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let mounted = true;
    requestId.current = crypto.randomUUID();
    fetch("/api/enquiry")
      .then((r) => r.json())
      .then((data) => {
        if (mounted) {
          token.current = data.token ?? "";
          setStatus(data.available ? "ready" : "unavailable");
        }
      })
      .catch(() => {
        if (mounted) setStatus("unavailable");
      });
    return () => {
      mounted = false;
    };
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "success") return;
    const form = event.currentTarget;
    const input = {
      ...Object.fromEntries(new FormData(form)),
      token: token.current || "unavailable",
      requestId: requestId.current,
    };
    const parsed = enquirySchema.safeParse(input);
    if (!parsed.success) {
      const e = enquiryErrors(parsed.error);
      setErrors(e);
      setMessage("Please check the highlighted fields.");
      const first = Object.keys(e)[0];
      const field = form.elements.namedItem(first);
      if (field instanceof HTMLElement) {
        const details = field.closest("details");
        if (details) details.open = true;
        field.focus();
      }
      return;
    }
    setErrors({});
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        setStatus("success");
        setMessage(result.message);
        form.reset();
      } else {
        setStatus("ready");
        setMessage(
          result.message ||
            "We couldn’t send your enquiry. Please try again or email us.",
        );
        setErrors(result.errors || {});
        if (result.refreshToken) {
          const fresh = await fetch("/api/enquiry").then((r) => r.json());
          token.current = fresh.token ?? "";
        }
      }
    } catch {
      setStatus("ready");
      setMessage(
        "We couldn’t confirm sending your enquiry. Your details are still here. Please try again or email us directly.",
      );
    }
    requestAnimationFrame(() => feedback.current?.focus());
  }
  function field(
    name:
      | "name"
      | "email"
      | "description"
      | "company"
      | "phone"
      | "budget"
      | "timeframe"
      | "website",
    label: string,
    required = false,
    type = "text",
  ) {
    return (
      <div className="form-field" key={name}>
        <label htmlFor={`enquiry-${name}`}>
          {label}
          {required ? " *" : <span> (optional)</span>}
        </label>
        {name === "description" ? (
          <textarea
            id={`enquiry-${name}`}
            name={name}
            required
            maxLength={6000}
            minLength={20}
            aria-invalid={!!errors[name]}
            aria-describedby={errors[name] ? `${name}-error` : undefined}
          />
        ) : (
          <input
            id={`enquiry-${name}`}
            name={name}
            type={type}
            required={required}
            maxLength={
              name === "email"
                ? 254
                : name === "name"
                  ? 120
                  : name === "phone"
                    ? 60
                    : name === "budget"
                      ? 120
                      : name === "website"
                        ? 1000
                        : 160
            }
            autoComplete={
              name === "name"
                ? "name"
                : name === "email"
                  ? "email"
                  : name === "company"
                    ? "organization"
                    : name === "phone"
                      ? "tel"
                      : name === "website"
                        ? "url"
                        : "off"
            }
            aria-invalid={!!errors[name]}
            aria-describedby={errors[name] ? `${name}-error` : undefined}
          />
        )}{" "}
        {errors[name] && (
          <p className="field-error" id={`${name}-error`}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      noValidate
      aria-label="Project enquiry"
    >
      <p>Tell us what you have in mind. Fields marked * are required.</p>
      {status === "unavailable" && (
        <p className="form-feedback">
          Online enquiries are temporarily unavailable. Please{" "}
          <a className="text-link" href="mailto:team@pocketcreatives.co.uk">
            email team@pocketcreatives.co.uk
          </a>{" "}
          or call 020 3633 8494.
        </p>
      )}
      <div className="form-fields">
        {field("name", "Name", true)}
        {field("email", "Email", true, "email")}
        <div className="form-field">
          <label htmlFor="enquiry-service">Service required *</label>
          <select
            id="enquiry-service"
            name="service"
            required
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {enquiryServices.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <p className="field-error" id="service-error">
              {errors.service}
            </p>
          )}
        </div>
        {field("description", "Your project", true)}
      </div>
      <details className="form-optional">
        <summary>Add a few more details (optional)</summary>
        <div className="form-fields">
          {field("company", "Company or brand")}
          {field("phone", "Phone number", false, "tel")}
          {field("budget", "Budget you have in mind")}
          {field("timeframe", "Desired timeframe")}
          {field("website", "Website", false, "url")}
        </div>
      </details>
      <div className="form-trap" aria-hidden="true">
        <label htmlFor="website-confirm">Leave this field empty</label>
        <input
          id="website-confirm"
          name="websiteConfirm"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <p className="form-privacy">
        We’ll use these details to respond to your enquiry. This does not
        subscribe you to marketing. Read our{" "}
        <Link href="/privacy-policy">privacy policy</Link>.
      </p>
      <PrimaryButton
        type="submit"
        disabled={
          status === "loading" || status === "sending" || status === "success"
        }
      >
        {status === "sending"
          ? "Sending…"
          : status === "success"
            ? "Enquiry Sent"
            : "Send Enquiry"}
      </PrimaryButton>
      <div
        className="form-feedback"
        role="status"
        aria-live="polite"
        tabIndex={-1}
        ref={feedback}
      >
        {message}
      </div>
      <noscript>
        <p>
          Please email{" "}
          <a href="mailto:team@pocketcreatives.co.uk">
            team@pocketcreatives.co.uk
          </a>{" "}
          or call 020 3633 8494 to send an enquiry.
        </p>
      </noscript>
    </form>
  );
}
