<!doctype html>
<html>
<head>
    <title>Welcome to Grails</title>
    <asset:javascript src="application"/>
    <asset:javascript src="spring-websocket"/>

    <script type="text/javascript">
        $(function () {
            var socket = new SockJS("${createLink(uri: '/stomp')}");
            var client = Stomp.over(socket);

            client.connect({}, function () {
                client.subscribe("/topic/time", function (message) {
                    $("#timeDiv").append(message.body + "<br>");
                });
            });

            $("#time").click(function () {
                client.send("/app/time", {}, JSON.stringify("time"));
            });
        });
    </script>
</head>

<body>
<button id="time">get the time</button>

<div id="timeDiv"></div>
</body>
</html>