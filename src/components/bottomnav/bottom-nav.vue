<template>
  <mu-bottom-nav :value="bottomNav"
                 @change="handleChange"
                 class="bottom-nav">
  
    <mu-bottom-nav-item value="message"
                        title="消息"
                        icon="chat_bubble_outline"
                        :iconClass="[ isActive[0]&&'color-b' ]"
                        :titleClass="[ isActive[0]&&'color-b' ]" />
  
    <mu-bottom-nav-item value="friends"
                        title="联系人"
                        icon="people"
                        :iconClass="[ isActive[1]&&'color-b' ]"
                        :titleClass="[ isActive[1]&&'color-b' ]" />
  
    <mu-bottom-nav-item value="dynamic"
                        title="动态"
                        icon="star"
                        :iconClass="[ isActive[2]&&'color-b' ]"
                        :titleClass="[ isActive[2]&&'color-b' ]" />
  
  </mu-bottom-nav>
</template>

<script>
export default {
  name: 'bottomNav',
  data() {
    return {
      bottomNav: 'message'
    }
  },
  computed: {
    // 关于样式设置完全可以用覆盖的形式，这里只是没事找事罢了
    isActive() {
      let arr = ['message', 'friends', 'dynamic']
      let x = []
      x[arr.indexOf(this.bottomNav)] = true
      return x
    }
  },
  methods: {
    // 点击按钮
    handleChange(val) {
      this.bottomNav = val
      // 路由跳转至当前点击的页面
      this.$router.push(val)
      // 改变title
      switch (val) {
        case 'message':
          val = '消息'
          break
        case 'friends':
          val = '联系人'
          break
        case 'dynamic':
          val = '动态'
          break
      }
      this.$store.commit('changTitle', { title: val })
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom-nav
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
</style>
