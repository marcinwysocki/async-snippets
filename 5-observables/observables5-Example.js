/**
 * Przykład z życia wzięty
 */

class Service {
    failedReconnections() {
        // Failed reconnection === Connecting -> Connection error not related to authorization
        return this.connectionStates()
            .filter(state => !this.isAuthRelatedError(state))
            .pairwise()
            .filter(this.isFailedReconnection)
            .switchMap(connectionStates =>
                // we'd like to wait a moment to see, if reconnection is in progress
                Observable.of(connectionStates)
                    .delay(1000)
                    .takeUntil(this.reconnectionState$.filter(isReconnecting)),
            )
            .map(([_, second]) => second);
    }

    /**
     * Pozostałe metody
     */

    connectionStates() {
        return new Observable();
    }

    isFailedReconnection([firstConnectionState, secondConnectionState]) {
        return (
            isConnecting(firstConnectionState) &&
            isWithError(secondConnectionState)
        );
    }

    isAbruptDisconnection([firstConnectionState, secondConnectionState]) {
        return (
            isConnected(firstConnectionState) &&
            isWithError(secondConnectionState)
        );
    }

    isAuthRelatedError(state) {
        return (
            isWithError(state) &&
            (isAuthError(state.error) || isTokenRefreshError(state.error))
        );
    }
}





/**
 * A sam connectionStates() wygląda tak...
 */
const obj = {
    connectionStates() {
        return Observable.merge(
            this.connections().mapTo({ type: 'Connecting' }),
            this.sessionInitializations()
                .mapTo({ type: 'Connected' })
                .catch((_err, caught) =>
                    caught.startWith({
                        type: 'Disconnected',
                        error: sessionInitializationTimeoutError(),
                    }),
                ),
            this.disconnections()
                .filter(() => !this.disconnectedGracefully)
                .mapTo({
                    type: 'Disconnected',
                    error: connectionClosedError(),
                }),
            this.disconnections()
                .filter(() => this.disconnectedGracefully)
                .mapTo({ type: 'Disconnected' }),
            this.connectionTimeouts().mapTo({
                type: 'Disconnected',
                error: connectionTimeoutError(),
            }),
            this.authenticationFailures()
                .mapTo({
                    type: 'Disconnected',
                    error: authError(),
                })
                .catch(() =>
                    Observable.of({
                        type: 'Disconnected',
                        error: tokenRefreshError(),
                    }),
                ),
        );
    },
};
