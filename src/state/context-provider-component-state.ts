export class ContextProviderComponentState {
    shouldShowLoadingSpinner: boolean;
    isContextInitialized: boolean;

    constructor() {
        this.shouldShowLoadingSpinner = false;
        this.isContextInitialized = false;
    }
}