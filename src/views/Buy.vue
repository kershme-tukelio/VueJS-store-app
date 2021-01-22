<template>
    <div>
        <h1>Product: {{product.title}}</h1>
        <ul>
            <li>ID: {{product.id}}</li>
            <li>Title: {{product.title}}</li>
            <li>Quantity: {{product.quantity}}</li>
            <select v-for="customer in customers" :key="customer.id">
                <option>{{customer.firstName}} {{customer.lastName}}</option>
            </select>
        </ul>
    </div>
</template>

<script>
import customerService from '../services/CustomerService.js';
export default {
    name: "Buy",
    props: ['product'],
    mounted() {
        console.log(this.product.title);
    }
}
</script>

<style>

</style>
