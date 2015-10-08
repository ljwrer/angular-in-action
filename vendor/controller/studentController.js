var structModule=angular.module('struct',[]);
structModule.controller('StudentListController',function($scope){
	var students=[
		{
			name:"Marry Contrary",
			id:"1"
		},
		{
			name:"Jack Sprat",
			id:"2"
		},
		{
			name:"Jill Hill",
			id:"3"
		}
	];
	$scope.students=students;
});
structModule.controller('AlbumController',function($scope){
	var albums=[
		{
			name:"与风共舞的心情",
			duration:"2:34"
		},
		{
			name:"星之所在",
			duration:"3:24"
		},
		{
			name:"银之意志",
			duration:"5:28"
		}
	];
	$scope.albums=albums;
});
structModule.controller('ShowHiddenController',function($scope){
	var meunState={};
	$scope.meunState=meunState;
	$scope.meunState.show=false;
	$scope.toggle=function(){
		$scope.meunState.show=!$scope.meunState.show;
	}
})