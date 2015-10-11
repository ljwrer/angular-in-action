/**
 * Created by Rmaiy on 2015/10/10.
 */
var shoppingModule = angular.module('Shopping', []);
shoppingModule.factory('Items', function () {
    var items = {};
    items.query = function () {
        return [
            {
                title: 'ED3',
                description: '白发魔女',
                price: '59'
            },
            {
                title:'ED4',
                description:'朱红之泪',
                price:'69'
            },
            {
                title:'ED5',
                description:'海之槛歌',
                price:'79'
            },
        ]
    }
    return items;
})
shoppingModule.controller('ShoppingController', function ($scope,Items) {
    var items=Items.query();
    $scope.items=items;
})
