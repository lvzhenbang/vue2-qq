<template>
  <mu-drawer :open="sidebar.open"
             :docked="sidebar.docked"
             @close="showSidebar()">
  
    <div class="content">
      <div class="top">
        <mu-avatar 
          :src="self.avatar"
          :size="96"
          @click="showPersonindex_x" />
        <span class="name">{{self.name}}</span>
      </div>
      <div class="bottom">
        <span>{{self.explain}}</span>
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
    position: relative
    height: 30vh
    padding-top: 1px
    margin-bottom: 50px
    .top
      padding: 20px
      .name
        position: absolute
        top: 5vh/*偏移*/
        left: 56% /*偏移*/        
        display: inline-block
        vertical-align: middle
        font-size: 1.8em
    .bottom
      padding: 20px
      padding-left: 40px
  
</style>
