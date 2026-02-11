import React, { JSX, useState } from 'react'

import { ErrorAlertComponent } from '../components/shared';

export function useErrorHandler() {
    let [errorState, setErrorState] = useState('');

    let showGeneralErrorTemplate = (): JSX.Element => {
        return (
            errorState !== null &&
                errorState !== undefined &&
                errorState !== '' ?
                <ErrorAlertComponent error={errorState} clearErrorAlert={clearErrorAlert} /> :
                <React.Fragment />
        )
    }

    let handleFormHttpErrorAsync = async (errorMessage: string): Promise<void> => {
        setErrorState(errorMessage);
    }

    let clearErrorAlert = (): void => {
        setErrorState('');
    }

    return {
        showGeneralErrorTemplate,
        handleFormHttpErrorAsync
    }
}

export default useErrorHandler