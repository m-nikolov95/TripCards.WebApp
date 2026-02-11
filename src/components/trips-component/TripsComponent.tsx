import React, { JSX, useContext, useEffect, useState } from 'react'

import { MockApiService } from '../../services/mock-api-service';

import { Context } from '../../context/Context';

import { TripCardComponent } from '../trip-card-component/TripCardComponent';

import { useErrorHandler } from '../../hooks/useErrorHandler';

import { TripViewModel } from '../../models/view-models/trip-view-model';

import { TripsState } from '../../state/trips-state';

import './TripsComponentStyles.css';

export function TripsComponent(): JSX.Element {
    let context = useContext(Context);

    let { handleFormHttpErrorAsync, showGeneralErrorTemplate } = useErrorHandler();

    let [tripsState, setTripsState] = useState<TripsState>();
    let [isSortedByRatingState, setIsSortedByRatingState] = useState(false);

    useEffect((): void => {
        (async () => {
            await getTripsAsync();
        })();
    }, []);

    const getTripsAsync = async (): Promise<void> => {
        try {
            context.showLoadingSpinner();

            let trips = await MockApiService.mockGetTripsAsync();

            setTripsState({
                initialTrips: trips,
                filteredTrips: trips
            });
        }
        catch (error) {
            handleFormHttpErrorAsync('An error has occurred. Please try again later.');
        }
        finally {
            context.hideLoadingSpinner();
        }
    }


    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let searchTerm = event.target.value.toLowerCase();

        if (tripsState !== null && tripsState !== undefined) {
            let filteredTrips = tripsState.initialTrips.filter(trip =>
                trip.name.toLowerCase().includes(searchTerm)
            );

            setTripsState({
                ...tripsState,
                filteredTrips: filteredTrips
            });
        }
    }

    let handleSortButtonClick = (): void => {
        setIsSortedByRatingState(prevState => !prevState);
    }

    let trips = isSortedByRatingState &&
        tripsState?.filteredTrips !== null &&
        tripsState?.filteredTrips !== undefined ?
        [...tripsState.filteredTrips].sort((a, b) => b.rating - a.rating) :
        tripsState?.filteredTrips;

    return (
        <div>
            {
                context.showLoadingSpinnerTemplate()
            }
            {
                !context.shouldShowLoadingSpinner ?
                    <React.Fragment>
                        {
                            showGeneralErrorTemplate()
                        }
                        <div className='filterContainer'>
                            <input className='searchInput' placeholder='Search...' onChange={handleSearchInputChange} />
                            <div className='filterButtonContainer'>
                                <button className='filterButton'
                                    onClick={handleSortButtonClick} aria-pressed={isSortedByRatingState}>
                                    {isSortedByRatingState ? 'Unsort by Rating' : 'Sort by Rating'}
                                </button>
                            </div>
                        </div >
                        {
                            trips !== null &&
                                trips !== undefined &&
                                trips.length > 0 ?
                                <div className='tripsGrid'>
                                    {
                                        trips.map((trip: TripViewModel) => {
                                            return (
                                                <TripCardComponent key={trip.id} {...trip} />
                                            )
                                        })
                                    }
                                </div> :
                                <React.Fragment />
                        }
                    </React.Fragment> :
                    <React.Fragment />
            }
        </div>
    )
}

export default TripsComponent;