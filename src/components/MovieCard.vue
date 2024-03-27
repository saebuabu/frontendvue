<template>
    <div class="card">
        <img :src="movie.poster" class="card-img-top" alt="Movie Poster">
        <div class="card-body">
            <h5 class="card-title">{{ movie.titel }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    width: 18rem;
    margin-bottom: 1rem;
}
</style>