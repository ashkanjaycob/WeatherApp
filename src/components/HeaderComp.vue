<template>
    <div>
        <nav class="navbar bg-body-tertiary p-4  border-bottom border-success">
            <div class="container">
                <a class="navbar-brand">Weather forecast by Ashkan Yaghobi</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search Your City ..." aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <weatherShow :data="data"></weatherShow>     
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

        const Api = ref('235785bc369ab18214c37221df285463'
        );
        const data = ref({});

        // Make a request for a user with a given ID
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${Api.value}`)
            .then(function (response) {
                data.value = response.data;
                console.log(data.value);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        return { Api, data }
    }
}
</script>
<style></style>