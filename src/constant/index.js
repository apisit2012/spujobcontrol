export const HTTP_DASHBOARD_FETCHING = 'HTTP_DASHBOARD_FETCHING'
export const HTTP_DASHBOARD_SUCCESS = 'HTTP_DASHBOARD_SUCCESS'
export const HTTP_DASHBOARD_FAIL = 'HTTP_DASHBOARD_FAIL'

export const HTTP_ACCOUNT_FETCHING = 'HTTP_ACCOUNT_FETCHING'
export const HTTP_ACCOUNT_SUCCESS = 'HTTP_ACCOUNT_SUCCESS'
export const HTTP_ACCOUNT_FAIL = 'HTTP_ACCOUNT_FAIL'

export const HTTP_LOGIN_FECTHING = 'HTTP_LOGIN_FECTHING'
export const HTTP_LOGIN_SUCCESS = 'HTTP_LOGIN_SUCCESS'
export const HTTP_LOGIN_FAIL = 'HTTP_LOGIN_FAIL'

export const DASHBOARD_REFRESH = 'DASHBOARD_REFRESH'
export const SETCOMPONENT = 'SETCOMPONENT'


export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const ipaddress = "http://172.29.24.204:8089"

export const Server = {

    // Account
    login:`${ipaddress}/authen/login`,

    // Add Event
    addEvent:`${ipaddress}/add/addevent`,
    editEvent:`${ipaddress}/add/updateevent`,
    reviewEvent:`${ipaddress}/add/reviewevent`,
    approveEvent:`${ipaddress}/add/approveevent`,
    closejobEvent:`${ipaddress}/add/closejobevent`,

    // Search Event    
    jobtypenameline:`${ipaddress}/event/getevent`,

    // Dashboard
    dashboard:`${ipaddress}/dashboard/dashboard`,

    // Search Assign
    searchAssign:`${ipaddress}/authen/findaccounttoassignjob`,


    // Search Assign
    searchComponent:`${ipaddress}/component/findcomponent`,


    // Notificagion
    render:`${ipaddress}/notification/render`,
    bange:`${ipaddress}/notification/bange`,
    read:`${ipaddress}/notification/read`,


    // Report
    findallReport:`${ipaddress}/report/findall`,
}
const data=[
    {id:1, name:"iphone"},
    {id:2, name:"samsung"},
    {id:3, name:"vivo"}
]