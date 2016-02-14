describe("Factory", function () {

  describe("Testing 'Connector'", function () {

    it("test 'subscribeToSuccess", function () {
      // Test data
      var connector = new Connector();
      var callBackFunction = function () {};
      // Spy
      spyOn(connector, "subscribe");
      // Run test
      connector.subscribeToSuccess("some-event-name", callBackFunction);
      // Expectation
      expect(connector.subscribe).toHaveBeenCalledWith("some-event-name.success", callBackFunction);
    });

    it("test 'subscribeToFail", function () {
      // Test data
      var connector = new Connector();
      var callBackFunction = function () {};
      // Spy
      spyOn(connector, "subscribe");
      // Run test
      connector.subscribeToFail("some-event-name", callBackFunction);
      // Expectation
      expect(connector.subscribe).toHaveBeenCalledWith("some-event-name.fail", callBackFunction);
    });

  });

});
