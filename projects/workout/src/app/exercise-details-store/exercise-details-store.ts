import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ExerciseDetail } from '../program.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseDetailsStore {

  readonly #http = inject(HttpClient);

  // https://github.com/yuhonas/free-exercise-db/tree/main
  exerciseDetailsResource = rxResource({
    stream: () => this.#http.get<ExerciseDetail[]>('/exercises.json')
  });
  exerciseDetails = computed(() => this.exerciseDetailsResource.hasValue() ?
    this.exerciseDetailsResource.value() : []);
}
