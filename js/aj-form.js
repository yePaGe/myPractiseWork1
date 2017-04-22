angular.module('myApp', [])
    //创建一个控制器controller
    .controller('loginController',function($scope)
    {
        $scope.userData={};
        $scope.loginForm=function()
        {
            console.log($scope.userData);

        }
    })
    .directive('compare',function () {
       var o ={};
       o.strict='AE';
       o.scope={
           orgText:'=compare'
       };
       o.require='ngModel';
       o.link=function(sco,ele,att,con){
           con.$validators.compare=function(v){
               return v == sco.orgText;
           };
           sco.$watch('orgText',function () {
               con.$validate();
           })
        }
    });
