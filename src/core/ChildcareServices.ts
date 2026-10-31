export interface ChildcareProgram {
  id: string;
  name: string;
  capacity: number;
  enrolled: number;
}

export class ChildcareServices {
  private programs: ChildcareProgram[] = [];

  createProgram(
    name: string,
    capacity: number
  ): ChildcareProgram {
    const program: ChildcareProgram = {
      id: crypto.randomUUID(),
      name,
      capacity,
      enrolled: 0,
    };

    this.programs.push(program);

    return program;
  }

  enroll(programId: string) {
    const program = this.programs.find(
      p => p.id === programId
    );

    if (program && program.enrolled < program.capacity) {
      program.enrolled++;
    }

    return program;
  }

  getPrograms(): ChildcareProgram[] {
    return this.programs;
  }
}

export const childcareServices =
  new ChildcareServices();
