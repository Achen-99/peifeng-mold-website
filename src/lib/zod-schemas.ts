import { z } from "zod";

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
const ACCEPTED_FILE_TYPES = [
  "application/octet-stream",
  "application/step",
  "application/x-step",
  "model/step",
  "model/x.step",
  "application/iges",
  "application/x-iges",
  "model/iges",
  "model/x.iges",
  "application/sla",
  "application/vnd.ms-pki.stl",
  "model/stl",
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/zip",
  "application/x-zip-compressed",
];

const ACCEPTED_EXTENSIONS = [
  ".step", ".stp",
  ".iges", ".igs",
  ".stl",
  ".x_t", ".x_b",
  ".sldprt",
  ".pdf",
  ".jpg", ".jpeg",
  ".png",
  ".zip",
];

export const rfqFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  workEmail: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  moldTypes: z.array(z.string()).min(1, "Select at least one mold type"),
  partDescription: z.string().min(10, "Please describe your part (min 10 characters)"),
  annualVolume: z.string().optional(),
  moldLife: z.string().optional(),
  timeline: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export type RFQFormValues = z.infer<typeof rfqFormSchema>;

// File validation helper
export function validateFile(file: File): { valid: boolean; error?: string } {
  const extension = "." + file.name.split(".").pop()?.toLowerCase();
  if (!ACCEPTED_EXTENSIONS.includes(extension)) {
    return {
      valid: false,
      error: `File type ${extension || "unknown"} is not supported. Accepted: STEP, IGES, STL, X_T, SLDPRT, PDF, JPG, PNG, ZIP`,
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File ${file.name} exceeds the 25 MB size limit.`,
    };
  }

  return { valid: true };
}
