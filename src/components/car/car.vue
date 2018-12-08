<template>
    <div>
        <h3 v-if="carName">Name : {{carName}}</h3>
        <p>Year: {{year}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            carName: String,
            carYear: String,
        },
        data() {
            return {
                year: 2020
            }
        },
        mounted(){
            this.year = this.carYear ? this.carYear : '2020';
        }
    }
</script>