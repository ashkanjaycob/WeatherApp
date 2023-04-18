<template>
    <div>

        <div class="row  d-flex justify-content-center  ">
            <div class="card  m-2 col-10 col-md-8 col-lg-5">
                <!-- <img src="../assets/giphy.gif" class="card-img-top rounded" alt="..."> -->
                <h1 class="card-title d-inline" style="font-size: 5.8rem;">{{ data.main.temp }}<i
                        class="bi bi-thermometer-half fs-1"></i> </h1>
                <div class="card-body">
                    <i class="bi bi-geo-alt-fill fs-4 px-2"></i>
                    <h1 class="card-title d-inline">{{ data.name }}</h1>
                    <hr>
                    <h3 class="card-title d-inline">{{ data.weather[0].main }}</h3>
                    <h4 class="py-2"><i class="bi bi-border-width fs-6"></i> {{ data.weather[0].description }}</h4>
                    <hr>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h4><i class="bi bi-person-dash-fill "></i> Temp</h4>humidity:{{ data.main.humidity }} / Feels:
                            {{ data.main.feels_like }}
                        </li>
                        <li class="list-group-item">
                            <h4><i class="bi bi-wind "></i> Wind </h4>Deg:{{ data.wind.deg }} / Speed:{{ data.wind.speed }}
                        </li>
                        <li class="list-group-item">
                            <h4> <i class="bi bi-globe"></i> Country</h4>Name: {{ data.sys.country }} / TimeZone:
                            {{ data.timezone }}
                        </li>
                    </ul>
                    <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import {reactive} from 'vue'
export default {
    name: 'weatherShow',
    props: {
        data: Object
    },
    // setup(){
    //     const weather = reactive(data.weather[0].toString());
    //     console.log(weather);
    //     return{weather}
    // }
}
</script>
<style>
.bg {
    background: url(../assets/Rain1.jpg);
}</style>