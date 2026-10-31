export interface FamilyCase {
  id: string;
  familyId: string;
  category: string;
  status: "open" | "closed";
  createdAt: string;
}

export class CaseManagement {
  private cases: FamilyCase[] = [];

  createCase(
    familyId: string,
    category: string
  ): FamilyCase {
    const familyCase: FamilyCase = {
      id: crypto.randomUUID(),
      familyId,
      category,
      status: "open",
      createdAt: new Date().toISOString(),
    };

    this.cases.push(familyCase);

    return familyCase;
  }

  getCases(): FamilyCase[] {
    return this.cases;
  }
}

export const caseManagement =
  new CaseManagement();
