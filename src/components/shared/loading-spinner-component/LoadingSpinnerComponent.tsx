import React, { JSX } from 'react';

import { SpinnerComponentProps } from '../../../props/spinner-component-props';

import spinner from '../../../images/Spinner.gif';

import './LoadingSpinnerComponentStyles.css';

export function LoadingSpinnerComponent(props: SpinnerComponentProps): JSX.Element {
    return props.shouldShowLoadingSpinner ?
        (
            <div className='spinnerModal'>
                <img alt='Loading...' width={70} height={70} src={spinner} />
            </div>
        ) :
        <React.Fragment />;
}

export default LoadingSpinnerComponent; 