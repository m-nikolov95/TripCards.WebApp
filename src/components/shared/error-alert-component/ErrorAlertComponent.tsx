import { JSX } from 'react'

import { ErrorAlertComponentProps } from '../../../props/error-alert-component-props';

import './ErrorAlertComponentStyles.css';

export function ErrorAlertComponent(props: ErrorAlertComponentProps): JSX.Element {
    return (
        <div className='errorContainer'>
            <p className='errorText'>{props.error}</p>
            <div className='errorButtonContainer'>
                <button className='closeErrorButton' onClick={props.clearErrorAlert}>X</button>
            </div>
        </div>
    )
}

export default ErrorAlertComponent