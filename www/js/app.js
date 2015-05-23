// angular.module is a global place for creating, registering and retrieving Angular modules
var htci = angular.module('app', ['ionic', 'app.controllers', 'ngSanitize'])

htci.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

htci.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "templates/main/app-menu.html",
			controller: 'AppCtrl'
		})

		.state('kumbhabhishekam', {
			url: "/kumbhabhishekam",
			abstract: true,
			templateUrl: "templates/kumb/kumbhabhishekam-menu.html"
		})

		.state('kumbhabhishekam.index', {
			url: "/index",
			views: {
				'menuContent': {
					templateUrl: "templates/main/donation.html" //change this
				}
			}
		})

		.state('kumbhabhishekam.events', {
            url: "/events",
            views: {
				'menuContent': {
					templateUrl: "templates/kumb/events.html",
					controller: 'EventsCtrl'
				}
            }
        })

        .state('kumbhabhishekam.single', {
			url: "/events/:eventId",
			views: {
				'menuContent': {
					templateUrl: "templates/kumb/event.html",
					controller: 'EventCtrl'
				}
			}
        })

        .state('kumbhabhishekam.parking', {
			url: "/parking",
			views: {
				'menuContent': {
					templateUrl: "templates/kumb/parking.html"
				}
			}
        })

		.state('app.index', {
			url: "/index",
			views: {
				'menuContent': {
					templateUrl: "templates/main/index.html",
					controller: "IndexCtrl"
				}
			}
		})

		.state('app.info', {
			url: "/info",
			views: {
				'menuContent': {
					templateUrl: "templates/main/info.html"
				}
			}
		})

		.state('app.calendar', {
			url: "/calendar",
			views: {
				'menuContent': {
					templateUrl: "templates/main/calendar.html",
					controller: "CalendarCtrl"
				}
			}
		})

		.state('app.social-media', {
			url: "/social-media",
			views: {
				'menuContent': {
					templateUrl: "templates/main/social-media.html",
					controller: "FacebookCtrl"
				}
			}
		})

		.state('app.sponsorship', {
			url: "/sponsorship",
			views: {
				'menuContent': {
					templateUrl: "templates/main/sponsorship.html",
					controller: "SponsorshipCtrl"
				}
			}
		})

		.state('app.donation', {
			url: "/donation",
			views: {
				'menuContent': {
					templateUrl: "templates/main/donation.html"
				}
			}
		})

		.state('app.volunteer', {
			url: "/volunteer",
			views: {
				'menuContent': {
					templateUrl: "templates/main/volunteer.html",
					controller: "VolunteerCtrl"
				}
			}
		})

		.state('app.qr', {
			url: "/qr",
			views: {
				'menuContent': {
					templateUrl: "templates/main/qr.html",
					controller: "QRCtrl"
				}
			}
		})

		.state('app.contact', {
			url: "/contact",
			views: {
				'menuContent': {
					templateUrl: "templates/main/contact.html",
					controller: "ContactCtrl"
				}
			}
		})

		.state('app.balagokulam', {
			url: "/balagokulam",
			views: {
				'menuContent': {
					templateUrl: "templates/main/balagokulam.html"
				}
			}
		})

		.state('app.browse', {
			url: "/browse",
			views: {
				'menuContent': {
					templateUrl: "http://htci.org"
				}
			}
		})

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/index');
});
