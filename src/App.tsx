import { JSX } from 'react';

import { ContextProviderComponent } from './components/shared/context-provider-component/ContextProviderComponent';
import { TripsComponent } from './components/trips-component/TripsComponent';

import './App.css';

function App(): JSX.Element {
    return (
        <ContextProviderComponent>
            <div className='container'>
                <TripsComponent />
            </div>
        </ContextProviderComponent>
    );
}

export default App;