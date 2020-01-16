# d2l-alert
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component for D2L alerts.

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

`d2l-alert` can be installed from through npm by referencing it in your package.json from Github:

```shell
"d2l-alert": "BrightspaceUI/alert#semver:^4"
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components):

```html
<head>
  <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
</head>
```

Then import the components below that you want to use.

### Alert
```html
<head>
  <script type="module">
	  import 'd2l-alert/d2l-alert.js';
  </script>
</head>
```

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-alert.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      d2l-alert {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-alert type="warning">
  A warning message.
</d2l-alert>
```

A `<d2l-alert>` custom element can now be used in your application by specifying one of the following types: `default`, `success`, `critical`, or `warning`.

```html
<d2l-alert type="default">A default message.</d2l-alert>
```

A close button can optionally be rendered by specifying the `has-close-button` attribute.

```html
<d2l-alert type="default" has-close-button>
  A default message.
</d2l-alert>
```

```javascript
alert.addEventListener('d2l-alert-closed', function() {
  console.log('alert dismissed/closed');
});
```

A custom action button can also be rendered if text is provided for the button.

```html
<d2l-alert type="default" button-text="Do it!">
  A default message.
</d2l-alert>
```

```javascript
alert.addEventListener('d2l-alert-button-pressed', function() {
  console.log('alert custom action!');
});
```

Subtext can be added underneath the main message heading, if more detail is required.

```html
<d2l-alert type="default" subtext="I'm here to provide additional information about the default message.">
  A default message.
</d2l-alert>
```

### Toast Alert
```html
<head>
  <script type="module">
    import 'd2l-alert/d2l-alert-toast.js';
  </script>
</head>
```

The toast alert is an alert that pops up at the bottom of the screen, and stays open for 2.5 seconds before closing. It has the same functionality as the regular alert, using most of the same attributes (e.g. type, subtext, etc.). In addition it has an `open` attribute, that you need to set whenever you want it to open:

```html
<d2l-alert-toast type="default" open>
  A default message.
</d2l-alert-toast>
```

It also has an `autoclose` attribute that defaults to on, which will trigger the toast to disappear after 2.5 seconds. To keep the toast on the screen indefinitely, turn off the `autoclose` attribute by setting it to 0:

```html
<d2l-alert-toast type="default" open autoclose="0">
  A default message.
</d2l-alert-toast>
```

Toast alerts default to having close buttons. As a result, if you don't want a close button, you'll need to set the `hide-close-button` attribute:

```html
<d2l-alert-toast type="default" open hide-close-button>
  A default message.
</d2l-alert-toast>
```

To support the ability for screen readers to read out toast messages, toast alerts have the `announce-text` attribute:

```html
<d2l-alert-toast type="default" open announce-text="Here is a toast">
  Here is a toast
</d2l-alert-toast>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To lint AND run local unit tests:

```shell
npm test
```

[ci-url]: https://travis-ci.com/BrightspaceUI/alert
[ci-image]: https://travis-ci.com/BrightspaceUI/alert.svg?branch=master

## Versioning & Releasing

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version and create a tag during the next build.
