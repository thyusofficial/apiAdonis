'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store')

Route.post('sessions', 'Sessioncontroller.store')

Route.post('passwords', 'ForgotPasswordController.store')
