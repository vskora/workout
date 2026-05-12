import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { ProgramStore } from '../program-store/program-store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Navigate } from '../navigate/navigate';
import { ProgramPlayerStep } from '../program.model';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-program-player',
  imports: [
    MatIconModule, MatButtonModule, MatListModule,
    Navigate
  ],
  templateUrl: './program-player.html',
  styleUrl: './program-player.scss',
  providers: [ProgramStore]
})
export class ProgramPlayer implements CanDeactivate<ProgramPlayer> {

  readonly #programStore = inject(ProgramStore);

  program = this.#programStore.program;

  steps = computed(() => {
    const program = this.program();

    if (!program)
      return null;

    const steps: ProgramPlayerStep[] = [];

    program.exercises.forEach((exercise, i) => {
      for (let j = 0; j < exercise.sets; j++) {
        steps.push({
          exercise: exercise
        });
        // rest steps
        if (program.exercises.length - 1 === i && exercise.sets - 1 === j)
          return;

        steps.push({
          duration: exercise.rest
        });
      }
    });

    return steps;
  });
  currentStepIndex = signal(0);
  currentStep = computed(() => {
    const currentStepIndex = this.currentStepIndex();
    const steps = this.steps();

    if (!steps)
      return null;

    return steps[currentStepIndex];
  });
  nextStep = computed(() => {
    const currentStepIndex = this.currentStepIndex();
    const steps = this.steps();

    if (!steps || currentStepIndex + 1 > steps.length)
      return null;

    return steps[currentStepIndex + 1];
  });
  currentStepEffect = effect(() => {
    const currentStep = this.currentStep();
    const running = this.running();

    if (!currentStep || !running)
      return;

    untracked(() => {
      if (currentStep.duration || currentStep.exercise?.type === 'time') {
        const duration = currentStep.duration ?? currentStep.exercise!.duration!;
        this.start(duration);
      }
    });
  });

  timer = signal(0);
  formattedTimer = computed(() => {
    const timer = this.timer();

    const m = Math.floor(timer / 60);
    const s = timer % 60;

    return `${m}:${s.toString().padStart(2, '0')}`;
  });
  running = signal(false);
  interval: any;

  start(duration: number) {
    clearInterval(this.interval);

    this.timer.set(duration);
    this.interval = setInterval(() => {
      this.timer.update(t => {
        if (t <= 1) {
          clearInterval(this.interval);
          this.next();
          return 0;
        }

        return t - 1;
      })
    }, 1000);
  }

  next() {
    const steps = this.steps();

    if (!steps)
      return;

    if (this.currentStepIndex() < steps.length - 1) {
      this.currentStepIndex.update(i => i + 1);
    }
  }

  play() {
    this.running.set(true);
  }
  
  canDeactivate(component: ProgramPlayer, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    alert('trying to deactivate');
    return false;
  }
}
