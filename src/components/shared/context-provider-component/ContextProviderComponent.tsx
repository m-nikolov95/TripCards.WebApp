import React, { JSX, useEffect, useState } from 'react';

import { Context } from '../../../context/Context'

import { LoadingSpinnerComponent } from '../loading-spinner-component/LoadingSpinnerComponent';

import { ContextProviderComponentState } from '../../../state/context-provider-component-state';

import { AppProps } from '../../../props/app-props';

export function ContextProviderComponent(props: AppProps): JSX.Element {
    let [contextState, setContextState] = useState(new ContextProviderComponentState());

    useEffect((): void => {
        setContextState((prevState) => ({
            ...prevState,
            isContextInitialized: true,
        }));
    }, []);

    let showLoadingSpinnerTemplate = (): JSX.Element => {
        return (
            contextState.shouldShowLoadingSpinner ?
                <LoadingSpinnerComponent shouldShowLoadingSpinner={contextState.shouldShowLoadingSpinner} /> :
                <React.Fragment />
        );
    };

    let showLoadingSpinner = (): void => {
        setContextState((prevState) => ({
            ...prevState,
            shouldShowLoadingSpinner: true
        }));
    };

    let hideLoadingSpinner = (): void => {
        setContextState((prevState) => ({
            ...prevState,
            shouldShowLoadingSpinner: false
        }));
    };

    return (
        contextState.isContextInitialized ?
            <Context.Provider
                value={{
                    shouldShowLoadingSpinner: contextState.shouldShowLoadingSpinner,
                    showLoadingSpinner: () => showLoadingSpinner(),
                    hideLoadingSpinner: () => hideLoadingSpinner(),
                    showLoadingSpinnerTemplate: () => showLoadingSpinnerTemplate()
                }}>
                {props.children}
            </Context.Provider> :
            <React.Fragment />
    )
};

export default ContextProviderComponent;