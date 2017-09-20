# d2l-alert
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for alerts.

## Installation

`d2l-alert` can be installed from [Bower][bower-url]:
```shell
bower install d2l-alert
```

Type can be one of: `confirmation`, `call-to-action` (default), `error`, `warning`, or `reinforcement`.


## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the opener and content components as needed:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
</head>
```

### Alert

Alerts can be defined using `d2l-alert`.

```html
<link rel="import" href="../d2l-alert/d2l-alert.html">

<d2l-alert type='confirmation'>
    This is the alert message
</d2l-alert>
```

* `type` - call-to-action(default), confirmation, error, warning, or reinforcement

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-alert
[bower-image]: https://badge.fury.io/bo/d2l-alert.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/alert
[ci-image]: https://travis-ci.org/BrightspaceUI/alert.svg?branch=master
