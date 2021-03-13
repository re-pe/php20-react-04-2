import React from 'react';
import ScriptTag from 'react-script-tag';

const LoadScripts = (props) => {
    const { scriptList } = props;
    return (
        <>
            {scriptList
                .map((data, index) => ({ ...data, id: index }))
                .map((data) => (
                    <ScriptTag type="text/javascript" key={data.id} src={data.src || ''}>{data.textContent || ''}</ScriptTag>
                ))}
        </>
    );
};

export default LoadScripts;
