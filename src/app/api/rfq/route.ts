import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse form data
    const formData = await request.formData();

    // Extract text fields
    const fullName = formData.get("fullName") as string;
    const companyName = formData.get("companyName") as string;
    const workEmail = formData.get("workEmail") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const moldTypes = formData.get("moldTypes") as string;
    const partDescription = formData.get("partDescription") as string;
    const annualVolume = formData.get("annualVolume") as string;
    const moldLife = formData.get("moldLife") as string;
    const timeline = formData.get("timeline") as string;
    const additionalNotes = formData.get("additionalNotes") as string;

    // Extract files
    const files: { name: string; size: number }[] = [];
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files.push({ name: value.name, size: value.size });
      }
    }

    // Log for MVP — replace with UploadThing + Resend in production
    console.log("=== RFQ Submission ===");
    console.log("Name:", fullName);
    console.log("Company:", companyName);
    console.log("Email:", workEmail);
    console.log("Phone:", phone);
    console.log("Country:", country);
    console.log("Mold Types:", moldTypes);
    console.log("Part:", partDescription);
    console.log("Volume:", annualVolume);
    console.log("Mold Life:", moldLife);
    console.log("Timeline:", timeline);
    console.log("Notes:", additionalNotes);
    console.log("Files:", files.map((f) => `${f.name} (${f.size} bytes)`).join(", "));
    console.log("======================");

    return NextResponse.json({
      success: true,
      message: "RFQ received. We will respond within 24 hours.",
    });
  } catch (error) {
    console.error("RFQ submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

// Set max body size for file uploads (100 MB)
export const maxDuration = 30; // 30 seconds
export const dynamic = "force-dynamic";
