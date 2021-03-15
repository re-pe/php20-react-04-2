/* eslint-disable react/no-array-index-key */
import React from 'react';
import ScriptTag from 'react-script-tag';

const LoadScripts = (props) => {
    const { scriptList } = props;
    return (
        <>
            {scriptList
                .map((data, index) => (
                    <ScriptTag type="text/javascript" key={index} src={data.src || ''}>
                        {data.textContent || ''}
                    </ScriptTag>
                ))}
        </>
    );
};

export default LoadScripts;
