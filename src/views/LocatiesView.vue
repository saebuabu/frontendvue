<template>
  <div>
    <h1>Onze vestigingen</h1>
    <div class="container">
    <div class="row">
        <div class="col-md-6" v-for="location in locations" :key="location.id">
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title"><router-link :to="`/locaties/${location.id}`">{{ location.naam }}</router-link></h5>
                    <p class="card-text">{{ location.adres }}</p>
                    <p class="card-text">{{ location.woonplaats }}</p>
                </div>
            </div>
        </div>
    </div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          id: 1,
          naam: "KW1C Campus Vlijmen",
          adres: "De Klokkenlaan 9",
          woonplaats: "Vlijmen",
        },
        {
          id: 2,
          naam: "KW1C Campus Stappegoor",
          adres: "Professor Goossenslaan 1-7",
          woonplaats: "Tilburg",
        },
        {
          id: 3,
          naam: "KW1C Campus Onderwijsboulevard",
          adres: "Onderwijsboulevard 215",
          woonplaats: "Den Bosch",
        },
        {
          id: 4,
          naam: "KW1C Campus Leijgraaf",
          adres: "Stadhuisplein 15",
          woonplaats: "Veghel",
        },
      ],
    };
  },
};
</script>
