<template> 
    <div>
        
        <div class="row d-flex justify-content-center  ">
            <div class="card m-2 col-10 col-md-8 col-lg-5">
                <img src="../assets/giphy.gif" class="card-img-top rounded" alt="...">
                <div class="card-body">
                    <h1 class="card-title d-inline">{{ data.name }} </h1>
                    <h3 class="card-title d-inline mx-5">~ {{ data.weather[0].main}}</h3> 
                    <h4 class="py-2">{{ data.weather[0].description}}</h4>
                    <hr>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h4>Temp</h4>Main:{{data.main.temp}} / Feels Like:{{data.main.temp}}</li>
                            <li class="list-group-item"><h4>Wind</h4>Deg:{{data.wind.deg}} / Speed:{{data.wind.speed}}</li>
                            <li class="list-group-item"><h4>Country</h4>Name: {{data.sys.country}} / TimeZone: {{data.timezone}}</li>
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
<style></style>