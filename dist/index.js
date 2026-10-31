"use strict";var q=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var N=q(function(x,o){
var i=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-abs2/dist'),f=require('@stdlib/math-base-special-ln/dist'),I=require('@stdlib/constants-float64-ninf/dist'),_=require('@stdlib/constants-float64-ln-two-pi/dist');function d(n,r,e){var u,t;return i(n)||i(r)||i(e)||e<=0?NaN:n<=0?I:(u=f(n),t=-.5*_-f(e),t-u-.5*y((u-r)/e))}o.exports=d
});var l=q(function(R,s){
var F=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-abs2/dist'),c=require('@stdlib/math-base-special-ln/dist'),b=require('@stdlib/constants-float64-ninf/dist'),A=require('@stdlib/constants-float64-ln-two-pi/dist');function L(n,r){var e;if(v(n)||v(r)||r<=0)return F(NaN);return e=-.5*A-c(r),u;function u(t){var a;return v(t)?NaN:t<=0?b:(a=c(t),e-a-.5*O((a-n)/r))}}s.exports=L
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=N(),T=l();P(p,"factory",T);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
