angular.module('app.controllers', [])

	.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

		$scope.toggle = function() {
			$('#help-list').toggle()
		}

	})

	.controller('SponsorshipCtrl', function($scope, $ionicModal, $timeout) {
		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/paypal.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.closePaypal = function() {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.paypal = function() {
			$scope.modal.show();
		};

	})

	.controller('CalendarCtrl', function($scope){
		ionic.Platform.ready(function(){
			$('#calendar').fullCalendar({
				googleCalendarApiKey: 'AIzaSyDWxFLiU_MMAq2RwAAVlp3o-xSsg6Iq1KE',
				events: {
					googleCalendarId: 'ndevt2o5ag5rkc9aobvtp9rmdc@group.calendar.google.com'
				},
				header: {
					left: 'prev,next',
					center: '',
					right: 'title'
				},
				allDayText: 'All Day',
				height: "auto",
				defaultView: "basicWeek"
				//aspectRatio: 1
			});
		});
	})

	.controller('IndexCtrl', function($scope, $ionicSlideBoxDelegate){
		var d = new Date();
		var day = d.getDay();
		var month = d.getMonth();
		var date = d.getDate();
		var year = d.getFullYear();
		var daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		document.getElementById("date").innerHTML = daysArray[day] + ", " + monthsArray[month] + " " + date + ", " + year;

		$scope.$on('$ionicView.enter', function(){
			$ionicSlideBoxDelegate.update();

			setSliderHeight();
		})

		$(window).on("resize",function(){
			setSliderHeight();
		})
	})

	.controller('FacebookCtrl', function($scope){
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=342374259303120";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		/*$('a').on('click', function(e) {
			e.preventDefault();
			window.open($(this).attr('href'), '_system');
			return false;
		});*/
	})

function setSliderHeight(){
	var above = $('.slider').offset().top;
	var windowHeight = $(window).innerHeight();
	$('.slider').height(windowHeight - above);
}
