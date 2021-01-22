<template>
	<div>
		<add-customer
			@create-customer="createCustomer"
		></add-customer>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">ID: </th>
					<th scope="col">First name: </th>
					<th scope="col">Last name: </th>
					<th scope="col">Email: </th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="customer in customers" :key="customer.id" >
					<td>{{customer.id}}</td>
					<td>{{customer.firstName}}</td>
					<td>{{customer.lastName}}</td>
					<td>{{customer.email}}</td>
					<td>
						<button @click="removeCustomer(customer.id)" type="button" class="btn btn-danger">X</button>
					</td>
					<td>
						<router-link :to="{ name: `LatestPurchases`, params: {customer}}" >Latest purchases</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import AddCustomer from '../components/AddCustomer.vue'
import customerService from '../services/CustomerService.js'

export default {
	components: {
		AddCustomer,
	},
	data() {
		return {
			customers: customerService.getAllCustomers
		};
	},
	methods: {
		removeCustomer(id) {
			customerService.removeCustomer(id);
		},
		createCustomer(formData) {
			this.customers.push({...formData, id: this.nextId});
		}
	},
	computed: {
		nextId() {
			return this.customers.length + 1;
		}
	}
}
</script>

<style>

</style>
