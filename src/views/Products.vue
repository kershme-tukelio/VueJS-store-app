<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">ID: </th>
					<th scope="col">Title: </th>
					<th scope="col">Quantity: </th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in getProducts" :key="product.id" >
					<td>{{product.id}}</td>
					<td>{{product.title}}</td>
					<td>
						<input type="number" min="0" v-model="product.quantity">
					</td>
					<td>
						<router-link :to="{ name: `Buy`, params: {product, customers}}" >Purchase </router-link>
					</td>
				</tr>
			</tbody>
		</table>
		<label for="search"> Search:  </label>
		<input type="text" v-model="searchValue">
	</div>
</template>

<script>
export default {
	watch: {
		searchValue: function(newValue) {
			this.filteredProducts = this.products.filter(({title}) => title.toLowerCase().includes(newValue.toLowerCase()));
		}
	},
	computed: {
		getProducts() {
			return this.searchValue ? this.filteredProducts : this.products;
		}
	},
	data() {
		return {
			searchValue: "",
			filteredProducts: [],
			products: [
				{
					id: 1,
					title: "Title 1",
					quantity: 4
				},
				{
					id: 2,
					title: "Title 2",
					quantity: 8
				},
				{
					id: 3,
					title: "Title 3",
					quantity: 5
				},
				{
					id: 4,
					title: "Title 4",
					quantity: 6
				},
				{
					id: 5,
					title: "Title 5",
					quantity: 10
				}
			]
		}
	}
}
</script>

<style>

</style>
