export default function Paragraph(props) {
    // code js
    return (
        <>
            <p className={"p-"+props.picturePosition}>
                <img src={ props.pictureUrl } alt={ props.pictureAlt } className={ "img-"+props.picturePosition } />
                { props.children }
            </p>
        </>
    )
}