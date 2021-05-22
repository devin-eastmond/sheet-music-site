<template>
  <div class="about">
    <Header pageName="About"/>
    <!--<div class="container">
      <div class="row">

        <div id="mdb-lightbox-ui"></div>

        <figure class="col-md-4">
            <div class="sheet-info">
              <img alt="picture" src="images/devin2.jpg" class="img-thumbnail">
              <p>Devin playing the saxophone</p>
            </div>
        </figure>
        <figure class="col-md-4">
            <div class="sheet-info">
              <img alt="picture" src="images/devin.jpg" class="img-thumbnail">
              <h5>About the Arranger</h5>
              <p>Devin Eastmond is a computer science major currently studying at Brigham Young University.
              He has been playing piano since he was 9 and saxophone sine he was 12. He recently started arranging
              his own music for piano, beginning with the first arrangement he did in 2017, <i>I Know That My Redeemer Lives</i>.</p>
            </div>
        </figure>
        <figure class="col-md-4">
            <div class="sheet-info">
              <img alt="picture" src="images/devin3.JPG" class="img-thumbnail">
              <p>Devin with his nephew Waylon</p>
            </div>
        </figure>
        <figure class="col-md-4">
        </figure>


      </div>
    </div>-->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'About',
  components: {
    Header,
    Footer
  },
}
</script>

<style>
  /*.sheet-info {
    color: white;
    background-color: rgb(0, 111, 139);
    text-decoration: none;
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
  }

  .sheet-info img {
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .sheet-info h5 {
    margin-top: 5px;
  }*/
</style>
