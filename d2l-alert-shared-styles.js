import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
	<style is="custom-style">
		html {
			--d2l-alert-critical-color: var(--d2l-color-feedback-error);
			--d2l-alert-warning-color: var(--d2l-color-feedback-warning);
			--d2l-alert-default-color: var(--d2l-color-celestine-plus-1);
			--d2l-alert-success-color: var(--d2l-color-feedback-success);
		}
	</style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
