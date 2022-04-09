export const HTTP_DASHBOARD_FETCHING = 'HTTP_DASHBOARD_FETCHING'
export const HTTP_DASHBOARD_SUCCESS = 'HTTP_DASHBOARD_SUCCESS'
export const HTTP_DASHBOARD_FAIL = 'HTTP_DASHBOARD_FAIL'

export const HTTP_ACCOUNT_FETCHING = 'HTTP_ACCOUNT_FETCHING'
export const HTTP_ACCOUNT_SUCCESS = 'HTTP_ACCOUNT_SUCCESS'
export const HTTP_ACCOUNT_FAIL = 'HTTP_ACCOUNT_FAIL'


const ipaddress = "http://172.29.24.39:8089"

export const Server = {

    // Add Event
    addEvent:`${ipaddress}/add/addevent`,
    reviewEvent:`${ipaddress}/add/reviewevent`,
    approveEvent:`${ipaddress}/add/approveevent`,
    closejobEvent:`${ipaddress}/add/closejobevent`,

    // Search Event

    // Dashboard
    dashboard:`${ipaddress}/dashboard/dashboard`,


}