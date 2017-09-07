<template>
  <mu-drawer :open="sidebar.open"
             :docked="sidebar.docked"
             @close="showSidebar()">
  
    <div class="content" 
         :style="{backgroundImage: `url(${self.avatar})`}">
      <div class="top">
        <img :src="self.avatar" alt="头像" @click="showPersonindex_x">
        <span class="name" v-text="self.name"></span>
      </div>
      <div class="bottom">
        <span v-text="self.explain"></span>
      </div>
    </div>
  
    <mu-list-item title="了解会员特权">
      <mu-icon slot="left"
               value="inbox"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="QQ钱包">
      <mu-icon slot="left"
               value="account_balance_wallet"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="个性装扮">
      <mu-icon slot="left"
               value="color_lens"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="我的收藏">
      <mu-icon slot="left"
               value="grade"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="我的相册">
      <mu-icon slot="left"
               value="inbox"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="我的文件">
      <mu-icon slot="left"
               value="drafts"
               color="#2e2c6b" />
    </mu-list-item>
  </mu-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'sidebar',
  computed: mapState({
    sidebar: 'sidebar',
    self: state => state.data.self
  }),
  methods: {
    ...mapMutations(['showSidebar', 'showPersonindex']),
    showPersonindex_x() {
      this.showSidebar()
      this.showPersonindex()
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.mu-drawer
  color: color-b
  .content
    padding-top: 1px
    background-size: cover
    .top
      padding: 20px
      img
        display: inline-block
        width: 50px
        height: 50px
        vertical-align: middle
        border-radius: 50%
      .name 
        display: inline-block
        margin-left: 20px
        font-size: 1.8em
        vertical-align: middle
    .bottom
      padding: 20px 0 20px 20px
      color: #fff
</style>
