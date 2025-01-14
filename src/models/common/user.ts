export interface IUser {
    isAuthenticated: boolean,
    menus: Array<any>,
}

export const defaultUser: IUser = {
    isAuthenticated: false,
    menus: [
        {
            "header": "Status",
            "hiddenOnCollapse": true
        },
        {
            "href": "/dashboard",
            "title": "Dashboard",
            "icon": "fas fa-gauge"
        },
        {
            "separator": true
        },
        {
            "header": "Cloud",
            "hiddenOnCollapse": true
        },
        {
            "href": "/cloud",
            "title": "Cloud Mgmt",
            "icon": "fas fa-cloud"
        },
        {
            "separator": true
        },
        {
            "header": "Management",
            "hiddenOnCollapse": true
        },
        {
            "href": "/management/image",
            "title": "Image Mgmt",
            "icon": "fas fa-box-archive",
            "child": [{
                "href": "/management/image/test",
                "title": "Image Test",
                "icon": "fas fa-face-grimace"
            }]
        },
        {
            "href": "/management/security",
            "title": "Security Mgmt",
            "icon": "fas fa-shield-halved"
        },
        {
            "href": "/management/user",
            "title": "User Mgmt",
            "icon": "fas fa-people-roof"
        }
    ]
}