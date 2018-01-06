import Util from '@/libs/util'

//  验证token
export const getAccessToken = data => Util.http.get('/core/token?code=' + data.code + '&type=' + data.type, {})
