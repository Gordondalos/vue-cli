<template>
    <div>

        <button @click="goToBack()" class="btn btn-sm btn-info">back</button>

        <router-link
                    v-if="id"
                    tag="button"
                     :to="`/car/${id}/full`"
                     @click="goToNext()"
                     class="btn btn-sm btn-warning">Идем дальше</router-link>


        <!--или так можно указать под роут в парамете ту-->
        <router-link
                v-if="id"
                tag="button"
                :to="{name: 'carFull', params: {id: id }}"
                @click="goToNext()"
                class="btn btn-sm btn-warning">Идем дальше</router-link>

        <h1>Car id {{id}}</h1>
        <h3 v-if="carName">Name : {{carName}}</h3>
        <p>Year: {{year}}</p>
        <p>{{reverseName}}</p>
        <button @click="send()">Отпраь меня</button>

        <div class="container">
            <div class="row">
                <router-view/>
            </div>
        </div>

    </div>
</template>

<script>
    import {eventEmitter} from '@/main.ts';
    export default {
        props: {
            carName: {
                type: String,
                required: false,
                default: 'Default name'
            },
            carYear: Number,
        },
        // props: {
        //     carName: String,
        //     carYear: Number,
        // },
        // props: [
        //     'carName', 'carYear'
        // ],
        data() {
            return {
                year: 2020,
                //id: this.$router.currentRoute.params['id'] // получение доступа к элементам роута
                id: this.$route.params['id'], // или так
            }
        },
        watch: {
          $route(toR, fromR){
              this.id = toR.params['id'];
          }
        },
        methods: {
            send() {
                // this.$emit('sendCurrentNAme', this.carName + '123')
                eventEmitter.$emit('sendCurrentNAme', this.carName + '123')
            },
            goToBack(){
                this.$router.push('/')
            },
            goToNext(){

            }

        },
        computed: {
            reverseName() {
                return this.carName.split( '' ).reverse().join( '' );
            }
        },
        mounted() {
            this.year = this.carYear ? this.carYear : '2020';
        }
    }
</script>