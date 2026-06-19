"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { rfqFormSchema, type RFQFormValues } from "@/lib/zod-schemas";
import { COUNTRIES } from "@/lib/constants";
import { FileUploader } from "./FileUploader";

const MOLD_TYPE_OPTIONS = [
  "Injection Mold",
  "Die-Casting Mold",
  "Blow Mold",
  "Rapid Prototype / Prototype Mold",
  "Other / Not Sure",
];

const VOLUME_OPTIONS = [
  "",
  "Under 1,000 parts/year",
  "1,000 - 10,000 parts/year",
  "10,000 - 100,000 parts/year",
  "100,000 - 1,000,000 parts/year",
  "Over 1,000,000 parts/year",
];

const MOLD_LIFE_OPTIONS = [
  "",
  "Prototype (under 10K shots)",
  "Low volume (10K - 100K shots)",
  "Medium volume (100K - 500K shots)",
  "High volume (500K - 1M shots)",
  "Mass production (1M+ shots)",
];

const TIMELINE_OPTIONS = [
  "",
  "Urgent (under 4 weeks)",
  "Standard (4-8 weeks)",
  "Relaxed (8-12 weeks)",
  "Planning / Not urgent",
];

export function RFQForm() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RFQFormValues>({
    resolver: zodResolver(rfqFormSchema),
    defaultValues: {
      moldTypes: [],
    },
  });

  const onSubmit = async (data: RFQFormValues) => {
    setSubmitState("submitting");
    setErrorMessage("");

    try {
      // Build FormData for API call
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("companyName", data.companyName);
      formData.append("workEmail", data.workEmail);
      if (data.phone) formData.append("phone", data.phone);
      formData.append("country", data.country);
      formData.append("moldTypes", JSON.stringify(data.moldTypes));
      formData.append("partDescription", data.partDescription);
      if (data.annualVolume) formData.append("annualVolume", data.annualVolume);
      if (data.moldLife) formData.append("moldLife", data.moldLife);
      if (data.timeline) formData.append("timeline", data.timeline);
      if (data.additionalNotes) formData.append("additionalNotes", data.additionalNotes);
      files.forEach((file) => formData.append("files", file));

      const res = await fetch("/api/rfq", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.message || "Submission failed");
      }

      setSubmitState("success");
      reset();
      setFiles([]);
      router.push("/thank-you");
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly at info@peifengmold.com."
      );
    }
  };

  if (submitState === "success") {
    return null; // Will redirect to /thank-you
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Contact Information */}
      <fieldset>
        <legend className="mb-4 text-lg font-semibold text-primary">
          Contact Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-primary">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your full name"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="mb-1 block text-sm font-medium text-primary">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your company"
            />
            {errors.companyName && (
              <p className="mt-1 text-xs text-red-600">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="workEmail" className="mb-1 block text-sm font-medium text-primary">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              id="workEmail"
              type="email"
              {...register("workEmail")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="you@company.com"
            />
            {errors.workEmail && (
              <p className="mt-1 text-xs text-red-600">{errors.workEmail.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-primary">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="+1 234 567 8900"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="country" className="mb-1 block text-sm font-medium text-primary">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              {...register("country")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select your country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-xs text-red-600">{errors.country.message}</p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Mold Requirements */}
      <fieldset>
        <legend className="mb-4 text-lg font-semibold text-primary">
          Mold Requirements
        </legend>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-primary">
              Mold Type <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {MOLD_TYPE_OPTIONS.map((type) => (
                <label
                  key={type}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm cursor-pointer hover:border-accent transition-colors has-[:checked]:border-accent has-[:checked]:bg-orange-50"
                >
                  <input
                    type="checkbox"
                    value={type}
                    {...register("moldTypes")}
                    className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  {type}
                </label>
              ))}
            </div>
            {errors.moldTypes && (
              <p className="mt-1 text-xs text-red-600">{errors.moldTypes.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="partDescription" className="mb-1 block text-sm font-medium text-primary">
              Part Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="partDescription"
              rows={4}
              {...register("partDescription")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Describe your part: What is it? What material will be used? What are the approximate dimensions? Any special surface finish or tolerance requirements?"
            />
            {errors.partDescription && (
              <p className="mt-1 text-xs text-red-600">
                {errors.partDescription.message}
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="annualVolume" className="mb-1 block text-sm font-medium text-primary">
                Expected Annual Volume
              </label>
              <select
                id="annualVolume"
                {...register("annualVolume")}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {VOLUME_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v || "Select..."}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="moldLife" className="mb-1 block text-sm font-medium text-primary">
                Target Mold Life
              </label>
              <select
                id="moldLife"
                {...register("moldLife")}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {MOLD_LIFE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v || "Select..."}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="mb-1 block text-sm font-medium text-primary">
                Timeline
              </label>
              <select
                id="timeline"
                {...register("timeline")}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {TIMELINE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v || "Select..."}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </fieldset>

      {/* File Uploads */}
      <fieldset>
        <legend className="mb-4 text-lg font-semibold text-primary">
          CAD Files & Reference Images
        </legend>
        <div className="space-y-4">
          <FileUploader
            files={files}
            onChange={setFiles}
            label="Upload CAD Files"
            description="STEP, IGES, STL, X_T, SLDPRT, or ZIP. Max 25 MB per file, up to 5 files."
          />
        </div>
      </fieldset>

      {/* Additional Notes */}
      <fieldset>
        <legend className="mb-4 text-lg font-semibold text-primary">
          Additional Information
        </legend>
        <div>
          <label htmlFor="additionalNotes" className="mb-1 block text-sm font-medium text-primary">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            rows={3}
            {...register("additionalNotes")}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Any special requirements, questions, or context you'd like to share..."
          />
        </div>
      </fieldset>

      {/* Submit */}
      <div className="border-t border-gray-100 pt-6">
        {submitState === "error" && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-10"
        >
          {submitState === "submitting" ? (
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Your Mold Inquiry →"
          )}
        </button>

        <p className="mt-4 text-xs text-steel-light">
          By submitting, you agree to our privacy policy. Your design files are confidential and will never be shared without your permission.
        </p>
      </div>
    </form>
  );
}
