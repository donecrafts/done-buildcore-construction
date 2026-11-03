"use client";

import { FormEvent, useId, useState } from "react";
import { fieldClass } from "@/lib/styles";

export function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      setDone(false);
      return;
    }
    setError("");
    setEmail("");
    setDone(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <label htmlFor={id} className="block text-sm font-semibold text-white">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          aria-invalid={error ? true : undefined}
          aria-describedby={`${id}-note`}
          className={fieldClass}
        />
        <button
          type="submit"
          className="bg-orange px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-navy transition hover:bg-[#e0910d]"
        >
          Subscribe
        </button>
      </div>
      <p id={`${id}-note`} className="text-sm leading-relaxed text-white/65">
        {done
          ? "This preview checked the address in your browser. You were not added to a mailing list, and nothing was stored."
          : "Demonstration only. Nothing is subscribed or stored."}
      </p>
      {error ? (
        <p className="text-sm font-semibold text-orange" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
