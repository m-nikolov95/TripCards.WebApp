import { JSX } from 'react';

export class ContextModel {
    showLoadingSpinner!: () => void;
    hideLoadingSpinner!: () => void;
    showLoadingSpinnerTemplate!: () => JSX.Element;
}