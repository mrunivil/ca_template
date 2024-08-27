import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { NumberEntity } from '../../../../core/entities/number.entity';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  value = input<NumberEntity | null | undefined>();
  increaseCounter = output();
  decreaseCounter = output();
}
