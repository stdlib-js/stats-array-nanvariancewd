"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(w,n){
var o=require('@stdlib/assert-is-collection/dist'),v=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/array-dtypes/dist'),l=require('@stdlib/array-dtype/dist'),d=require('@stdlib/array-base-assert-contains/dist'),g=require('@stdlib/array-base-join/dist'),c=require('@stdlib/stats-strided-nanvariancewd/dist').ndarray,i=require('@stdlib/error-tools-fmtprodmsg/dist'),t=m("real_and_generic"),p="generic";function q(e){var r,a;if(!o(e))throw new TypeError(i('null2O',e));if(a=l(e)||p,!d(t,a))throw new TypeError(i('nullHZ',g(t,'", "'),a));if(arguments.length>1){if(r=arguments[1],!v(r))throw new TypeError(i('null4A',r))}else r=1;return c(e.length,r,e,1,0)}n.exports=q
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
