<template>
  <div id="cart">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <md-whiteframe md-elevation="2" md-tag="div">
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h3 class="md-display-1">
                      Thank you for purchasing our products!
                    </h3>
                    <router-link to='/'>
                      Click if you want to become referrer!
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </md-whiteframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'success',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  #cart
    min-height: 100vh
    .content
      width: 100%
      min-height: 450px
      background-color: #fff
      padding: 64px 16px 16px 16px
      h2, h3
        margin-bottom: 32px
      .btn-block
        margin: 4px 0 24px
      .big
        font-size: 18px
      .bigger
        font-size: 26px
        font-weight: bold
      .grey
        color: #888
      .crossed
        text-decoration: line-through
      .red
        color: #f00
      .prices
        margin-top: 16px
      .game-picture
        max-height: 256px
      .bold
        font-weight: bold
      .no-bottom-space
        margin-bottom: 0
      .space-above
        margin-top: 32px
    #codes
      p
        text-align: left
    .copy
      margin-left: 8px

    h1, h2
      font-weight: normal

    ul
      list-style-type: none
      padding: 0

    li
      display: inline-block
      margin: 0 10px

    a
      color: #42b983
</style>
