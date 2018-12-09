<template>
    <div>
        <h4>{{$route.query['name']}}</h4>
        <h4>{{year}}</h4>

        <div class="add-scroll"></div>

        <div id="scroll">
            Привет я скролл
        </div>

        <div class="add-scroll"></div>
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

    .add-scroll {
        width: 100%;
        height: 100vh;
        background-color: #ccc;
    }

</style>