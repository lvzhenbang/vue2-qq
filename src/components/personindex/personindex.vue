<template>
  <div class="index">
    <div class="top">  
      <mu-appbar title="个人资料" 
                 :zDepth="0">
        <mu-icon-button icon="arrow_back"
                        slot="left"
                        @click="showPersonindex_x" />
        <div class="right-top"
             slot="right">
          <mu-icon-button icon="more_vert" />
        </div>
      </mu-appbar>
    </div>
    <div class="content">
  
      <div class="person-bg"
                   :style="{backgroundImage: `url(${userData.avatar})`}">  
      </div>

      <div class="person-info">
        <mu-avatar :src="userData.avatar"
                   :size="96" />
        <span class="name" v-text="userData.name"></span>
      </div>

      <mu-tabs :value="activeTab"
               @change="handleTabChange">
        <mu-tab value="tab1"
                title="基本信息" />
        <mu-tab value="tab2"
                title="动态信息" />
        <mu-tab value="tab3"
                title="精选图片" />
      </mu-tabs>
      
      <div v-if="activeTab === 'tab1'">
        <mu-list-item title="Phone"
                      :describeText="userData.phone"
                      disabled>
          <mu-icon value="voicemail"
                   color="#2e2c6b"
                   slot="left" />
        </mu-list-item>
        <mu-divider/>

        <mu-list-item title="Region"
                      :describeText="userData.address"
                      disabled>
          <mu-icon value="location_on"
                   color="#2e2c6b"
                   slot="left" />
        </mu-list-item>
        <mu-divider/>

        <mu-list-item title="Birthday"
                      :describeText="userData.birthday"
                      disabled>
          <mu-icon value="cake"
                   color="#2e2c6b"
                   slot="left" />
        </mu-list-item>
        <mu-divider/>

      </div>
  
      <div v-if="activeTab === 'tab2'">
        <h1>制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....制作中....</h1>
      </div>
      <div v-if="activeTab === 'tab3'">
        <h1>未完待续....</h1>
      </div>
    </div>
    
    <!-- 底部 tab -->
    <mu-tabs class="bottom" >
      <mu-tab value="tab1"
              icon="videocam" />
      <mu-tab value="tab2"
              icon="phone" color="#f00"/>
      <mu-tab value="tab3"
              icon="chat_bubble"
              @click="showDialog_x" />
    </mu-tabs>

  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'personindex',
  data() {
    return {
      activeTab: 'tab1'
    }
  },
  computed: {
    ...mapState(['activeId', 'data']),
    ...mapGetters(['friend']),
    userData() {
      // 判断是否有当前活跃的friend，没有的话就获取自己的数据，展示个人页面，有的话就展示当前活跃朋友的页面
      if (this.activeId === 0) {
        return this.data.self
      } else {
        return this.friend
      }
    }
  },
  methods: {
    ...mapMutations(['getActiveId', 'showPersonindex', 'showDialog']),
    handleTabChange(val) {
      this.activeTab = val
    },
    showPersonindex_x() {
      this.getActiveId({ activeId: 0 })
      this.showPersonindex()
    },
    showDialog_x() {
      // 判定打开的是不是自己的主页，如果是则无法点击对话
      if (this.activeId !== 0) {
        this.showDialog()
        this.showPersonindex()
      }
    }
  }
}
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.icons
  color:#f00
.index
  position: absolute
  z-index: 102
  top: 0
  left: 0
  width: 100%
  background: color-g
  .top
    position: fixed
    top: 0
    left: 0
    z-index: 103
    width: 100%
    height: 10%
    .mu-appbar
      background: color-w
      color: #333
      text-align: center
  .bottom
    position: fixed
    left: 0
    bottom: 0
    z-index: 103
    width: 100%
    height: 10%
    background: color-w
  .content
    width: 100%
    margin-bottom: 56px
    background-size: cover
    .person-bg
      width: 100%
      height: 200px
    .person-info
      margin-top: -48px
      text-align: center
      .name
        display: block
        margin-top: 4px
        font-size: 1.6em
        color: #333
    .mu-tabs
      background: #999
    .item
      margin-top: 6px
      margin-left: 20px
      margin-bottom: 56px
</style>
