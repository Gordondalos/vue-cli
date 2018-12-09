<template>
    <div>
        <div class="container text-left">
            <h1>Валидация</h1>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <form>
                        <label for="email">Email</label>
                        <input class="form-control" type="email" id="email">
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                msg: 'Да'
            }
        },

        mounted() {
            console.log( this.msg );
            _.each([1,2,3,4,5], (item) => {
                console.log(item);
            })
        }
    }


</script>