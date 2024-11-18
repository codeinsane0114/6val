import moment from 'moment';
import { API_URL, axiosapi} from '@/axios';

const CART_ITEMS = 'cart_items';
const AUTH_USER = 'front_auth_user';
const AUTH_TOKEN = 'front_auth_token';
const EXIPRES_KEY = 'front_expire_key';
const APP_SETTINGS_KEY = 'front_app_settings_key';
const ORDER_STATUS = 'order-status';
const ADMIN_WALLET = 'admin-wallet';

const getJSONFromLocalStorage = (key) => {
	const value = window.localStorage.getItem(key);

	if (value === 'undefined' || value === 'null' || value === undefined || value === null) {
		return null;
	}
	else {
		return JSON.parse(value);
	}
};

export default {
	namespaced: true,
	state() {
		return {
            orderStatus: getJSONFromLocalStorage(ORDER_STATUS) || ['iniData'],
            adminWalletData: getJSONFromLocalStorage(ADMIN_WALLET) || []
		}
	},

	mutations: {
		// updateApp(state, appSetting) {
		// 	state.appSetting = appSetting;
		// 	window.localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(appSetting));
		// },
		// updateUser(state, user) {
		// 	state.user = user;
		// 	window.localStorage.setItem(AUTH_USER, JSON.stringify(user));
		// },
		// updateToken(state, token) {
		// 	state.token = token;
		// 	window.localStorage.setItem(AUTH_TOKEN, token);

		// 	// Setting up auth bearer token to axios
		// 	axiosFront.defaults.headers.common["Authorization"] = `Bearer ${token}`
		// },
		// updateExpires(state, expires) {
		// 	state.expires = new Date(expires);
		// 	window.localStorage.setItem(EXIPRES_KEY, expires);
		// },
		addOrderStatusData(state, statusData) {
			state.orderStatus = statusData;
			window.localStorage.setItem(ORDER_STATUS, JSON.stringify(statusData));
		},
        addAdminWalletData(state, walleData) {
			state.adminWalletData = walleData;
			window.localStorage.setItem(ORDER_STATUS, JSON.stringify(walleData));
		}
	},

	actions: {
		getOrderStatusData(context) {
            
			axiosapi.post('/admin/dashboard/order-status')
				.then(function (response) {
					context.commit('addOrderStatusData', response.data);
				})
				.catch(function (error) {

				});
		},
        getAdminWalletData(context) {
            
			axiosapi.post('/admin/dashboard/order-status')
				.then(function (response) {
					context.commit('addAdminWalletData', response.data);
				})
				.catch(function (error) {

				});
		}
  }
}