'use strict';

function PubSub() {
}

PubSub.prototype = {
  subscribers: {},

  publish: function (event, data) {
    if (!this.subscribers[event])
      return false;
    this.subscribers[event].forEach(function (subscriber) {
      subscriber(data);
    });
    return true;
  },

  subscribe: function (event, callback) {
    if (!this.subscribers[event])
      this.subscribers[event] = [];
    this.subscribers[event].push(callback);
  }
};
