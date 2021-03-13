import ScriptTag from 'react-script-tag';

const LoadScripts = (props) => {
    const scriptList = props.scriptList;
    return (
        <>
            {scriptList.map((data, index) => {
                return <ScriptTag type="text/javascript" key={index} src={data.src || ""}>{data.textContent || ""}</ScriptTag>
            })}
        </>
    )
}

export default LoadScripts