<template>
  <div class="admin">
    <Header pageName="Admin"/>
    <div class="rectangle-white form-block">
      <h2>Admin</h2>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Admin',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.page-header {
  color: rgb(0, 111, 139);
  margin: 40px;
}

.form-block {
  padding: 0px 40px;
}

.form-block select {
  margin-top: 5px;
  margin-bottom: 30px;
  max-width: 250px;
}

.form-block h2 {
  margin-bottom: 30px;
}

.form-block button {
  margin: 35px 0;
}

.form-block label {
  color: rgb(0, 111, 139);
}

.rectangle-white h2, .rectangle-white h3, .rectangle-white h4 {
  color: rgb(0, 111, 139);
}
</style>

