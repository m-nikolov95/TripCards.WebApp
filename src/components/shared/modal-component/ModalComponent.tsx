import { JSX } from 'react';

import { ModalComponentProps } from '../../../props/modal-component-props';

import './ModalComponentStyles.css';

export function ModalComponent(props: ModalComponentProps): JSX.Element {
    return (
        <div className='modalOverlay'>
            <div className='modalContent'>
                <h2>{props.name}</h2>
                <p className='modalText'>{props.longDescription}</p>
                <button className='closeButton' onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}

export default ModalComponent;