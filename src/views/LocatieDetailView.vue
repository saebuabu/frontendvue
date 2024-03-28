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
                name: "Location Name",
                photoUrl: "https://example.com/location-photo.jpg",
                latitude: 123.456,
                longitude: 789.012
            }
        };
    },
    methods: {
        getGoogleMapsUrl(latitude, longitude) {
            return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${latitude}!2d${longitude}`;
        }
    }
};
</script>

<style>
/* Add your custom styles here */
</style>