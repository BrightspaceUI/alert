# d2l-alert
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/alert)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component for D2L alerts.

![screenshot of text input component](/alert.gif?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-alert` can be installed from [Bower][bower-url]:

```shell
bower install d2l-alert
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-alert.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-alert/d2l-alert.html">
</head>
```

A `<d2l-alert>` custom element can now be used in your application by specifying one of the following types: `call-to-action`, `success`, `error`, or `warning`.

```html
<d2l-alert type="call-to-action">A call-to-action message.</d2l-alert>
```

A close button can optionally be rendered by specifying the `has-close-button` attribute.

```html
<d2l-alert type="call-to-action" has-close-button>
	A call-to-action message.
</d2l-alert>
```

```javascript
alert.addEventListener('d2l-alert-closed', function() {
	console.log('alert dismissed/closed');
});
```

A custom action button can also be rendered if text is provided for the button.

```html
<d2l-alert type="call-to-action" button-text="Do it!">
	A call-to-action message.
</d2l-alert>
```

```javascript
alert.addEventListener('d2l-alert-button-pressed', function() {
	console.log('alert custom action!');
});
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-alert
[bower-image]: https://badge.fury.io/bo/d2l-alert.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/alert
[ci-image]: https://travis-ci.org/BrightspaceUI/alert.svg?branch=master
