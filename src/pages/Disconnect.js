export default function Disconnect() {
    localStorage.clear();
    window.location.href = '/';

    return (
    <>
        Vous êtes déconnecté(e).
    </>)
}