# Basic Observer

This is an implementation in nodejs of a basic Observer.
The Observer keeps a list of all subscriptions and notifys the subscriber about triggered events.

### Subscribing
```js
Observer.subscribe(SOME_CONSTANT, function);
```

### Triggering
```js
Observer.trigger(SOME_CONSTANT [, data]);
```