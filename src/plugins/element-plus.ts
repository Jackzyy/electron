import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/notification/style/css'

import { ElNotification, ElMessage } from 'element-plus'

export default {
  install: (app: any) => {
    app.config.globalProperties.$ELEMENT = {
      size: 'small'
    }
    app.use(ElNotification)
    app.use(ElMessage)
  }
}
