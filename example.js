const Observer = require('./Observer');
const SUBSCRIPTION_A = 'subscription-of-a';
const SUBSCRIPTION_B = 'subscription-of-b';

//register Component A
Observer.subscribe(SUBSCRIPTION_A, () => {
	console.log('Component A got triggered');
});

//register Component B
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