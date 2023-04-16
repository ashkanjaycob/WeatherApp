<template>
    <div>
        <div class=" d-flex justify-content-center m-4">
            <div class="card mx-4" style="width: 24rem;">
                <img src="../assets/Rain1.jpg" class="card-img-top" alt="#">
                <div class="card-body">
                    <h6 class="card-title"><h1 class="py-2"> {{ data.name }} </h1>
                    </h6>
                    <h5>{{ data.weather[0].main }}</h5>
                    <p class="card-text">{{ data.weather[0].description
                    }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h5>Temp</h5> Feels Like : {{ data.main.feels_like }}/ Humidity :
                        {{ data.main.humidity }}/pressure : {{ data.main.pressure }}</li>
                    <li class="list-group-item"><h5>Wind</h5> deg : {{ data.wind.deg }}/gust : {{ data.wind.gust }}/speed :
                        {{ data.wind.speed }}</li>
                    <!-- <li class="list-group-item">Country Name : {{ data.sys.country }}</li> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'weatherShow',
    props: {
        data: Object
    },
    setup() {

    }
}
</script>
<style></style>