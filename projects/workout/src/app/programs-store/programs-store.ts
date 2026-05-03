import { computed, Injectable } from '@angular/core';
import { Store } from '../store/store';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Program } from '../program.model';

@Injectable({
  providedIn: 'root',
})
export class ProgramsStore extends Store {

  override readonly KEY = 'PROGRAMS';

  programsResource = rxResource({
    stream: () => of(this.get<Program[]>() ?? [])
  });
  programs = computed(() => this.programsResource.hasValue() ?
    (this.programsResource.value() ?? []) : []);

  create(name: string) {
    const program: Program = {
      id: crypto.randomUUID(),
      name,
      exercises: []
    };

    this.programsResource.set([...this.programs(), program]);
    this.save(this.programs());
  }

  delete(id: string) {
    this.programsResource.set(this.programs().filter(program => program.id !== id));
    this.save(this.programs());
  }

  find(id: string) {
    return this.programs().find(program => program.id === id);
  }

  update(programToUpdate: Program) {
    this.programsResource.update(programs => programs!
      .map(program => program.id === programToUpdate.id ? programToUpdate : program));
    this.save(this.programs());
  }
}
