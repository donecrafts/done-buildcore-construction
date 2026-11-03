"use client";

import { FormEvent, useId, useState, type ReactNode } from "react";
import { projectTypes } from "@/data/site";
import { fieldClass, orangeButton } from "@/lib/styles";

type FieldName = "name" | "email" | "projectType" | "phone" | "message";
type Errors = Partial<Record<FieldName, string>>;

const initial = {
  name: "",
  email: "",
  projectType: "",
  phone: "",
  message: "",
};

export function EnquiryForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const uid = useId();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const label = tone === "dark" ? "text-white" : "text-ink";
  const errorClass = tone === "dark" ? "text-orange" : "text-red-700";

  function update(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function validate(next = values) {
    const nextErrors: Errors = {};
    if (next.name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!next.projectType) nextErrors.projectType = "Select a project type.";
    const digits = next.phone.replace(/\D/g, "");
    if (digits.length < 7) nextErrors.phone = "Enter a phone number.";
    if (next.message.trim().length < 20) {
      nextErrors.message = "Tell us a little more, at least 20 characters.";
    }
    return nextErrors;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      setDone(false);
      return;
    }
    setValues(initial);
    setDone(true);
  }

  if (done) {
    return (
      <div role="status" className="bg-white p-6 text-ink md:p-8">
        <h3 className="font-display text-3xl font-bold uppercase text-navy">Checked on this page</h3>
        <p className="mt-3 leading-relaxed">
          This is a demonstration. Your details were validated in the browser only. They were not sent, stored, or delivered to a project team.
        </p>
        <button type="button" className={`${orangeButton} mt-6`} onClick={() => setDone(false)}>
          Write another note
        </button>
      </div>
    );
  }

  const fields: { name: FieldName; label: string; type?: string; autoComplete: string }[] = [
    { name: "name", label: "Name", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      {fields.slice(0, 2).map((field) => (
        <Field
          key={field.name}
          id={`${uid}-${field.name}`}
          label={field.label}
          labelClass={label}
          error={errors[field.name]}
          errorClass={errorClass}
        >
          <input
            id={`${uid}-${field.name}`}
            name={field.name}
            type={field.type ?? "text"}
            autoComplete={field.autoComplete}
            value={values[field.name]}
            onChange={(event) => update(field.name, event.target.value)}
            aria-invalid={errors[field.name] ? true : undefined}
            aria-describedby={errors[field.name] ? `${uid}-${field.name}-error` : undefined}
            className={fieldClass}
          />
        </Field>
      ))}
      <Field
        id={`${uid}-projectType`}
        label="Project type"
        labelClass={label}
        error={errors.projectType}
        errorClass={errorClass}
      >
        <select
          id={`${uid}-projectType`}
          name="projectType"
          value={values.projectType}
          onChange={(event) => update("projectType", event.target.value)}
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? `${uid}-projectType-error` : undefined}
          className={fieldClass}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field
        id={`${uid}-phone`}
        label="Phone"
        labelClass={label}
        error={errors.phone}
        errorClass={errorClass}
      >
        <input
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
          className={fieldClass}
        />
      </Field>
      <div className="sm:col-span-2">
        <Field
          id={`${uid}-message`}
          label="Message"
          labelClass={label}
          error={errors.message}
          errorClass={errorClass}
        >
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${uid}-message-error` : undefined}
            className={fieldClass}
          />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className={orangeButton}>
          Submit enquiry
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  labelClass,
  error,
  errorClass,
  children,
}: {
  id: string;
  label: string;
  labelClass: string;
  error?: string;
  errorClass: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={`mb-2 block text-sm font-semibold ${labelClass}`}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className={`mt-1.5 text-sm font-semibold ${errorClass}`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
