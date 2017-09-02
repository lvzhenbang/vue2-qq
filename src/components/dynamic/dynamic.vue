<template>
  <div class="dynamic">
  
    <div class="gap"></div>
  
    <div class="tab">
      <!--观赏性-->
      <mu-tabs>
        <mu-tab value="tab1"
                icon="star"
                title="好友动态"
                iconClass="ii-1"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab2"
                icon="location_on"
                title="附近"
                iconClass="ii-2"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab3"
                icon="terrain"
                title="兴趣部落"
                iconClass="ii-3"
                titleClass="t-1"
                disabled/>
      </mu-tabs>
    </div>
  
    <div class="gap-1"></div>
    <mu-list>
      <div class="item">
        <mu-list-item title="直播">
          <mu-icon slot="left"
                   value="videocam"
                   color="#64dd17" />
          <mu-icon value="keyboard_arrow_right"
                   slot="right" />
        </mu-list-item>
        <mu-divider/>
        <mu-list-item title="视频">
          <mu-icon slot="left"
                   value="video_library"
                   color="#d84315" />
          <mu-icon value="keyboard_arrow_right"
                   slot="right" />
        </mu-list-item>
        <mu-divider/>
        <mu-list-item title="音乐">
          <mu-icon slot="left"
                   value="headset"
                   color="#1976d2" />
          <mu-icon value="keyboard_arrow_right"
                   slot="right" />
        </mu-list-item>
      </div>
    </mu-list>
  
    <mu-list>
      <div class="item">
      <mu-list-item title="阅读">
        <mu-icon slot="left"
                 value="book"
                 color="#1e88e5" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="看点">
        <mu-icon slot="left"
                 value="whatshot"
                 color="#ef6c00" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="游戏">
        <mu-icon slot="left"
                 value="videogame_asset"
                 color="#00e5ff" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>
    <mu-list>
      <div class="item">
      <mu-list-item title="京东购物">
        <mu-icon slot="left"
                 value="shopping_cart"
                 color="#1e88e5" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>  
  </div>
</template>
<script>
export default({
  name: 'dynamic'
})
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.dynamic
  .item
    background: color-w
  .mu-item.show-left
    padding-left: 56px
  .gap
    position:relative
    height: 2vh
  .gap-1
    height: 2vh
  .tab
    height: 12vh
    background: colot-w
    .mu-tabs
      background:color-w
      color:color-b
</style>
