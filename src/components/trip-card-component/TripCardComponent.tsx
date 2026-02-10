import { JSX, useState } from 'react'
import { createPortal } from 'react-dom';

import { ModalComponent } from '../shared';

import { TripViewModel } from '../../models/view-models/trip-view-model'

import star from '../../images/star_icon.png';

import './TripCardComponentStyles.css';

export function TripCardComponent(props: TripViewModel): JSX.Element {
    let [showModalState, setShowModalState] = useState(false);

    const onMoreInfoButtonClick = (): void => {
        setShowModalState(true);
    }

    return (
        <div key={props.id} className='card'>
            <img alt='' className='cardImage' src={props.image} />
            <div className='placeInfoContainer'>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                {
                    Array.from({ length: Math.trunc(props.rating) }, (_, index) =>
                        <img alt='' src={star} key={index} width={15} height={15} />
                    )
                }
                <button className='detailsButton' onClick={onMoreInfoButtonClick}>More Info</button>
            </div>
            {showModalState && createPortal
                (
                    <ModalComponent name={props.name}
                        longDescription={props.long_description}
                        onClose={() => setShowModalState(false)} />,
                    document.body
                )}
        </div>
    )
}

export default TripCardComponent