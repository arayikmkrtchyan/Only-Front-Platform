"use strict";

function Connector($http) {
}

Connector.prototype = Object.create(PubSub.prototype);
Connector.prototype.constructor = Connector;

Connector.prototype.req = {
  method: "POST",
  url: "/"
};

Connector.prototype.serviceName = "";

Connector.prototype.subscribeToSuccess = function (event, callback) {
  this.subscribe(event + ".success", callback);
};

Connector.prototype.subscribeToFail = function (event, callback) {
  this.subscribe(event + ".fail", callback);
};

Connector.prototype.send = function (request) {
  var eventName, params, promise;
  params = angular.merge(angular.copy(this.req), request);
  eventName = params.eventName || params.url;
  params.url = "rest/" + this.serviceName + "/" + params.url + ".json";

  promise = this.$http(params);

  (function (promise, that) {
    promise.then(
      function (response) {
        that.publish(eventName, {type: "success", data: response.data, response: response});
        that.publish(eventName+ ".success", response.data);
      },

      function (error) {
        that.publish(eventName, {type: "fail", error: error});
        that.publish(eventName + ".fail", error);
      }
    );
  }(promise, this));

  return promise;
};


