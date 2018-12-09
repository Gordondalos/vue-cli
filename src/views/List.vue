<template>
    <div>
        <input type="text" v-model="filterText">

        <ul>
            <li v-for="(person, index) in filteredNames" :key="index">
               {{index}} {{person.name}}
            </li>
        </ul>

    </div>
</template>

<script>

    import ListMixin from '@/mixins/list.mixin.ts'

    export default {
        mixins: [
            ListMixin
        ],

        data() {
            return {
                persons: [
                    { name: 'Корбен' },
                    { name: 'Ваня' },
                    { name: 'Кузя' },
                ],
                filterText: '',
            }
        },

    }

</script>

<style>

</style>