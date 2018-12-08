<template>
    <div>
        <h3 v-if="carName">Name : {{carName}}</h3>
        <p>Year: {{year}}</p>
        <p>{{reverseName}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            carName: {
                type: String,
                required: true,
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
                year: 2020
            }
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('');
            }
        },
        mounted() {
            this.year = this.carYear ? this.carYear : '2020';
        }
    }
</script>