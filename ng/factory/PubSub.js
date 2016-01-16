'use strict';

function PubSub() {
}

PubSub.prototype = {
  subscribers: {},

  publish: function (event, data) {
    if (!this.subscribers[event])
      return;
    this.subscribers[event].forEach(function (subscriber) {
      subscriber(data);
    });
  },

  subscribe: function (event, callback) {
    if (!this.subscribers[event])
      this.subscribers[event] = [];
    this.subscribers[event].push(callback);
  }
};
