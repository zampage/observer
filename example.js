const Observer = require('./Observer');
const SUBSCRIPTION_A = 'subscription-of-component-a-and-c';
const SUBSCRIPTION_B = 'subscription-of-component-b';

//register Component A to Subscription A
Observer.subscribe(SUBSCRIPTION_A, () => {
	console.log('Component A got triggered');
});

//register Component B to Subscription B
Observer.subscribe(SUBSCRIPTION_B, (data) => {
	console.log('Component B got triggered');
	console.log('Received data: ' + data)
});

//register Component C to Subscription A
Observer.subscribe(SUBSCRIPTION_A, () => {
	console.log('Component C got triggered');
});

//trigger
console.log('----------------------------');
console.log('-- trigger Subscription A --');
console.log('----------------------------');
Observer.trigger(SUBSCRIPTION_A);
console.log('----------------------------');

console.log('-- trigger Subscription B --');
console.log('----------------------------');
Observer.trigger(SUBSCRIPTION_B, 'custom data');
console.log('----------------------------');