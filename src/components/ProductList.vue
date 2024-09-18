<template>
    <div class="container">
        <h1>Productenlijst</h1>
        <div class="row">
            <div class="col-4" v-for="product in products" :key="product.id">
                <div class="card">
                    <img :src="product.thumbnail" class="card-img-top" :alt="product.title" />
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                        <p class="card-text">{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// productenlijst wordt via een rest api van dummyjson gehaald
export default {
    name: "ProductList",
    data() {
        return {
            products: [],
        };
    },
    async created() {
        const response = await fetch("https://dummyjson.com/products?limit20&skip=0", {
            method: "GET",
        });
        const data = await response.json();
        this.products = data.products;
    },
};
</script>
<style>
.card {
    margin: 1rem;
}
</style>