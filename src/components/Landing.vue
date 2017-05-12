<template>
  <div id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h1 class="md-display-3 white middle">Friends reffer friends</h1>
        </div>
        <div class="col-lg-5">
          <md-whiteframe md-elevation="2" md-tag="div">
            <div class="content">
              <h3 class="md-display-1">Sign-up as referrer</h3>
              <md-input-container>
                <label>Email</label>
                <md-input type="email" v-model="referrer.email"></md-input>
              </md-input-container>

              <md-input-container>
                <label>Fullname</label>
                <md-input v-model="referrer.fullname"></md-input>
              </md-input-container>

              <md-button class="md-raised btn-block md-accent" :disabled="shouldBeDisabled" v-on:click.native="createReferrer()">Create referrer</md-button>

              <div id="codes" v-if="referrals.code != ''">
                <p>Your referral code: {{ referrals.code }}</p>
                <p>Your referral link: <a :href="referrals.link" target="_blank">{{ referrals.link }}</a></p>
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
    name: 'landing',
    data () {
      return {
        referrer: {},
        referrals: {
          code: '',
          link: ''
        },
        shouldBeDisabled: false
      }
    },
    methods: {
      createReferrer () {
        this.$http.post('http://localhost:3000/referrer', this.referrer)
          .then(res => {
            console.log(res)
            this.referrals = {
              code: res.body.code,
              link: this.$config.domain + 'code/' + res.body.code
            }
            this.shouldBeDisabled = true
          }, err => {
            console.log(err)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  #top
    min-height: 100vh
    .content
      min-height: 300px
      background-color: #fff
      /*border-radius: 0 0 10px 10px*/
      /*box-shadow: 1px 1px 10px #888888*/
      padding: 128px 16px 16px 16px
      h2, h3
        margin-bottom: 32px
      .btn-block
        margin: 4px 0 24px
    #codes
      p
        text-align: left
    .copy
      margin-left: 8px
    .white
      color: white
    .middle
      margin-top: 128px

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
