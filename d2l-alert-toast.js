/**
`d2l-alert-toast`
Polymer-based web component for a D2L toast alert

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-alert.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { announce } from '@brightspace-ui/core/helpers/announce.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-alert-toast">
	<template strip-whitespace="">
		<style>

			:host {
				display: block;
			}

			:host .d2l-alert-toast-container {
				display: none;
			}

			:host([open]) .d2l-alert-toast-container {
				border-radius: 0.3rem;
				bottom: 1rem;
				box-shadow: 0 0.1rem 0.6rem 0 rgba(0,0,0,0.10);
				display: block;
				left: 0;
				margin: 0 auto;
				max-width: 710px;
				opacity: 0;
				position: fixed;
				right: 0;
				transition-duration: 250ms;
				transition-property: transform, opacity, visibility;
				transition-timing-function: ease-in;
				transform: translateY(0);
				visibility: hidden;
				width: 100%;
				z-index: 10000; /*This was based on one of the flash messages in the LMS ... if need be, adjust to be more appropriate*/
			}

			:host([open]) .d2l-alert-toast-container.d2l-alert-toast-container-opened {
				opacity: 1;
				transform: translateY(-0.5rem);
				visibility: visible;
			}

		</style>
		<div class="d2l-alert-toast-container" on-transitionend="_setClosedClass">
			<d2l-alert class="toast" type="[[type]]" button-text="[[buttonText]]" has-close-button="[[!hideCloseButton]]" subtext="[[subtext]]">
				<slot></slot>
			</d2l-alert>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-alert-toast',

	/**
	 * Fired when the custom action button is pressed.
	 *
	 * @event d2l-alert-button-pressed
	*/

	/**
	 * Fired when the alert is closed/hidden.
	 *
	 * @event d2l-alert-closed
	*/

	listeners: {
		'd2l-alert-closed': '_close'
	},

	properties: {

		/**
		 * Type of alert to display. Valid values are 'default', 'success', 'critical', and 'warning'.
		 * Values "call-to-action" and "error" have been deprecated.
		 *
		 * NOTE: Toast alerts should not be used with 'critical' or 'warning' colors.
		 */
		type: {
			type: String,
			value: 'default',
			reflectToAttribute: true
		},
		/**
		 * Text for a custom action button. If provided, a button will be rendered with the specified text.
		 */
		buttonText: {
			type: String,
			value: null
		},
		/**
		 * Whether to render a close button, allowing the user to hide the alert.
		 */
		hideCloseButton: {
			type: Boolean,
			value: false
		},
		/**
		 * Additional text that will go underneath the heading
		 */
		subtext: {
			type: String,
			value: null
		},
		/**
		 * Whether to open the toast alert (make visible) or not.
		 */
		open:{
			type: Boolean,
			value: false,
			reflectToAttribute: true,
			observer: '_changeOpen'
		},
		/**
		 * Whether to automatically close after 2.5 seconds or stay open
		 */
		autoclose:{
			type: Number,
			value: 1,
			observer: '_changeOpen'
		},
		/**
		 * Text that will be read by a screen reader when the toast is displayed
		 */
		announceText: {
			type: String,
			value: null,
			reflectToAttribute: true
		}
	},

	_changeOpen: function() {
		if (!this._toastContainer) {
			this._toastContainer = this.$$('div.d2l-alert-toast-container');
		}

		if (this.open) {
			requestAnimationFrame(function() {
				requestAnimationFrame(function() {
					this._toastContainer.classList.add('d2l-alert-toast-container-opened');
					announce(this.announceText);

					if (this.autoclose === 1) {
						//clear the setTimeout below that will close after 2.5 seconds if you closed the toast another way, and are re-opening (you'll want a fresh 2.5 seconds)
						if (this._setTimeoutId > -1) {
							clearTimeout(this._setTimeoutId);
						}

						this._setTimeoutId = setTimeout(function() {
							this._toastContainer.classList.remove('d2l-alert-toast-container-opened');
							this._setTimeoutId = -1;
						}.bind(this), 2500);
					}
				}.bind(this));
			}.bind(this));

		} else {
			this._toastContainer.classList.remove('d2l-alert-toast-container-opened');
		}
	},

	_close: function() {
		this.open = false;
		//this removes the hidden attribute from the alert element, which is necessary for it to be visible again if we want to open it
		var alertElement = this.$$('d2l-alert');
		if (alertElement && alertElement.hasAttribute('hidden')) {
			alertElement.removeAttribute('hidden');
		}
	},

	//make sure that the transition has ended before setting open property to false, because it sets display:none and stops the transition from happening
	//also, check for the event triggered by the end of visibility transition, as the toast will no longer be visible after this point
	_setClosedClass: function(event) {
		if (!this._toastContainer.classList.contains('d2l-alert-toast-container-opened') && event.propertyName === 'visibility') {
			this.open = false;
		}
	}
});
