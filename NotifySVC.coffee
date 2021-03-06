define [
  'app'
], (app) ->
  app.service 'Notify', [
    '$rootScope', '$timeout', ($rootScope, $timeout) ->
      notifications = []
      scope = $rootScope

      apply = (scope, fn) ->
        if scope.$$phase or scope.$root.$$phase
          fn()
        else
          scope.$apply fn

      remove = (notif) ->
        apply scope, ->
          if !isNaN notif
            for n, i in notifications when n is notif
              return notifications.splice i, 1
          else notifications.splice notif, 1

      # return methods
      setScope: (s) -> scope = s
      list: () -> return notifications
      remove: (notif) -> if notif then remove notif else apply scope, -> notifications = []
      push: (message, type, timeout) ->
        if !type? then type = 'success'

        notif =
          message: message
          type: type

        apply scope, ->
          notifications.unshift notif
          notifications.pop() if notifications.length > 10

        if timeout
          $timeout ->
            remove n for n in notifications when n is notif
          , timeout

        return notif
      clear: () ->
        apply scope, ->
          notifications = []
  ]