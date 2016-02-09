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

Connector.prototype.send = function (request) {
  var name, params, promise;
  params = angular.merge(angular.copy(this.req), request);
  name = params.url;
  params.url = "rest/" + this.serviceName + "/" + name + ".json";

  promise = this.$http(params);

  (function (promise, that) {
    promise.then(
      function (response) {
        that.publish(name, {type: "success", data: response.data, response: response});
        that.publish(name + ".success", response.data);
      },

      function (error) {
        that.publish(name, {type: "fail", error: error});
        that.publish(name + ".fail", error);
      }
    );
  }(promise, this));

  return promise;
};


