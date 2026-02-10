import { TripViewModel } from '../models/view-models/trip-view-model';

export interface TripsState {
    initialTrips: TripViewModel[];
    filteredTrips: TripViewModel[];
}