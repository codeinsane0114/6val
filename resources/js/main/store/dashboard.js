import moment from 'moment';
import { API_URL, axiosapi} from '@/axios';

const ORDER_STATUS = 'order-status';
const ADMIN_WALLET = 'admin-wallet';
const ORDER_STATICS = 'order-statics';

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
            adminWalletData: getJSONFromLocalStorage(ADMIN_WALLET) || ['initData'],
			orderStatics: getJSONFromLocalStorage(ORDER_STATICS) || ['initData']
		}
	},

	mutations: {
		addOrderStatusData(state, statusData) {
			state.orderStatus = statusData;
			window.localStorage.setItem(ORDER_STATUS, JSON.stringify(statusData));
		},
        addAdminWalletData(state, walleData) {
			state.adminWalletData = walleData;
			window.localStorage.setItem(ADMIN_WALLET, JSON.stringify(walleData));
		},
		addOrderStaticsData(state, orderStaticsData) {
			state.orderStatics = orderStaticsData;
			window.localStorage.setItem(ORDER_STATICS, JSON.stringify(orderStaticsData));
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
            
			axiosapi.get(`/admin/dashboard/spa/`)
				.then(function (response) {
					console.log("responseAdminWallet",response.data);
					context.commit('addAdminWalletData', response.data);
				})
				.catch(function (error) {

				});
		},
		getOrderStaticsData(context,type) {
            
			axiosapi.get(`/admin/dashboard/order-statistics?type=${type}`)
				.then(function (response) {
					console.log("responseOrderStatics",response.data);
					context.commit('addOrderStaticsData', response.data);
				})
				.catch(function (error) {

				});
		}
  }
}