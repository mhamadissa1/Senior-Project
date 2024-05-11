
function Avatar(props) {
    return (
        <>
            <img className={`w-8 h-8 rounded-full ${props.className}`} src={props.img} alt="avatar_img" />
        </>
    )
}
 
export default Avatar;