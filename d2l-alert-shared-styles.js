import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
	<style is="custom-style">
		html {
			--d2l-alert-critical-color: var(--d2l-color-cinnabar);
			--d2l-alert-warning-color: var(--d2l-color-citrine);
			--d2l-alert-default-color: var(--d2l-color-celestine-plus-1);
			--d2l-alert-success-color: var(--d2l-color-olivine);
		}
	</style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
