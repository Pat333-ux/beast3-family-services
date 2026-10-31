import { familyReport } from "../core/FamilyReport";

export async function GET() {
  return Response.json({
    success: true,
    division: "Family Services",
    report: familyReport.generate(),
  });
}
