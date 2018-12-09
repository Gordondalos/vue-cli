<template>
    <div>
        <textarea v-model="mytext" name="mytext" id="mytextarea"></textarea>

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


        <p>{{mytext}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mytext: 'Это я твой текст',
                social: [
                    'ok'
                ],
                socialRadio: 'ok',
                socialSelect: ['ОК', 'VK', 'FB'],
                selected: 'ОК'

            }
        },

        watch:  {
            social: function() {
                console.log(this.social);
            },
            socialRadio: function (  ) {
                console.log(this.socialRadio);
            },
            selected: function (  ) {
                console.log(this.selected);
            }
        }

    }

</script>

<style scoped>

    textarea {
        width: 50%;
        height: 200px;
    }

    p {
        white-space: pre;
    }

</style>