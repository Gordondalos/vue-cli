<template>
    <div>

        <label >год</label>
        <input type="text" v-model.number="num">

        <textarea v-model.trim="mytext" name="mytext" id="mytextarea"></textarea>

        <hr>

        <label>
            <input v-model="social" type="checkbox" value="instagram">
            Инстаграм
        </label>

        <label>
            <input v-model="social" type="checkbox" value="tw">
            Твитер
        </label>

        <label>
            <input v-model="social" type="checkbox" value="ok">
            Однокласники
        </label>


        <label>
            <input v-model="socialRadio" type="radio" value="instagram">
            Инстаграм
        </label>

        <label>
            <input v-model="socialRadio" type="radio" value="tw">
            Твитер
        </label>

        <label>
            <input v-model="socialRadio" type="radio" value="ok">
            Однокласники
        </label>

        <ul>
            <li v-for="(elem, index) in social" :key="index">
                {{elem}}
            </li>
        </ul>


        <select v-model="selected" name="myselect" id="select">
            <option :key="index" v-for="(item, index) of socialSelect" :value="item">{{item}}</option>
        </select>


        <button
                @click="onChange(false)"
                :class="{'active': !value}"
                class="of"
        >of
        </button>
        <button
                @click="onChange(true)"
                :class="{'active': value}"
                class="on">on
        </button>
        <p>{{mytext}}</p>

        <button class="btn btn-sm btn-info" @click="create()">Создать</button>
        <button class="btn btn-sm btn-info" @click="load()">Загрузить мои машины</button>

        <ul class="list-group container my-5">
            <li :key="car.id" class="list-group-item" v-for="car in cars">
                <span>{{car.id}}</span> - <span>{{car.name}}</span> - <span>{{car.year}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        created(){
            this.resource = this.$resource('http://localhost:9999/cars');
        },
        props: [
            'value'
        ],
        methods: {
            onChange( newValue ) {
                this.$emit( 'input', newValue )
            },

            async load(){

                const res1  = await this.resource.get();
                console.log('res1', res1.body);

                const res = await this.$http.get( 'http://localhost:9999/cars');
                console.log(res.body);
                // _.each(res.body, (car) => {
                //     this.cars.push({
                //       name: car.name,
                //       year: car.year,
                //       id: car.id,
                //     })
                // });
                this.cars = res.body;
            },

            async create() {
                const car = {
                    name: this.mytext,
                    year: this.num,
                };

                const res1  = await this.resource.save({}, car);
                console.log('res1', res1.body);

                const res = await this.$http.post( 'http://localhost:9999/cars', car);
                console.log(res.body)
                // .then(response => {
                    //     return response.json();
                    // })
                    // .then(newCar => {
                    //     console.log(newCar);
                    //     this.mytext = '';
                    //     this.num = 0;
                    // })
            }
        },
        data() {
            return {
                resource: '',
                mytext: 'Это я твой текст',
                social: [
                    'ok'
                ],
                socialRadio: 'ok',
                socialSelect: [ 'ОК', 'VK', 'FB' ],
                selected: 'ОК',
                num: 1,
                cars: [],

            }
        },

        watch: {
            num( value ) {
                console.log( typeof value );
            },
            social( value ) {
                console.log( this.social );
            },
            socialRadio: function () {
                console.log( this.socialRadio );
            },
            selected: function () {
                console.log( this.selected );
            }
        }

    }

</script>

<style scoped>

    * {
        outline: none;
    }

    button {
        padding: 10px;
        border-radius: 15px;
    }

    .active {
        background-color: red;
        color: white;
    }

    textarea {
        width: 50%;
        height: 200px;
    }

    p {
        white-space: pre;
    }

    li {
        background-color: #2c3e50;
    }

</style>