<template>
  <div class="test">
    hello mp vue2
    <Icon src="/static/icons/svg/home.svg" size="60" color="#409EFF" />
  </div>
</template>

<script>
import Icon from '../../components/index.vue'

export default {
  name: '',
  components: {
    Icon
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
$color: red;
.test{
  color: $color;
}
</style>
