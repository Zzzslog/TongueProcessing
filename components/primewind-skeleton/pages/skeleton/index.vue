<template>
  <view class="demo-skeleton">
    <skeleton
      :loading="loading"
      :avatarSize="skeleton1.avatarSize"
      :row="skeleton1.row"
      :showTitle="skeleton1.showTitle"
    >
<!--      <view class="section-content">我是段落1</view> -->
    </skeleton>
  </view>
</template>

<script>
import Skeleton from '../../components/skeleton/index.vue'
export default {
  components: {
    Skeleton,
  },
  data() {
    return {
      loading: true,
      skeleton1: {
        avatarSize: '52px',
        row:5,
        showTitle: true,
      },
    }
  },
  created() {
    this.reloadData()
  },
  methods: {
    reloadData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
  },
}
</script>

<style>
/* .demo-skeleton {
  padding: 40rpx 0;
} */
.demo-skeleton /deep/ .section-content {
 padding: 40rpx;
  color: #999;
  font-size: 14px;
}
</style>
