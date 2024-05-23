<template>
    <div class="image-slider">
        <div class="slider-container">
            <h1>{{ title }}</h1>
            <img :src="getImgUrl(currentImage)" alt="Slider Image" class="slider-image" />
            <button @click="prevImage" class="prev-button">Prev</button>
            <button @click="nextImage" class="next-button">Next</button>
        </div>
        <div class="slider-buttons">
            <button
                v-for="(image, index) in images"
                :key="index"
                @click="goToImage(index)"
                :class="{ active: index === currentIndex }"
                class="slider-button"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            images: [
                "image1.jpg",
                "image2.jpg",
                "image3.jpg",
                // Add more image paths here
            ],
            currentIndex: 0,
            intervalId: null,
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
    },
    mounted() {
        this.startSlider();
    },
    methods: {
        getImgUrl(img) {
            return require(`@/assets/img/slider/${img}`);
        },
        startSlider() {
            this.intervalId = setInterval(this.nextImage, 5000); // Change image every 5 seconds
        },
        stopSlider() {
            clearInterval(this.intervalId);
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        goToImage(index) {
            this.currentIndex = index;
        },
    },
};
</script>

<style>
.image-slider {
    position: relative;
    width: 100%;
    height: 100%;
}

.slider-container {
    position: relative;
    width: 100%;
    height: 50%;
}

.slider-container h1 {
    position: absolute;
    top: 10px;
    left: 38%;
    color: white;
}

.slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.prev-button,
.next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

.prev-button {
    left: 10px;
}

.next-button {
    right: 10px;
}

.slider-buttons {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
}

.slider-button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    border: none;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
}

.slider-button.active {
    background-color: gray;
}
</style>