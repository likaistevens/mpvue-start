<template>
  <div>
    <img :src="imgUrl" :style="{width: size + 'rpx', height: size + 'rpx'}" alt="">
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
export default {
  name: 'Icon',
  props: {
    size: {
      type: [Number, String],
      default: 36
    },
    src: {
      type: [String],
      default: ''
    },
    color: {
      type: [String],
      default: ''
    }
  },
  data () {
    return {
      // base64
      imgUrl: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    if (this.color) {
      console.log(this.color)
      // 1. 读取svg图片
      wx.getFileSystemManager().readFile({
        filePath: this.src,
        encoding: 'binary',
        success: (res) => {
          const reg = /fill="#[a-zA-Z0-9]{0,6}"/g
          console.log(res.data)
          let str = ''
          if (reg.test(res.data)) {
            // fill属性存在
            console.log(reg.test(res.data))
            str = res.data.replace(reg, 'fill="' + this.color + '"')
          } else {
            console.log('fill不存在')
            // fill属性不存在
            str = res.data.replace(/<path\s/g, '<path fill="' + this.color + '" ')
          }
          console.log(str)
          const base64 = Base64.encode(str)
          this.imgUrl = 'data:image/svg+xml;base64,' + base64
        }
      })
      // 2. 修改fill属性  svg -> fill 判断是否有fill属性
      // 3. base64 svg -> base64
      // 4. imgUrl = base64
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
