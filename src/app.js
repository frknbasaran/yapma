(function () {
  var forbiddenAreas = ["www.facebook.com", "facebook.com", "twitter.com", "tweetdeck.twitter.com", "instagram.com", "eksisozluk.com", "github.com"];
  var timer = 0;

  var checkLocation = function (callback) {
    var currentLocation = window.location.hostname;
    var isForbidden = false;

    forbiddenAreas.forEach(function (val, key) {
      isForbidden = (isForbidden) ? isForbidden : (currentLocation == forbiddenAreas[key]) ? true : false;
    });

    callback(isForbidden);
  };

  var notify = function (messageText) {
    var options = {
      icon: "https://raw.githubusercontent.com/frknbasaran/yapma/master/assert/128-icon.png"
    };
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check if the user is okay to get some notification
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(messageText, options);
    }

    // Otherwise, we need to ask the user for permission
    // Note, Chrome does not implement the permission static property
    // So we have to check for NOT 'denied' instead of 'default'
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {

        // Whatever the user answers, we make sure we store the information
        if (!('permission' in Notification)) {
          Notification.permission = permission;
        }

        // If the user is okay, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(messageText, options);
        }
      });
    }

    // At last, if the user already denied any notification, and you
    // want to be respectful there is no need to bother him any more.

    return notification;
  };

  var hideNot=function(notf){
    setTimeout(function(){
      notf.close()
    },3000)
  };

  // Hides the notification popup after 3 mins, so it prevents piling 
  // up of the popup windows.

  checkLocation(function (is) {
    if (is) {
      setInterval(function () {
        var n;
        timer++;
        if (timer == 300) {
          n=notify("5 dakikadır zaman katlediyorsun");
        } else if (timer == 420) {
          n=notify("7 dakika oldu, son 3 dakikan var");
        } else if (timer == 540) {
          n=notify("günah benden gidiyor");
        } else if (timer == 600) {
          window.location.href = "http://img-9gag-fun.9cache.com/photo/aGRAzVZ_460sv.mp4";
        }
        hideNot(n);
      }, 1000);
    }
  });

  

})();


