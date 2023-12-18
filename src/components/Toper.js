export default function Toper(props) {
    return (
        <div id="Toper">
            <div className="left box">
                <div>
                    { props.mail }
                </div>
                <div>
                    { props.phone }
                </div>
            </div>

            <div className="space"></div>

            <div className="right box">
                <div>
                    { props.horaires }
                </div>
                <div className="reseaux">
                    {
                        props.facebook ? <a target='_blank' rel='noreferrer' href={ props.facebook }><img src='/images/facebook.png' alt='facebook' /></a> : ''
                    }
                    {
                        props.instagram ? <a target='_blank' rel='noreferrer' href={ props.instagram }><img src='/images/instagram.png' alt='instagram' /></a> : ''
                    }
                    {
                        props.tiktok ? <a target='_blank' rel='noreferrer' href={ props.tiktok }><img src='/images/tiktok.png' alt='tiktok' /></a> : ''
                    }
                </div>
            </div>
        </div>
    )
}