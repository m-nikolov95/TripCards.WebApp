import { JSX } from 'react';

export class ContextModel {
    shouldShowLoadingSpinner!: boolean;
    showLoadingSpinner!: () => void;
    hideLoadingSpinner!: () => void;
    showLoadingSpinnerTemplate!: () => JSX.Element;
}