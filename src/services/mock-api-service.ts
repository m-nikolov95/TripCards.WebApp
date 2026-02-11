import { TripViewModel } from '../models/view-models/trip-view-model';

import data from '../data/data.json';

export const MockApiService = {
    mockGetTripsAsync: async (): Promise<TripViewModel[]> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        let trips: TripViewModel[] = data.trips;

        return trips;
    }
}