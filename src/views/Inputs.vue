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

        <ul>
            <li v-for="(elem, index) in social" :key="index">
                {{elem}}
            </li>
        </ul>

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
                ]
            }
        },

        watch:  {
            social: function() {
                console.log(this.social);
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