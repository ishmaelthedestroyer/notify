Notify
======

Push notifications for AngularJs apps using Twitter Bootstrap 3.x.x. 

###Setup

Simple setup. First, copy this HTML onto your UI.

<pre>
&#60;div class='notification-container ng-cloak'&#62;
    &#60;div ng-repeat="notification in notifications" class="alert alert-dismissable alert-{{notification.type}}"&#62;
        {{notification.message}}
    &#60;/div&#62;
&#60;/div&#62;
</pre>

Next, sync a variable in a controller with Notify's notifications using `Notify.list()`. Make sure you expose it to the controller's $scope, like so. (Coffeescript)

<pre>
app.controller 'MyCTRL', [ '$scope', 'Notify', ($scope, Notify) ->
	$scope.notifications = Notify.list()
]
</pre>

Now push notifications are as easy as `Notify.push 'This is a notification!'`

###Usage

Notify exposes 5 functions. 
- `Notify.push(message, type, timeout)` - Add notifications to the view. The `message` parameter is required and is the mesage you want to display. The `type` parameter is the type (color) of the notification you want to display. It accepts `success`, `info`, `warning`, and `danger`. Defaults to `success`. The `timeout` parameter is also optional. If set, it removes the notification after x milliseconds. `Notify.push()` returns a nofication that can be removed using `Notify.remove(notif)`

- `Notify.remove()` removes a notification. It accepts either a notification returned from the `Notify.push()` function or the index of the nofication you want to remove.

- `Notify.list()` returns all notifications.

- `Notify.clear()` removes all notifications.

- `Notify.setScope()` accepts a scope as a parameter. It defaults to $rootScope. To learn more about `scopes`, `digest` and such, refer to the <a href='http://docs.angularjs.org/guide/scope'>AngularJS documentation.</a>


###Notes
Developed by <a href='http://twitter.com/ishmaelsalive'>Ishmael</a>. <br />

Feedback, suggestions? Tweet me <a href='http://twitter.com/ishmaelsalive'>@IshmaelsAlive</a>. <br />
Need some personal help? Email me @ <a href='mailto:ishmaelthedestroyer@gmail.com?Subject=LazyNMean'>ishmaelthedestroyer@gmail.com</a>