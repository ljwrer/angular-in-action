var structModule = angular.module('struct', []);
structModule.controller('StudentListController', function ($scope) {
	var students = [
		{
			name: "Marry Contrary",
			id: "1"
		},
		{
			name: "Jack Sprat",
			id: "2"
		},
		{
			name: "Jill Hill",
			id: "3"
		}
	];
	$scope.students = students;
});
structModule.controller('AlbumController', function ($scope) {
	var albums = [
		{
			name: "与风共舞的心情",
			duration: "2:34"
		},
		{
			name: "星之所在",
			duration: "3:24"
		},
		{
			name: "银之意志",
			duration: "5:28"
		}
	];
	$scope.albums = albums;
});
structModule.controller('ShowHiddenController', function ($scope) {
	var meunState = {};
	$scope.meunState = meunState;
	$scope.meunState.show = false;
	$scope.toggle = function () {
		$scope.meunState.show = !$scope.meunState.show;
	}
})
structModule.controller('StyleController',function($scope){
	$scope.isDisabled=false;
	$scope.disable=function(){
		$scope.isDisabled=true;
	}
	$scope.isError=false;
	$scope.isWarning=false;
	$scope.messageText="message";
	$scope.showError=function(){
		$scope.messageText="Error";
		$scope.isError=true;
		$scope.isWarning=false;
	};
	$scope.showWarning=function(){
		$scope.messageText="Warning";
		$scope.isError=false;
		$scope.isWarning=true;
	}
	$scope.heroList=[
		{
			name:"艾丝蒂尔",
			country:"利贝尔"
		},
		{
			name:"凯文",
			country:"亚利菲尔特"
		},
		{
			name:"罗伊德",
			country:"克洛斯贝尔"
		}
	];
	$scope.select=function(index){
		$scope.slectedRow=index;
	};
	$scope.haha="message big"
})