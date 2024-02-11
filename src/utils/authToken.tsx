export default function authToken() {

    const authToken = localStorage.getItem('acess_token') as string;

    if (authToken) {
        return authToken;
    } else {
        return null;
    }
}
