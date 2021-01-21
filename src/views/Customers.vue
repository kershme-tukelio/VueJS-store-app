<template>
	<div>
		<add-customer  ></add-customer>
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
				<router-link :to="{ path: `/customers/${customer.id}`, params: {customer}}" >Latest purchases</router-link>
			</td>
		</tr>
	</tbody>
</table>
	</div>
</template>

<script>


export default {
	components: {
		
	},
	data() {
		return {
			customers: [
				{
					id: 1,
					firstName: 'First Name 1',
					lastName: 'Last Name 1',
					email: 'email1@example.com'
				},
				{
					id: 2,
					firstName: 'First Name 2',
					lastName: 'Last Name 2',
					email: 'email2@example.com'
				},
				{
					id: 3,
					firstName: 'First Name 3',
					lastName: 'Last Name 3',
					email: 'email3@example.com'
				},
				{
					id: 4,
					firstName: 'First Name 4',
					lastName: 'Last Name 4',
					email: 'email4@example.com'
				},
				{
					id: 5,
					firstName: 'First Name 5',
					lastName: 'Last Name 5',
					email: 'email5@example.com'
				},
			]
		}
	},
	methods: {
		removeCustomer(id) {
			this.customers = this.customers.filter(customer => customer.id !== id);
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
