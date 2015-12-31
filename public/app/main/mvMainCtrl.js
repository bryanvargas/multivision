angular.module('app').controller('mvMainCtrl', function ($scope) {
    //$scope.myVar = "Hola fucking mundo desde angular";
    $scope.shingos = [
        {name: 'Lorem ipsum dolor sit amet', featured: true, published: new Date('1/1/2016')},
        {name: 'Laboriosam quaerat sapiente minima', featured: false, published: new Date('5/2/2016')},
        {name: 'Lorem ipsum dolor sit amet', featured: true, published: new Date('2/3/2016')},
        {name: 'Laboriosam quaerat sapiente minima', featured: true, published: new Date('1/6/2016')},
        {name: 'Lorem ipsum dolor sit amet', featured: true, published: new Date('12/11/2016')},
        {name: 'Laboriosam quaerat sapiente minima', featured: false, published: new Date('8/4/2016')},
        {name: 'Lorem ipsum dolor sit amet', featured: true, published: new Date('1/12/2016')},
        {name: 'Laboriosam quaerat sapiente minima', featured: false, published: new Date('9/9/2016')},
        {name: 'Lorem ipsum dolor sit amet', featured: true, published: new Date('19/10/2016')}

    ]
});
