// finance-info-server
import bondBanner from './finance-info-server/get-bond-banner'
import bondDetail from './finance-info-server/get-bond-detail'
import bondList from './finance-info-server/get-bond-list'
import bondPrices from './finance-info-server/get-bond-prices'
import bondCurrentPrices from './finance-info-server/get-current-bond-prices'
import bondOrder from './finance-server/bond-order'

// user-server
import bondRiskAutograph from './user-server/bond-risk-autograph'
import riskAssessAnswer from './user-server/risk-assess-answer'
import riskAssessResult from './user-server/risk-assess-result'
import riskAssessSubject from './user-server/risk-assess-subject'
import getCurrentUser from './user-server/get-current-user'

// config-manager
import selectProtocolInfo from './config-manager/select-protocol-info'

import feePackageCurr from './product-server/fee-package-curr'
export default {
    bondBanner,
    bondDetail,
    bondList,
    bondPrices,
    bondCurrentPrices,
    bondOrder,

    bondRiskAutograph,
    riskAssessAnswer,
    riskAssessResult,
    riskAssessSubject,
    getCurrentUser,

    selectProtocolInfo,

    feePackageCurr
}
