<template>
    <div class="">
        <nav class="navbar bg-body-tertiary p-4  border-bottom border-success">
            <div class="container">
                <a class="navbar-brand">Weather forecast by Ashkan Yaghobi</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search Your City ..." aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
    name: 'HeaderComp',
    setup() {

        const Api = ref('235785bc369ab18214c37221df285463'
        );

        // Make a request for a user with a given ID
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${Api.value}`)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

            
            return{Api}
    }
}
</script>
<style></style>