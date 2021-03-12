const LoadScripts = (props) => {
    const scriptList = props.scriptList;
    return (
        <>
            {scriptList.map((data, index) => {
                return <script type="text/javascript" key={index} src={data.src || ""}>{data.textContent || ""}</script>
            })}
        </>
    )
}

export default LoadScripts