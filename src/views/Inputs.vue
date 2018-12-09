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
    </div>
</template>

<script>
    export default {
        props: [
            'value'
        ],
        methods: {
            onChange( newValue ) {
                this.$emit( 'input', newValue )
            },

            async create() {
                const car = {
                    name: this.mytext,
                    year: this.num,
                };
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
                mytext: 'Это я твой текст',
                social: [
                    'ok'
                ],
                socialRadio: 'ok',
                socialSelect: [ 'ОК', 'VK', 'FB' ],
                selected: 'ОК',
                num: 1,

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

</style>