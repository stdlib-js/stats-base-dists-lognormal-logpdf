"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=c(function(k,N){
var v=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-pow/dist'),o=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist'),w=require('@stdlib/constants-float64-pi/dist');function A(e,r,a){var t,u,n;return v(e)||v(r)||v(a)||a<=0?NaN:e<=0?F:(t=s(a,2),u=-.5*o(2*t*w),n=-1/(2*t),u-o(e)+n*s(o(e)-r,2))}N.exports=A
});var I=c(function(z,y){
var B=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/math-base-special-ln/dist'),P=require('@stdlib/constants-float64-ninf/dist'),O=require('@stdlib/constants-float64-pi/dist');function R(e,r){var a,t,u;if(q(e)||q(r)||r<=0)return B(NaN);return a=l(r,2),t=-.5*f(2*a*O),u=-1/(2*a),n;function n(i){return q(i)?NaN:i<=0?P:t-f(i)+u*l(f(i)-e,2)}}y.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=p(),h=I();b(d,"factory",h);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
