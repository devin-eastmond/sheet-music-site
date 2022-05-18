<template>
  <div class="compositions">
    <Header pageName="Compositions"/>
    <LoadingPage/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoadingPage from '@/components/LoadingPage.vue'
export default {
  name: 'Compositions',
  components: {
    Header,
    Footer,
    LoadingPage
  },
  created() {
    window.scrollTo(0, 0);
  }
}
</script>

<style>
</style>
