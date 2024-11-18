import { createStore } from 'vuex';
import dashboard from './dashboard';

// const allModules = window.config.modules;
var allModulesStores = {};
// allModules.forEach((allModule) => {
// 	if (allModule) {
// 		const moduleStore = require(`../../../../Modules/${allModule}/Resources/assets/js/store/index`).default;

// 		allModulesStores = { ...allModulesStores, ...moduleStore };
// 	}
// });

export default createStore({
	modules: {
		dashboard,
		...allModulesStores
	}
})