var API_BASE = "http://localhost:3000/api/";

$(function() {
   // Ensure .disabled aren't clickable
	$(".nav-tabs a[data-toggle=tab]").on("click", function(e) {
      var token = window.localStorage.getItem("sessionToken");
      if ($(this).hasClass("disabled") && !token) {
   	   e.preventDefault();
   	   return false;
      }
	});

   //Login functionality
   $("#signup").on("click",function() {
   		var username = $("#su_username").val();
   		var password = $("#su_password").val();
   		var user = {user:  {username: username, password: password }};
   		var signup = $.ajax({
   			type: "POST", 
   			url: API_BASE + "user", 
   			data: JSON.stringify(user), 
   			contentType: "application/json"
   		});
   		signup.done(function(data) {
   			if (data.sessionToken) {
               setAuthHeader(data.sessionToken);
   			}
   			// TODO: add logic to set user and auth token	
   			$("#signup-modal").modal("hide");
   			$(".disabled").removeClass("disabled");
   			$("#loginout").text("Logout");
   		})
   		.fail(function() {
   			$("#su_error").text("There was an issue with your username").show();
   		});
   });

   //Login functionality
   $("#login").on("click",function() {
   		var username = $("#li_username").val();
   		var password = $("#li_password").val();
   		var user = {user:  {username: username, password: password }};
   		var login = $.ajax({
   			type: "POST", 
   			url: API_BASE + "login", 
   			data: JSON.stringify(user), 
   			contentType: "application/json"
   		});
   		login.done(function(data) {
   			if (data.sessionToken) {
               setAuthHeader(data.sessionToken);
   			}
   			// TODO: add logic to set user and auth token	
   			$("#login-modal").modal("hide");
   			$(".disabled").removeClass("disabled");
   			$("#loginout").text("Logout");
   		})
   		.fail(function() {
   			$("#li_error").text("There was an issue with your username or password").show();
   		});
   });
   
});

function setAuthHeader(sessionToken) {
   window.localStorage.setItem("sessionToken", sessionToken);
   // Set the authorization header
   // This can be done on individual calls
   // here we showcase ajaxSetup as a global tool
   $.ajaxSetup({
      "headers": {
         "Authorization": sessionToken
      }
   });
}