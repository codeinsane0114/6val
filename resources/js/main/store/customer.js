import moment from 'moment';
import { API_URL, axiosapi} from '@/axios';


const ALL_CUSTOMERS = 'all_customers';

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
            allCustomers: getJSONFromLocalStorage(ALL_CUSTOMERS) || null
		}
	},

	mutations: {
        addAllCustomerList(state, allCustomerData){
            state.allCustomers = allCustomerData;
            window.localStorage.setItem(ALL_CUSTOMERS, JSON.stringify(allCustomerData))
        }
	},

	actions: {
        getAllCustomerList(context) {
            
			axiosapi.get('/admin/customer/customer-list-search')
				.then(function (response) {
                    console.log('customers',response.data.customers);
					context.commit('addAllCustomerList', response.data.customers);
				})
				.catch(function (error) {

				});
		}
  }
}