<template>
    <div>
        <h3>Name : {{carName}}</h3>
        <p>Year: {{carYear}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carName: "BMV",
                carYear: "2015"
            }
        }
    }
</script>