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

      <!-- Page sections -->
      <HeroAbout />
      <TeamImages />
      <Timeline />
      <Team />
      <TestimonialsCarousel />
      <Career />
      <Clients />
      <Newsletter />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import HeroAbout from '../partials/HeroAbout.vue'
import TeamImages from '../partials/TeamImages.vue'
import Timeline from '../partials/Timeline.vue'
import Team from '../partials/Team.vue'
import TestimonialsCarousel from '../partials/TestimonialsCarousel.vue'
import Career from '../partials/Career.vue'
import Clients from '../partials/Clients.vue'
import Newsletter from '../partials/Newsletter.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    PageIllustration,
    HeroAbout,
    TeamImages,
    Timeline,
    Team,
    TestimonialsCarousel,
    Career,
    Clients,
    Newsletter,
    Footer,
  },
};
</script>
