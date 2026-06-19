import { NextResponse } from "next/server";
import { sendRFQNotification, sendCustomerConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract text fields
    const fullName = (formData.get("fullName") as string) || "";
    const companyName = (formData.get("companyName") as string) || "";
    const workEmail = (formData.get("workEmail") as string) || "";
    const phone = (formData.get("phone") as string) || undefined;
    const country = (formData.get("country") as string) || "";
    const moldTypesRaw = (formData.get("moldTypes") as string) || "";
    const partDescription = (formData.get("partDescription") as string) || "";
    const annualVolume = (formData.get("annualVolume") as string) || undefined;
    const moldLife = (formData.get("moldLife") as string) || undefined;
    const timeline = (formData.get("timeline") as string) || undefined;
    const additionalNotes = (formData.get("additionalNotes") as string) || undefined;

    // Parse moldTypes (sent as JSON string from frontend)
    let moldTypes: string[] = [];
    try {
      moldTypes = JSON.parse(moldTypesRaw);
    } catch {
      moldTypes = moldTypesRaw ? [moldTypesRaw] : [];
    }

    // Extract files metadata
    const files: { name: string; size: number }[] = [];
    for (const [, value] of formData.entries()) {
      if (value instanceof File) {
        files.push({ name: value.name, size: value.size });
      }
    }

    // Send notification email to Peifeng team
    await sendRFQNotification({
      fullName,
      companyName,
      workEmail,
      phone,
      country,
      moldTypes,
      partDescription,
      annualVolume,
      moldLife,
      timeline,
      additionalNotes,
      files,
    });

    // Send auto-confirmation to the customer
    await sendCustomerConfirmation({
      fullName,
      workEmail,
    });

    return NextResponse.json({
      success: true,
      message: "RFQ received. We will respond within 24 hours.",
    });
  } catch (error) {
    console.error("RFQ submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Internal server error. Please try again or email us directly at info@peifengmold.com.",
      },
      { status: 500 }
    );
  }
}

export const maxDuration = 30;
export const dynamic = "force-dynamic";
