import moment from 'moment';
import { API_URL, axiosapi} from '@/axios';


const ALL_CUSTOMERS = 'all_customers';
const CUSTOMER_VIEW_DATA = 'customer_view_data';

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
            allCustomers: getJSONFromLocalStorage(ALL_CUSTOMERS) || null,
			customerViewData: getJSONFromLocalStorage(CUSTOMER_VIEW_DATA) || null
		}
	},

	mutations: {
        addAllCustomerList(state, allCustomerData){
            state.allCustomers = allCustomerData;
            window.localStorage.setItem(ALL_CUSTOMERS, JSON.stringify(allCustomerData))
        },
		addCustomerViewData(state, customerView){
			state.customerViewData = customerView;
			window.localStorage.setItem(CUSTOMER_VIEW_DATA, JSON.stringify(customerView))
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
		},
		getCustomerViewData(context, user_id){
            
			axiosapi.get(`/admin/customer/view/${user_id}`)
			     .then(function (response){
					console.log("customerViewData",response.data);
					context.commit('addCustomerViewData',response.data)
					return response.data
				 })
				 .catch(function(error){

				 });
		}
  }
}