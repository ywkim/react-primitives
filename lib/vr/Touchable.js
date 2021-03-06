var _jsxFileName='src/vr/Touchable.js';var React=require('react');
var createReactClass=require('create-react-class');
var PropTypes=require('prop-types');var _require=
require('react-vr'),VrButton=_require.VrButton;

var InsetPropType=PropTypes.shape({
top:PropTypes.number,
left:PropTypes.number,
bottom:PropTypes.number,
right:PropTypes.number});





var THROTTLE_MS=500;

function throttle(fn,throttleMs){
var lastCall=null;

return function(){
var now=new Date();
if(lastCall===null||now-lastCall>throttleMs){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
fn.apply(this,args);
lastCall=new Date();
}
};
}






















var Touchable=function Touchable(
Animated,
StyleSheet,
Platform,
TouchableMixin)
{

return createReactClass({
displayName:'Touchable',
propTypes:{
accessible:PropTypes.bool,










disabled:PropTypes.bool,




onPress:PropTypes.func,
onPressIn:PropTypes.func,
onPressOut:PropTypes.func,





onLayout:PropTypes.func,

onLongPress:PropTypes.func,




delayPressIn:PropTypes.number,



delayPressOut:PropTypes.number,



delayLongPress:PropTypes.number,







pressRetentionOffset:InsetPropType,








hitSlop:InsetPropType,
activeValue:PropTypes.number,
press:PropTypes.instanceOf(Animated.Value),

pressDuration:PropTypes.number,
children:PropTypes.node},


mixins:[],

statics:{
Mixin:TouchableMixin},


getDefaultProps:function getDefaultProps(){
return{
activeValue:1,
delayPressIn:0,
delayPressOut:100,
delayLongPress:500,
pressDuration:150,
pressRetentionOffset:{
top:20,
left:20,
right:20,
bottom:30},

press:new Animated.Value(0)};

},

setPressValue:function setPressValue(toValue){
Animated.timing(
this.props.press,
{
toValue:toValue,
duration:this.props.pressDuration}).


start();
},


touchableHandleActivePressIn:throttle(function(e){
this._setActive(150);

this.props.onPressIn&&this.props.onPressIn(e);
},THROTTLE_MS),

touchableHandleActivePressOut:throttle(function(e){
this._setInactive(250);

this.props.onPressOut&&this.props.onPressOut(e);
},THROTTLE_MS),

touchableHandlePress:throttle(function(e){

this.props.onPress&&this.props.onPress(e);
},THROTTLE_MS),

touchableHandleLongPress:throttle(function(e){

this.props.onLongPress&&this.props.onLongPress(e);
},THROTTLE_MS),

_setActive:function _setActive(duration){
this.setPressValue(1,duration);
},

_setInactive:function _setInactive(duration){
this.setPressValue(0,duration);
},

render:function render(){
var child=this.props.children;
return(
React.createElement(VrButton,{
accessible:this.props.accessible,
disabled:this.props.disabled,
onLayout:this.props.onLayout,
onButtonPress:this.touchableHandleActivePressIn,
onButtonRelease:this.touchableHandleActivePressOut,
onClick:this.touchableHandlePress,
onLongClick:this.touchableHandleLongPress,__source:{fileName:_jsxFileName,lineNumber:193}},

child));


}});

};

module.exports=Touchable;