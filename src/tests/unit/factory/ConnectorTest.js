describe("Factory", function () {

  describe("Testing 'Connector'", function () {

    it("test 'subscribeOnSuccess", function () {
      // Test data
      var connector = new Connector();
      var callBackFunction = function () {};
      // Spy
      spyOn(connector, "subscribe");
      // Run test
      connector.subscribeOnSuccess("some-event-name", callBackFunction);
      // Expectation
      expect(connector.subscribe).toHaveBeenCalledWith("some-event-name.success", callBackFunction);
    });

    it("test 'subscribeOnFail", function () {
      // Test data
      var connector = new Connector();
      var callBackFunction = function () {};
      // Spy
      spyOn(connector, "subscribe");
      // Run test
      connector.subscribeOnFail("some-event-name", callBackFunction);
      // Expectation
      expect(connector.subscribe).toHaveBeenCalledWith("some-event-name.fail", callBackFunction);
    });

  });

});
