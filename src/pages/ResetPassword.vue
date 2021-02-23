<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 class="h1 mb-4">Forgot your password?</h1>
              <p class="text-xl text-gray-400">We'll email you instructions on how to reset it.</p>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <form>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-300 text-sm font-medium mb-1" for="email">Email</label>
                    <input id="email" type="email" class="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <button class="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Reset Password</button>
                  </div>
                </div>
              </form>
              <div class="text-gray-400 text-center mt-6">
                <router-link to="/signin" class="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Cancel</router-link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'ResetPassword',
  components: {
    Header,
    PageIllustration,
    Footer,
  },
};
</script>
