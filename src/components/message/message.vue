<template>
  <!--判定ajax结束后，且有消息列表存在才开始渲染组件，防止报错-->
  <mu-list v-if="isAjax&&nowMessageList">
    <!--设置列表删除时动态效果-->
    <div v-for="(item, index) of nowMessageList"
         :class="[{swipeleft: isSwipe[index]},'wrap']"
         @click="getActiveId_x(item._id)"
         ref="child"
         :key="index">
  
      <mu-list-item :title="item.friend.name"
                    :describeLine="1"
                    :disableRipple="true"
                    class="list-item">
        <!--头像-->
        <mu-avatar :src="item.friend.avatar"
                   slot="leftAvatar" />
        <!--预览信息-->
        <span slot="describe">
            <span style="color: rgba(0, 0, 0, .5)" v-text="item.list[item.list.length-1].message"></span>
        </span>
        <!--时间与待处理-->
        <div class="item-right"
             slot="right">
          <!--获取到当前聊天队列，最后一条内容的time-->
          <span class="time" v-text="item.list[item.list.length-1].time"></span>
          <!--数据条数-数据需求是为字符串-->
          <mu-badge 
                  circle
                  :content="`${item.list.length}`" />
        </div>
      </mu-list-item>
      <!--滑动操作-->
      <div class="ms-item post-top" @click.stop="postItem(item._id)">置顶</div>
      <div class="ms-item sign-read" @click.stop="signItem(item._id)">标为已读</div>
      <div class="ms-item delete" @click.stop="removeItem(item._id)">删除</div>
    </div>
  
  </mu-list>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'message',
  data() {
    return {
      isSwipe: [false, false, false]
    }
  },
  computed: {
    ...mapGetters(['nowMessageList']),
    // ajax是否已经结束
    ...mapState(['isAjax'])
  },
  methods: {
    ...mapMutations(['showDialog', 'getActiveId', 'zeroRemove', 'removeMessage']),
    // 获取点击的friend的_id
    getActiveId_x(id) {
      this.getActiveId({ activeId: id })
      this.showDialog()
    },
    // 置顶
    postItem(_id) {
      console.log(2)
    },
    // 标为已读
    signItem(_id) {
      console.log(3)
    },
    // 删除信息
    removeItem(_id) {
      this.removeMessage({ _id })
    }
  },
  created() {
    setTimeout(() => {
      // 判断是否存在信息列表
      if (this.$refs.child) {
        this.$refs.child.forEach((element, index) => {
          let x, y, X, Y, swipeX, swipeY
          // 监听touchstart
          element.addEventListener('touchstart', e => {
            x = e.changedTouches[0].pageX
            y = e.changedTouches[0].pageY
            swipeX = true
            swipeY = true
            this.isSwipe = [false, false, false]
          })
          element.addEventListener('touchmove', e => {
            X = event.changedTouches[0].pageX
            Y = event.changedTouches[0].pageY
            if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
              // 阻止默认事件
              e.stopPropagation()
              // 右滑
              if (X - x > 10) {
                e.preventDefault()
                this.isSwipe.splice(index, 1, false)
              }
              if (x - X > 10) {
                e.preventDefault()
                this.isSwipe.splice(index, 1, true)
              }
              swipeY = false
            }
            if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
              swipeX = false
            }
          })
        })
      }
    }, 1000)
  }
}
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.mu-list
  overflow: hidden
  background: color-g
  // 左滑删除
  .swipeleft
    transform:translateX(-45%)
  .wrap
    display: flex
    width: 200%
    overflow: hidden
    transition:all 0.3s linear
    border-b-1px(rgba(0,0,0,.1))
    .list-item
      width: 50%
      background: color-w
      transition:all 0.3s linear
    .ms-item
      width: 15%
      padding: 1.5em 0
      font-size: 1.2em
      font-weight: 500
      text-align: center
      color: color-w
    .post-top
      background: #bdbdbd
    .sign-read
      background: #64dd17
    .delete
      background: #ff1744
  .item-right
    position:relative
    .time
      position: absolute
      top: -10px
      left: -16px
      display: inline-block 
    .mu-badge
      position: absolute
      top: 0
      left: 50%
      width:auto
      border-radius: 8px ;
      min-width:16px
      height:16px
      transform: translateX(-50%)
</style>
