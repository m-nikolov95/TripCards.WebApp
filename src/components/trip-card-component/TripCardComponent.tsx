import { JSX, useState } from 'react'
import { createPortal } from 'react-dom';

import { ModalComponent } from '../shared';

import { TripViewModel } from '../../models/view-models/trip-view-model'

import star from '../../images/star_icon.png';

import './TripCardComponentStyles.css';

export function TripCardComponent(props: TripViewModel): JSX.Element {
    let [shouldShowModalState, setShouldShowModalState] = useState(false);

    const onToggleModalButtonClick = (): void => {
        setShouldShowModalState(prefState => !prefState);
    }

    return (
        <div key={props.id} className='card'>
            <img alt={`Image of ${props.name}`} className='cardImage' src={props.image} />
            <div className='placeInfoContainer'>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                {
                    Array.from({ length: Math.trunc(props.rating) }, (_, index) =>
                        <img alt='star' src={star} key={index} width={15} height={15} />
                    )
                }
                <button className='detailsButton' onClick={onToggleModalButtonClick}>More Info</button>
            </div>
            {shouldShowModalState && createPortal
                (
                    <ModalComponent name={props.name}
                        longDescription={props.long_description}
                        onClose={onToggleModalButtonClick} />,
                    document.body
                )}
        </div>
    )
}

export default TripCardComponent;