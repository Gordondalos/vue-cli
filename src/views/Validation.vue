<template>
    <div>
        <div class="container text-left">
            <h1>Валидация</h1>
            <form @submit.prevent="onSubmit()">
                <div class="row">
                    <div class="col-sm-12 col-md-6">


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
                        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
                            Такой уже есть
                        </div>


                        <pre>
                            {{$v.email}}
                        </pre>
                    </div>
                    <div class="col-sm-12 col-md-6">

                        <label for="password">Пароль</label>
                        <input
                                :class="{'is-invalid': $v.password.$error}"
                                @blur="$v.password.$touch()"
                                v-model="password" class="form-control" type="password" id="password">

                        <div class="invalid-feedback" v-if="!$v.password.minLength">
                            Минимальная длина {{$v.password.$params.minLength.min}} сейчас {{password.length}}
                        </div>
                        <div class="invalid-feedback" v-if="!$v.password.required">
                            Поле обязательное
                        </div>

                        <pre>
                            {{$v.password}}
                        </pre>


                        <label for="password2">Пароль</label>
                        <input
                                :class="{'is-invalid': $v.password2.$error}"
                                @blur="$v.password2.$touch()"
                                v-model="password2" class="form-control" type="password" id="password2">

                        <div class="invalid-feedback" v-if="!$v.password2.sameAs">
                            Пароль не совпадает
                        </div>

                        <pre>
                            {{$v.password2}}
                        </pre>


                    </div>
                </div>

                <button class="btn btn-success" :disabled="$v.$invalid">Отправить</button>
            </form>
        </div>

    </div>
</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

    export default {

        methods: {
            onSubmit(){
                console.log(this.email, this.password);
            }
        },

        data() {
            return {
                msg: 'Да',
                email: '',
                password: '',
                password2: '',
            }
        },
        validations: {
            email: {
                required,
                email,
                uniqEmail: ( newEmail ) => {
                    if(newEmail === '') return true;
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const value = newEmail !== 'gordondalos@gmial.com';
                            resolve(value)
                        }, 3000)
                    })
                }
            },
            password: {
                minLength: minLength( 6 ),
                required,
            },

            password2: {
                // sameAs: sameAs( 'password' ),
                required,
                sameAs: sameAs( ( vue ) => {
                    console.log( vue );
                    return vue.password
                } )
            }
        },

        mounted() {
            // тест лодеща
            // _.each( [ 1, 2, 3, 4, 5 ], ( item ) => {
            //     console.log( item );
            // } )
        }
    }


</script>