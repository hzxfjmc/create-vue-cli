const appId = '786705808367640'

export function facebookShare(link, callbackUrl) {
    const host = `https://www.facebook.com/dialog/share`
    let url = `${host}?app_id=${appId}&display=popup&href=${link}redirect_uri=${callbackUrl}`
    window.location.href = url
}
