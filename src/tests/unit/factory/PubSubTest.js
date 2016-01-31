describe("PubSub", function() {

  it("test with subscribe and publish", function() {
    // Test data
    var pubSub = new PubSub();
    var counter = 0;
    var eventName = 'some-event';
    var data = {};
    // Run test
    pubSub.subscribe(eventName, function(eventData) {
      expect(eventData).toEqual(data);
      ++counter;
    });
    var resTrue = pubSub.publish(eventName, data);
    var resFalse = pubSub.publish('otherEvent', {});
    expect(resTrue).toBe(true);
    expect(resFalse).toBe(false);
    expect(counter).toEqual(1);
  });

  it("test with many subscribe", function() {
    // Test data
    var pubSub = new PubSub();
    var counter = 0;
    var eventName = 'some-event';
    // Run test
    pubSub.subscribe(eventName, function() {
      ++counter;
    });
    pubSub.subscribe(eventName, function() {
      ++counter;
    });
    pubSub.subscribe(eventName, function() {
      ++counter;
    });
    pubSub.publish(eventName, {});
    expect(counter).toEqual(3);
  });

  it("test inherited object with subscribe and publish", function() {
    // Test data
    function SomeObject($http) {
    }

    SomeObject.prototype = Object.create(PubSub.prototype);
    SomeObject.prototype.constructor = SomeObject;
    var someObject = new SomeObject();
    var counter = 0;
    var eventName = 'some-event';
    var data = {};
    // Run test
    someObject.subscribe(eventName, function(eventData) {
      expect(eventData).toEqual(data);
      ++counter;
    });
    var resTrue = someObject.publish(eventName, data);
    var resFalse = someObject.publish('otherEvent', {});
    expect(resTrue).toBe(true);
    expect(resFalse).toBe(false);
    expect(counter).toEqual(1);
  });

  it("test inherited object with many subscribe", function() {
    // Test data
    function SomeObject($http) {
    }

    SomeObject.prototype = Object.create(PubSub.prototype);
    SomeObject.prototype.constructor = SomeObject;
    var someObject = new SomeObject();
    var counter = 0;
    var eventName = 'some-event';
    // Run test
    someObject.subscribe(eventName, function() {
      ++counter;
    });
    someObject.subscribe(eventName, function() {
      ++counter;
    });
    someObject.subscribe(eventName, function() {
      ++counter;
    });
    someObject.publish(eventName, {});
    expect(counter).toEqual(3);
  });

});
