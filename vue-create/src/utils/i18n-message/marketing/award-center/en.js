export const en = {
    tips1: 'Funds are expected to be credited to your account on a trading day',
    tips2: 'Reward will be posted to your account within 3 -5 days.',
    tips3:
        'Reminder: The new commission plan is expected to take effect the next day',
    tips4:
        'Reminder: Upon activation, please quit the app and re-login again if the quotation service is not updated.',
    tips5: 'You can enjoy this offer in every uSMART Hong Kong branch.',
    conditionList: {
        1: 'Zero',
        2: 'First-time deposit amount to ',
        3: 'Accumulated deposit amount to ',
        4: 'Single deposit amount to ',
        5: 'First-time transaction amount to ',
        6: 'Accumulated transaction amount to ',
        7: 'Single transaction amount to ',
        8: 'Complete account opening amount to '
    },
    redemptionCode: 'Redemption Code',
    free: 'Commission offer',
    Usetips: 'Terms and Conditions',
    expireDays: res => {
        if (res < 1) {
            return `Expires today`
        }
        return `expire in ${res} days`
    },
    toBeUsed: 'Available',
    hasUsed: 'Redeemed',
    hasExpire: 'Invalid',
    canNotReach:
        'Can be used if the requirement are fulfilled in expiry period:',
    priceList: {
        0: 'HK and US Stock quotation',
        1: 'HK Stock Level 2 ',
        2: 'US Stock Level 1 '
    },
    quotation: 'Quotation',
    pjredemptionCode: 'Redemption Code',
    imediUse: 'Use Now',
    freecommission: ' $0 commission',
    firstConditonNo:
        'Have not fulfilled the requirements for first-time deposit/ transfer of shares',
    firstTradeNo:
        'Have not fulfilled the requirements for first-time transaction',
    gotoCenter: 'Visit Promotion Centre',
    noCard: 'No voucher available',
    uSmart: 'uSmart',
    noMore: 'No More',
    noActivity: 'Promotion Coming Soon',
    netError: 'The network is deserted. Please try again later.',
    activityCenterTitle: 'Promotion',
    awardCenterTitle: 'Reward',
    rmbWithDraw: 'Cash voucher withdrawal',
    noOpenAccout: 'You have not opened an account',
    openCanNext:
        'In order to keep your account secure, you need to complete the account before you can use it.',
    goToOpen: 'Go to open an account',
    goToGold: 'Deposit',
    goToTrade: 'Go to the transaction',
    cancel: 'Cancel',
    failureReason: 'Reason for failure',
    iKnow: 'I know',
    month: ' months',
    day: ' days',
    ok: 'ok',
    marketList: {
        0: 'Hong Kong stocks',
        1: 'Hong Kong stocks',
        2: 'US stocks'
    },
    confirmUseTitle: res => {
        return `Whether to use ${res}`
    },
    confirmUseMessage:
        '(Funds are expected to be credited to your account on a trading day)',
    confirmUseMessage3: 'Expect to complete the switch the next day after use',
    useDays: '',
    ever: 'Permanent',
    conditionOfUse: '',
    share: 'share',
    useSuccess: 'Used!',
    stockUsed: 'Thank you for your support! ',
    stockTips:
        'The voucher has been activated, the share(s) will be delivered to your account within 5 transactiond days. ',
    Processing: 'Processing'
}
