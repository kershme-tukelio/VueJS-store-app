<template>
    <form @submit.prevent="onSubmit" >
        <div class="mb-3">
            <label for="first-name" class="form-label">First name: </label>
            <input required v-model="formData.firstName" type="first-name" class="form-control" id="first-name">
        </div>
        <div class="mb-3">
            <label for="last-name" class="form-label">Last name: </label>
            <input required v-model="formData.lastName" type="last-name" class="form-control" id="last-name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email: </label>
            <input required v-model="formData.email" type="email" class="form-control" id="email">
        </div>
        <button type="submit"> Add customer </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
                formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit('add-customer', this.formData);
            this.formData = {};
        }
    }
}
</script>

<style>

</style>
