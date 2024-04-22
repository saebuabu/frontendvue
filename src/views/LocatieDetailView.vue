<template>
    <div>
        <h1>{{ location.name }}</h1>
        <img :src="location.photoUrl" alt="Location Photo" />
        <iframe
            width="600"
            height="450"
            :src="getGoogleMapsUrl(location.latitude, location.longitude)"
            frameborder="0"
            style="border:0"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            location: {
                naam: "Vestiging 1",
                photoUrl: "https://example.com/location-photo.jpg",
                latitude: 5512309,
                longitude: 763636
            },
            id: null
        };
    },
    methods: {
        getGoogleMapsUrl(latitude, longitude) {
            return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${latitude}!2d${longitude}`;
        },
        SetIdFromUrl() {    
            this.id = this.$route.params.id;
        }
    }
};
</script>

<style>
/* Add your custom styles here */
</style>