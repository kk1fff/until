# until

__unitl__ is a very simple helper object that helps on waiting multiple
__EventEmitter__. It is an EventEmitter itselt, and it waits for all the
__EventEmitter__ firing success events, or one of them firing failure event.

The APIs are

    var waitings = new require('until').Waitings();
    waitings.add(EventEmitter      e,
                 Array or String   success events,
                 Array or String   fail events,
                 Array or String   notification events)

An example:

    var waitings = new until.Waitings();
    waitings.add(emitter,         // The emitter object
                 ['ok', 'done'],  // A list of event names that stand for success.
                 ['bad', 'fail'], // A list of event names that stand for failure.
                 ['progress']);   // A list of event names will continuously send.

## Event: 'ok'

TODO

## Event: 'error'

TODO

## Event: 'notice'

TODO

  
