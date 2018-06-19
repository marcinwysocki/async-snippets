/**
 * Interfejs
 */

interface Observer {
    next(value): void;
    error(err): void;
    complete(): void;
}

interface Subscription {
    unsubscribe(): void;
}

interface Observable {
    subscribe(observer: Observer): Subscription;
}
