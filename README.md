<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Evaluate the natural logarithm of the probability density function (PDF) for a [lognormal][lognormal-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [lognormal][lognormal-distribution] random variable is

<!-- <equation class="equation" label="eq:pdf" align="center" raw="f(x;\mu,\sigma) = \frac{1}{x\sqrt{2\pi\sigma^2}} e^{-\frac{\left(\ln x-\mu\right)^2}{2\sigma^2}}" alt="Probability density function (PDF) for a lognormal distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\mu,\sigma) = \frac{1}{x\sqrt{2\pi\sigma^2}} e^{-\frac{\left(\ln x-\mu\right)^2}{2\sigma^2}}" data-equation="eq:pdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/lognormal/logpdf/docs/img/equation_pdf.svg" alt="Probability density function (PDF) for a lognormal distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `sigma > 0` is the scale parameter. According to the definition, the _natural logarithm_ of a random variable from a
[lognormal distribution][lognormal-distribution] follows a [normal distribution][normal-distribution].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-lognormal-logpdf
```

</section>

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats-base-dists-lognormal-logpdf' );
```

#### logpdf( x, mu, sigma )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns ~-1.852

y = logpdf( 1.0, 0.0, 1.0 );
// returns ~-0.919

y = logpdf( 1.0, 3.0, 1.0 );
// returns ~-5.419
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logpdf.factory( mu, sigma )

Returns a function for evaluating the natural logarithm of the [probability density function][pdf] (PDF) of a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 4.0, 2.0 );
var y = mylogpdf( 10.0 );
// returns ~-4.275

y = mylogpdf( 2.0 );
// returns ~-3.672
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var logpdf = require( '@stdlib/stats-base-dists-lognormal-logpdf' );

var sigma;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = (randu() * 10.0) - 5.0;
    sigma = randu() * 20.0;
    y = logpdf( x, mu, sigma );
    console.log( 'x: %d, µ: %d, σ: %d, ln(f(x;µ,σ)): %d', x.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-lognormal-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-lognormal-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-lognormal-logpdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-lognormal-logpdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-lognormal-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-lognormal-logpdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-lognormal-logpdf
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-lognormal-logpdf/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-lognormal-logpdf/main/LICENSE

[lognormal-distribution]: https://en.wikipedia.org/wiki/Lognormal_distribution

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->