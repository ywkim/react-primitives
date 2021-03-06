var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var ReactPrimitives=require('../ReactPrimitives');var _require=










require('react-native-web'),Animated=_require.Animated,StyleSheet=_require.StyleSheet,View=_require.View,Text=_require.Text,Image=_require.Image,Platform=_require.Platform,Touchable=_require.Touchable,Dimensions=_require.Dimensions,Easing=_require.Easing;
var StyleRegistry=require('react-native-web/dist/apis/StyleSheet/registry');

var emptyObject={};

var resolve=function resolve(style){
return StyleRegistry.resolve(style)||emptyObject;
};

ReactPrimitives.inject({
View:View,
Text:Text,
Image:Image,
Easing:Easing,
Animated:Animated,
StyleSheet:_extends({},
StyleSheet,{
resolve:resolve}),

Platform:{
OS:Platform.OS,
Version:Platform.Version},

Dimensions:Dimensions});


ReactPrimitives.inject({
Touchable:require('../modules/Touchable')(
Animated,
StyleSheet,
ReactPrimitives.Platform,
Touchable.Mixin)});