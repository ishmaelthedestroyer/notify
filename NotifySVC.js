// Generated by CoffeeScript 1.4.0
(function() {

  define(['app'], function(app) {
    return app.service('Notify', [
      '$timeout', function($timeout) {
        var apply, notifications, remove, scope;
        notifications = [];
        scope = null;
        apply = function(scope, fn) {
          if (scope.$$phase || scope.$root.$$phase) {
            return fn();
          } else {
            return scope.$apply(fn);
          }
        };
        remove = function(notif) {
          return apply(scope, function() {
            var i, n, _i, _len;
            if (!isNaN(notif)) {
              for (i = _i = 0, _len = notifications.length; _i < _len; i = ++_i) {
                n = notifications[i];
                if (n === notif) {
                  return notifications.splice(i, 1);
                }
              }
            } else {
              return notifications.splice(notif, 1);
            }
          });
        };
        return {
          setScope: function(s) {
            return scope = s;
          },
          list: function() {
            return notifications;
          },
          remove: function(notif) {
            if (notif) {
              return remove(notif);
            } else {
              return apply(scope, function() {
                return notifications = [];
              });
            }
          },
          push: function(message, type, timeout) {
            var notif;
            if (!(type != null)) {
              type = 'success';
            }
            notif = {
              message: message,
              type: type
            };
            apply(scope, function() {
              notifications.unshift(notif);
              if (notifications.length > 10) {
                return notifications.pop();
              }
            });
            if (timeout) {
              $timeout(function() {
                var n, _i, _len, _results;
                _results = [];
                for (_i = 0, _len = notifications.length; _i < _len; _i++) {
                  n = notifications[_i];
                  if (n === notif) {
                    _results.push(remove(n));
                  }
                }
                return _results;
              }, timeout);
            }
            return notif;
          }
        };
      }
    ]);
  });

}).call(this);
