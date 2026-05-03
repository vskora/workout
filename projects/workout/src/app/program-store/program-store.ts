import { computed, inject, Injectable } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';
import { ProgramsStore } from '../programs-store/programs-store';
import { Exercise } from '../program.model';

@Injectable()
export class ProgramStore {

  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #programsStore = inject(ProgramsStore);

  id = toSignal(this.#activatedRoute.paramMap.pipe(map(params => params.get('id'))));
  programs = this.#programsStore.programs;

  programResource = rxResource({
    params: () => {
      const id = this.id();
      const programs = this.programs();

      if (!id || programs.length === 0)
        return undefined;

      return id;
    },
    stream: ({ params }) => of(this.#programsStore.find(params))
  });
  program = computed(() => this.programResource.hasValue() ?
    this.programResource.value() : null);

  addExercise(exercise: Exercise) {
    const program = this.program();

    if (!program)
      return;

    this.#programsStore.update({...program, exercises: [...program.exercises, exercise]});
  }

  deleteExercise(id: string) {
    const program = this.program();

    if (!program)
      return;

    this.#programsStore.update({...program, exercises: program.exercises.filter(program => program.id !== id)});
  }
}
