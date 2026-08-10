import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {

  @Input() trip!: Trip;

  constructor(private router: Router) {}

  public editTrip(trip: Trip): void {
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['/edit-trip']);
  }
}


