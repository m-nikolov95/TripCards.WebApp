import { JSX, useContext, useEffect, useState } from 'react'

import { MockApiService } from '../../services/mock-api-service';

import { Context } from '../../context/Context';

import { useErrorHandler } from '../../hooks/useErrorHandler';

import { TripViewModel } from '../../models/view-models/trip-view-model';

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
            TripsComponent
        </div>
    )
}

export default TripsComponent