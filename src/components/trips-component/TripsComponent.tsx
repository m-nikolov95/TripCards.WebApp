import React, { JSX, useContext, useEffect, useState } from 'react'

import { MockApiService } from '../../services/mock-api-service';

import { Context } from '../../context/Context';

import { TripCardComponent } from '../trip-card-component/TripCardComponent';

import { useErrorHandler } from '../../hooks/useErrorHandler';

import { TripViewModel } from '../../models/view-models/trip-view-model';

import './TripsComponentStyles.css';

export function TripsComponent(): JSX.Element {
    let context = useContext(Context);

    let { handleFormHttpErrorAsync, showGeneralErrorTemplate } = useErrorHandler();

    let [tripsState, setTripsState] = useState<TripViewModel[]>();

    useEffect((): void => {
        (async () => {
            await getTripsAsync();
        })();
    }, []);

    const getTripsAsync = async (): Promise<void> => {
        try {
            context.showLoadingSpinner();

            let trips = await MockApiService.mockGetTripsAsync();

            setTripsState(trips);
        }
        catch (error) {
            handleFormHttpErrorAsync('An error has occurred. Please try again later.');
        }
        finally {
            context.hideLoadingSpinner();
        }
    }

    return (
        <div>
            {
                context.showLoadingSpinnerTemplate()
            }
            {
                showGeneralErrorTemplate()
            }
            {
                tripsState !== null &&
                    tripsState !== undefined &&
                    tripsState.length > 0 ?
                    <div className='tripsGrid'>
                        {
                            tripsState.map((trip: TripViewModel) => {
                                return (
                                    <TripCardComponent key={trip.id} {...trip} />
                                )
                            })
                        }
                    </div> :
                    <React.Fragment />
            }
        </div>
    )
}

export default TripsComponent