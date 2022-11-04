// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.0.8-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function d(t,m,d){var o,a;return s(t)||s(m)||s(d)||d<=0?NaN:t<=0?i:(a=-1/(2*(o=n(d,2))),-.5*e(2*o*r)-e(t)+a*n(e(t)-m,2))}function o(t,d){var o,a,l;return s(t)||s(d)||d<=0?m(NaN):(o=n(d,2),a=-.5*e(2*o*r),l=-1/(2*o),function(r){if(s(r))return NaN;if(r<=0)return i;return a-e(r)+l*n(e(r)-t,2)})}t(d,"factory",o);export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
