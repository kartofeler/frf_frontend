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
                    <h2 v-show="!codeActive" class="md-display-1 text-center red">
                      This voucher is not active any more!
                    </h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <md-image class="game-picture" :md-src="item.picture_url"></md-image>
                    <div class="prices">
                      <p>Standard price: <span class="big crossed ">{{ item.price }} {{ item.currency }}</span></p>
                      <p v-show="showDiscount" class="no-bottom-space">Discount price: <span class="bigger red">{{ (item.price * (100 - discount.percent_off) / 100).toFixed(2)
                        }} {{ item.currency }} </span></p>
                      <p v-show="showDiscount" class="md-caption red">With code <span class="bold">{{ $route.query.code
                        }}</span></p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="md-display-1">{{ item.name }}</h3>
                    <h4 class="md-subheading">{{ item.sec_name }}</h4>
                    <p class="text-left">{{ item.description }}</p>
                    <md-button class="md-primary md-raised btn-block space-above" @click.native="buy">Buy</md-button>
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
    name: 'cart',
    data () {
      return {
        showDiscount: false,
        codeActive: true,
        discount: {},
        item: {},
        code: ''
      }
    },
    methods: {
      buy () {
        this.$http.post(this.$config.apiRoot + 'finalize', {code: this.$route.query.code, game: this.item})
          .then(res => {
            this.$router.push({name: 'Success'})
          }, err => {
            console.log(err)
          })
      }
    },
    created () {
      this.$http.get(this.$config.apiRoot + 'item', this.referrer)
        .then(res => {
          this.item = res.body
        }, err => {
          console.log(err)
        })
      this.$http.get(this.$config.apiRoot + 'verify?code=' + this.$route.query.code)
        .then(res => {
          this.codeActive = res.body.status
          if (this.codeActive) {
            this.discount = res.body.discount
            this.showDiscount = true
          }
        }, err => {
          console.log(err)
        })
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
      /*border-radius: 0 0 10px 10px*/
      /*box-shadow: 1px 1px 10px #888888*/
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
