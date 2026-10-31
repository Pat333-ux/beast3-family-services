export interface Family {
  id: string;
  primaryContact: string;
  householdSize: number;
  status: "active" | "inactive";
  createdAt: string;
}

export class FamilyRegistry {
  private families: Family[] = [];

  registerFamily(
    primaryContact: string,
    householdSize: number
  ): Family {
    const family: Family = {
      id: crypto.randomUUID(),
      primaryContact,
      householdSize,
      status: "active",
      createdAt: new Date().toISOString(),
    };

    this.families.push(family);

    return family;
  }

  getFamilies(): Family[] {
    return this.families;
  }
}

export const familyRegistry =
  new FamilyRegistry();
