<template>
    <h1>YELLO {{customer.firstName}}</h1>
</template>

<script>
export default {
    name: "LatestPurchases",
    props: ['customer'],
    mounted() {
        console.log(this.customer.firstName);
    }
}
</script>

<style>

</style>
