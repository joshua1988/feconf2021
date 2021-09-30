import { defineAppSetup } from '@slidev/types'
import Test from '../examples/Test.vue?raw'
import LoginForm from '../examples/LoginForm.vue?raw'

const examples = {
  Test, 
  LoginForm
}

export default defineAppSetup(({ app }) => {
  app.provide('sfc-examples', examples)
})
