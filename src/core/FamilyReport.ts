import { familyRegistry } from "./FamilyRegistry";
import { caseManagement } from "./CaseManagement";
import { supportPrograms } from "./SupportPrograms";

export class FamilyReport {
  generate() {
    return {
      families: familyRegistry.getFamilies().length,
      cases: caseManagement.getCases().length,
      programs: supportPrograms.getPrograms().length,
      generatedAt: new Date().toISOString(),
    };
  }
}

export const familyReport =
  new FamilyReport();
