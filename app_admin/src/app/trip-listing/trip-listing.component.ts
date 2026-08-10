import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = [];

  constructor(
    private tripService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });
  }

  public addTrip(): void {
    this.router.navigate(['/add-trip']);
  }
}
