import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "info@peifengmold.com";
const FROM_EMAIL =
  process.env.FROM_EMAIL || "Peifeng Precision Mold <info@peifengmold.com>";

export interface RFQEmailData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone?: string;
  country: string;
  moldTypes: string[];
  partDescription: string;
  annualVolume?: string;
  moldLife?: string;
  timeline?: string;
  additionalNotes?: string;
  files: { name: string; size: number }[];
}

function formatMoldTypes(types: string[]): string {
  return types.length > 0 ? types.join(", ") : "Not specified";
}

function formatOptional(value?: string): string {
  return value || "Not specified";
}

function formatFileList(files: { name: string; size: number }[]): string {
  if (files.length === 0) return "No files attached";
  return files
    .map((f) => `  - ${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)`)
    .join("\n");
}

export async function sendRFQNotification(data: RFQEmailData): Promise<void> {
  const subject = `[RFQ] New Mold Inquiry from ${data.companyName}`;

  const body = `=== New Mold RFQ Submission ===

Contact Information:
  Name:       ${data.fullName}
  Company:    ${data.companyName}
  Email:      ${data.workEmail}
  Phone:      ${formatOptional(data.phone)}
  Country:    ${data.country}

Mold Requirements:
  Mold Type:       ${formatMoldTypes(data.moldTypes)}
  Part Description: ${data.partDescription}
  Annual Volume:   ${formatOptional(data.annualVolume)}
  Mold Life:       ${formatOptional(data.moldLife)}
  Timeline:        ${formatOptional(data.timeline)}

Additional Notes:
  ${formatOptional(data.additionalNotes)}

Attached Files:
${formatFileList(data.files)}
==============================`;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFICATION_EMAIL,
    subject,
    text: body,
  });
}

export async function sendCustomerConfirmation(data: {
  fullName: string;
  workEmail: string;
}): Promise<void> {
  const subject = "Thank you for your inquiry — Peifeng Precision Mold";

  const body = `Hi ${data.fullName},

Thank you for reaching out to Peifeng Precision Mold. We have received your RFQ submission and our engineering team will review your requirements shortly.

What happens next:
  1. Our engineers will review your part description and files (if any).
  2. We will send you a DFM (Design for Manufacturability) review within 24 hours.
  3. You will receive a detailed quotation including mold cost, lead time, and shipping options.

If you have any questions in the meantime, feel free to reply to this email or contact us at:
  Email: info@peifengmold.com
  Website: https://www.peifengmold.com

Best regards,
Peifeng Precision Mold Team
Shenzhen, Guangdong, China`;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: data.workEmail,
    subject,
    text: body,
  });
}
