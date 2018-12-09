<template>
    <div class="about">
        <h1>This is an about page</h1>

        <list></list>

        <inputs v-model="switcher"></inputs>

        <div>
            <h3 v-if="switcher">Включено</h3>
            <h3 v-if="!switcher">Выключено</h3>
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                switcher: false,
            }
        }
    }

</script>