"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  SearchCheck,
} from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

const inputClass =
  "w-full rounded-md border border-white/15 bg-[#09182b] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#C9784A]";

const reviewPoints = [
  {
    title: "Local search visibility",
    detail:
      "How easily customers can find your business in Google and local search results.",
  },
  {
    title: "Website and mobile experience",
    detail:
      "How clearly your website presents your business and works on a phone.",
  },
  {
    title: "Trust and first impressions",
    detail:
      "Whether your online presence helps customers feel confident contacting you.",
  },
  {
    title: "Next-step opportunities",
    detail:
      "Practical ways to improve your online visibility and customer experience.",
  },
];

export default function VisibilityReview() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "idle") {
      statusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      statusRef.current?.focus({
        preventScroll: true,
      });
    }
  }, [status]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const submission = {
      name: String(formData.get("name") || ""),
      business: String(formData.get("business") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      website: String(formData.get("website") || ""),
      message: String(formData.get("message") || ""),
    };

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(
        "/api/visibility-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),