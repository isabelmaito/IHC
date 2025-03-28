import React, { useEffect, useState } from "react"

const TextToSpeech = ({ text }) => {
    const [voices, setVoices] = useState([])

    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices()
            setVoices(availableVoices)
        }

        loadVoices()
        window.speechSynthesis.onvoiceschanged = loadVoices
    })

    const speak = () => {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = "pt-BR"
        window.speechSynthesis.speak(utterance)
    }

    return <button onClick={speak}>Ouvir</button>
}

export default TextToSpeech
