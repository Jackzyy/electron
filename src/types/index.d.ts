import { Notify, Message } from 'element-plus'

// 扩展Vue全局属性
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $notify: Notify
    $message: Message
  }
}
