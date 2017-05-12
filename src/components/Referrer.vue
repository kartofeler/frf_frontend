<template>
  <div id="cart">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <md-whiteframe md-elevation="2" md-tag="div">
            <div class="content">
              <h3 class="md-display-1">Refferer redemptions</h3>
              <div class="container">
                <div class="row">
                  <div class="col-md-5">
                    <md-input-container>
                      <label>Type referral code</label>
                      <md-input type="email" v-model="code"></md-input>
                    </md-input-container>
                    <md-button class="md-raised md-primary btn-block" @click.native="show()">Show</md-button>
                    <div class="text-left customer-info">
                      <p class="md-body-2">Owner: {{ customer.customer }}</p>
                      <p class="md-body-1">Code: {{ customer.customer_id }}</p>
                      <p class="md-caption red">Total redemptions: {{ total }}</p>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div v-show="entries.length === 0">
                      <p>This voucher has no redemptions</p>
                    </div>
                    <div v-show="entries.length !== 0">
                      <div v-for="entry in entries" :key="entry.id">
                        <div class="md-list-text-container">
                          <p class="bold">{{ entry.customer_id }}</p>
                          <p>{{ entry.date | moment("from") }}</p>
                          <p v-if="entry.metadata">Bought: {{ entry.metadata.name }}</p>
                        </div>
                        <md-divider v-if="!$last(entry, entries)"></md-divider>
                      </div>
                    </div>
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
  import MdListItem from '../../node_modules/vue-material/src/components/mdList/mdListItemRouter'
  export default {
    components: {MdListItem},
    name: 'referrrer',
    data () {
      return {
        code: '',
        entries: [],
        customer: {},
        total: 0
      }
    },
    methods: {
      show () {
        this.$http.get('http://localhost:3000/getRedemptions?code=' + this.code)
          .then(res => {
            this.entries = res.body.entries
            this.total = res.body.total
            this.customer = res.body.customer
          }, err => {
            console.log(err)
          })
      }
    },
    created () {
      const code = this.$route.query.code
      if (code) {
        this.code = code
        this.show()
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
      margin-bottom: 64px
      background-color: #fff
      /*border-radius: 0 0 10px 10px*/
      /*box-shadow: 1px 1px 10px #888888*/
      padding: 32px 16px 16px 16px
      h2, h3
        margin-bottom: 32px
      .btn-block
        margin: 4px 0 24px
      .md-input-container
        margin-bottom: 4px
      .md-list-text-container
        padding: 16px
        p
          text-align: left
          margin-bottom: 4px
          &.bold
            font-weight: bold
    .red
      color: red
    .customer-info
      p
        margin-bottom: 4px
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
