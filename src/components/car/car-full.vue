<template>
    <div>
        <h4>{{$route.query['name']}}</h4>
        <h4>{{year}}</h4>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },

        computed: {
            year(){
                return this.$route.query.year
            }
        }

    }
</script>

<style>

</style>