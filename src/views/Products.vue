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
				<tr v-for="product in products" :key="product.id" >
					<td>{{product.id}}</td>
					<td>{{product.title}}</td>
					<td>
						<input type="number" min="0" v-model="product.quantity">
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
