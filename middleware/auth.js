export default function({ store, redirect }) {

    if (localStorage.getItem('users')) {

    } else {
        console.log("in MiddleWare");
        redirect("/login");
    }
}