import angular from 'angular'
import demoBtn from "./components/demo/demo.component";

const angularModuleDevSkeleton = angular.module("angularModuleDevSkeleton", [])
angularModuleDevSkeleton.component('demoBtn',demoBtn);


export default angularModuleDevSkeleton.name;
