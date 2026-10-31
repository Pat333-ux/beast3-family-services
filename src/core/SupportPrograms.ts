export interface SupportProgram {
  id: string;
  title: string;
  description: string;
  participants: number;
}

export class SupportPrograms {
  private programs: SupportProgram[] = [];

  createProgram(
    title: string,
    description: string
  ): SupportProgram {
    const program: SupportProgram = {
      id: crypto.randomUUID(),
      title,
      description,
      participants: 0,
    };

    this.programs.push(program);

    return program;
  }

  getPrograms(): SupportProgram[] {
    return this.programs;
  }
}

export const supportPrograms =
  new SupportPrograms();
