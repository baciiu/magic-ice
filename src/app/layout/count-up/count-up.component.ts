import { Component, Inject, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-count-up',
  standalone: true,
  imports: [CardModule],
  templateUrl: './count-up.component.html',
  styleUrl: './count-up.component.scss',
})
export class CountUpComponent implements OnInit {
  @Input() target = 0;

  counterValue = 0;
  interval = 160;

  ngOnInit(): void {
    this.countUp();
  }

  countUp() {
    const timer = setInterval(() => {
      if (this.counterValue < this.target) {
        this.counterValue++;
      } else {
        clearInterval(timer);
      }
    }, this.interval);
  }
}
