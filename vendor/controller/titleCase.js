/**
 * Created by Rmaiy on 2015/10/10.
 */
var homeModule=angular.module('home',[]);
homeModule.filter('titleCase', function () {
    var titlecase= function (input) {
        var words=input.split(" ");
        words.forEach(function (item,index,array) {
            array[index]=item.charAt(0).toUpperCase()+item.slice(1);
            console.log(item)
        })
        return words.join(" ");
    }
    return titlecase;
})
homeModule.controller('HomeWord',function($scope){
    $scope.hello="happy birthday to you!";
})