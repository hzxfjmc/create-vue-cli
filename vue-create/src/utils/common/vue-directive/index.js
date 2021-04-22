import Vue from 'vue'
import Webp from './webp'

/**
 * 该指令参数为 Boolean值，当为 true 的时候，会讲该 dom 移动到容器顶部
 */
Vue.directive('scrollIntoView', (el, binding) => {
    if (binding.value) {
        Vue.nextTick(() => {
            el.scrollIntoView()
        })
    }
})
/**
 * 该指令参数为 Boolean值，当为 true 的时候，会讲该 dom 移动到容器顶部
 */
Vue.directive('trim', {
    update: el => {
        el.value = el.value.replace(/\s/gi, '')
    }
})

/**
 * 通过该指令，如果dom有 src 属性，会将 src 重新定位到原路径的  webp/imgName.webp
 * 例如 /newoffline/static/images/offline-icon.png => /newoffline/static/images/webp/offline-icon.webp
 * 如果没有 src 属性，会在 dom 上加一个 webp class。可以通过样式文件制定 webp 图片地址
 * 也可以 用 v-webp="webp-source-path" 来指定 webp 图片地址
 */
function isWebp(src) {
    return src.substr(src.length - 4) === 'webp'
}

Vue.directive('webp', (el, binding) => {
    if (Webp.canUseWebP()) {
        if (binding.value) {
            el.src = binding.value
        } else if (el.src && !isWebp(el.src)) {
            let imageSrc = el.src
            let lastPathIndex = imageSrc.lastIndexOf('/') + 1
            let fileName = imageSrc.substr(lastPathIndex)
            let webpPath =
                imageSrc.substr(0, lastPathIndex) +
                'webp/' +
                fileName.substr(0, fileName.lastIndexOf('.')) +
                '.webp'
            el.src = webpPath
        } else if (!el.src && el.classList) {
            el.classList.add('webp')
        }
    }
})
