<template>
    <div>

        <nav class="navbar  rounded-pill my-2">
            <div class="container f-flex justify-content-center">
                <h5> <a class="navbar-brand text-dark outline">Weather forecast by Ashkan Yaghobi</a></h5>
                <form @submit.prevent="changeCity" class="d-flex w-auto" role="search">
                    <input class="form-control me-2 rounded" v-model.lazy="city" type="search"
                        placeholder="Search Your City ..." aria-label="Search">
                    <button class="btn btn-outline-dark rounded  w-50"
                        type="submit">Search</button>
                </form>
            </div>
        </nav>
        <div v-if="isTrue" class=" d-flex justify-content-center mt-5">
            <div class="spinner-border text-succes" style="width: 6rem; height: 6rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <WeatherShow v-else :data="data" :flag="flag" :show="show"> </WeatherShow>
    </div>
</template>

<script>
import axios from 'axios'
import WeatherShow from './weatherShow.vue'
import { ref } from 'vue'
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

        const flag = ref();

        const show = ref();



        function SetCity() {
            // Make a request for a user with a given ID
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${Api.value}&units=metric&lang={fa}`)
                .then(function (response) {
                    isTrue.value = false;
                    data.value = response.data;
                    console.log(data.value);
                    city.value = "";
                    flag.value = `https://flagsapi.com/${response.data.sys.country }/shiny/32.png`
                    show.value = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
                                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
                
        }

        SetCity();

        function changeCity () {
            SetCity();
            city.value = ""; 
        }

        // watch(city, () => {
        //     SetCity();
        // });

        return { Api, data, isTrue, city, SetCity, changeCity , flag , show}
    }
}
</script>
<style>


</style>