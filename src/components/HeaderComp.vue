<template>
    <div>

        <nav class="navbar  rounded-pill my-2">
            <div class="container f-flex justify-content-center">
               <h1> <a class="navbar-brand">Weather forecast by Ashkan Yaghobi</a></h1>
                <form class="d-flex w-75" role="search">
                    <input class="form-control me-2 p-3 rounded-pill" v-model.lazy="city" type="search"
                        placeholder="Search Your City Weather ..." aria-label="Search">
                    <!-- <button @click="SeTcity()" class="btn btn-outline-success rounded-pill w-50" type="submit">Search</button> -->
                </form>
            </div>
        </nav>
        <div v-if="isTrue" class=" d-flex justify-content-center mt-5">
            <div class="spinner-border text-succes" style="width: 6rem; height: 6rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <WeatherShow v-else :data="data"> </WeatherShow>
    </div>
</template>

<script>
import axios from 'axios'
import WeatherShow from './weatherShow.vue'
import { ref, watch } from 'vue'
export default {
    name: 'HeaderComp',
    components: {
        WeatherShow
    },
    setup() {


        const isTrue = ref(true);

        const Api = ref('235785bc369ab18214c37221df285463'
        );
        const data = ref({});

        const city = ref("tehran");



        function SetCity() {
            // Make a request for a user with a given ID
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${Api.value}`)
                .then(function (response) {
                    isTrue.value = false;
                    data.value = response.data;
                    console.log(data.value);
                    city.value="";

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        SetCity();

        
        watch(city, () => {
            SetCity();
        });

        return { Api, data, isTrue, city, SetCity }
    }
}
</script>
<style></style>