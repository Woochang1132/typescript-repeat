type PageInfo = {
    title : string
};

type Page = 'home' | 'about' | 'contact'

// 한쪽을 key로 삼고 다른 한쪽을 type으로 사용하고 싶을 때 묶는다.
const nav: Record <Page, PageInfo> = {
    home : {title : 'home'},
    about : {title : 'About'},
    contact : {title : 'Contact'}
}
