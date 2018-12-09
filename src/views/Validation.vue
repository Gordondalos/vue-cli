<template>
    <div>
        <div class="container text-left">
            <h1>Валидация</h1>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <form>
                        <label for="email">Email</label>
                        <input
                                :class="{'is-invalid': $v.email.$error}"
                                @blur="$v.email.$touch()"
                                v-model="email" class="form-control" type="email" id="email">

                        <div class="invalid-feedback" v-if="!$v.email.required">
                            Полe обязательное.
                        </div>
                        <div class="invalid-feedback" v-if="!$v.email.email">
                            Не верная почта
                        </div>
                    </form>
                    <pre>
                        {{$v.email}}
                    </pre>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'

    export default {

        data() {
            return {
                msg: 'Да',
                email: ''
            }
        },
        validations: {
            email: {
                required,
                email,
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