let supportWebP = false

let elem = document.createElement('canvas')

if (elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    supportWebP = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
} else {
    // very old browser like IE 8, canvas not supported
    supportWebP = false
}

/**
 * 是否支持webP
 * @returns supportWebP: boolean
 */
function canUseWebP() {
    return supportWebP
}

export default { canUseWebP }
