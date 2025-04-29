import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export async function POST(request: NextRequest) {
  try {
    const contactData: ContactFormData = await request.json();

    // TODO: Implement actual contact form logic here
    // For example: send email, store in database, etc.
    return NextResponse.json(
      { 
        message: "Message received successfully", 
        contact: contactData 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Failed to process contact form submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact form API endpoint" },
    { status: 200 }
  );
}