<template>
  <div class="pt20 pl100 pr100">
    <div class="sub_title">表单组件</div>
    <form-view @submit="submitForm"></form-view>
  </div>
</template>
<script>
import '../../style/main.m.scss';
import FormView from "../../components/FormView.vue";
import { onOpen } from '../../utils/utils.m';
export default {
  components: {
    FormView,
  },
  data() {
    return {
    }
  },
  methods: {
    submitForm(form) {
      console.log(form)
      // 跳转到world页面
      onOpen('app', 'world');
    }
  },
}
</script>
<style scoped lang="scss">
</style>