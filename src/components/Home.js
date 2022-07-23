import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [inputData, setInputData] = useState('')
    const [outputData, setOutputData] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setOutputData(errorMessage)
    }, [errorMessage])

    const handleJsonInput = event => {
        setInputData(event.target.value)
        console.log(event.target.value)
    }

    const handleFormatData = () => {
        try {
            const formattedData = JSON.stringify(JSON.parse(inputData), null, 4)
            setOutputData(formattedData)
        }
        catch (err) {
            setErrorMessage(err.message)
        }

    }

    const handleClearData = () => {
        setOutputData('')
        setInputData('')
    }

    return (
        <section>
            <div className='controls'>
                <button type='button' className='format-button' onClick={handleFormatData}>Format JSON</button>
                <button type='button' className='clear-button' onClick={handleClearData}>Clear Data</button>
            </div>
            <div className='json-container'>
                <div className='json-input-container'>
                    <label htmlFor="json-input">Enter JSON Data</label>
                    <textarea className='json-input' name='jsonInput' value={inputData} onChange={handleJsonInput}></textarea>
                </div>
                <div className='json-output-container'>
                    <label htmlFor="json-output">Formatted JSON Data</label>
                    <textarea className='json-output' name='jsonOutput' defaultValue={outputData} style={(outputData === errorMessage) ? { color: 'red' } : { color: 'black' } || (typeof outputData === 'string') ? { color: 'green' } : { color: 'red' }} ></textarea>
                </div>
            </div>
        </section>
    );
};

export default Home;