//   Copyright 2012 Patrick Wang <kk1fff@patrickz.net>
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

var until = require('./lib/main.js'),
    events = require('events');

add_test(function test_single_success(tester) {
  var waitings = new until.Waitings();
  var emitter = new events.EventEmitter();
  waitings.add(emitter, 'event1', 'event2');
  waitings.on('ok', function(list) {
    tester.is(list.length, 1);
    tester.is(list[0].emitter, emitter);
    tester.next();
  });
  emitter.emit('event1');
});

add_test(function test_single_fail(tester) {
  var waitings = new until.Waitings();
  var emitter = new events.EventEmitter();
  waitings.add(emitter, 'event1', 'event2');
  waitings.on('error', function(list) {
    console.log('got event: ' + JSON.stringify(list));
    tester.next();
  });
  emitter.emit('event2', new Error('testerr'));
});

add_test(function test_multiple_success
