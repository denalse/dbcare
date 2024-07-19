// import "./App.css";
import { useState } from 'react';
import axios from 'axios'

const Text2Speech = () => {
  const [text, setText] = useState();
  const [audioSrc, setAudioSrc] = useState(null);
  
  const handleSynthesize = async () => {
    let config = {
      headers: {
        Authorization: 'Bearer "ya29.a0AXooCgsNhkzZJzAFEdani7Oe-D8ufMJuv2mYFnvICVgRdexAIfwPK6ZynKAdCpO-wAU2olfHeJ9Pekg3wSZ-Jd4ALv-o4xbx_i8j6WI0CilYFEnRs9MZsGDEA_pbn3mMtgRJ0-YgXwJ7MdiVVdDhkmsnkCH2hn7tOiRGvBbQEOqSkMQUa8uJ74SwA4Y-Dj8LxZr4FKR6OfVNQXp7KeAQVQd4qU4pwkkSTeMqv-7EZgWCNg7ARENHV4_xXkV1N4I-_1oNDQZtSQGhADBHQmUZnAARSLDmQhTivRd-MxlRkZkeGvMGUA1VOmxF4KBB3WRvYnU_k3l5WzGRpdNk7l5Gc33jh7WtKL8JMLGxe5tVL4D9aWXpjYch08VlqzhLWb2q0EezHQcrryn_AMdkA9UQUnmLWLTcTDEzaCgYKAU8SARMSFQHGX2Migjtbx7AenabV3tTyGB-ulw0423',
        "x-goog-user-project": "hack-team-technotf-2024",
        "Content-Type": "application/json; charset=utf-8"
      }
    }
    const endpoint = "https://texttospeech.googleapis.com/v1/text:synthesize"
    const payload = {
      "audioConfig": {
        "audioEncoding": "MP3",
        "pitch": 0,
        "speakingRate": 0.5
      },
      "input": {
        "text": text
      },
      "voice": {
        "languageCode": "en-GB",
        "name": "en-GB-Studio-B"
      }
    }
    const response = await axios.post(endpoint, payload, config)
    const audioSrc = `data:audio/mp3;base64,${response.data.audioContent}`
    console.log(response.data.audioContent)
    setAudioSrc(audioSrc)
  };

  return (
    <div className="App">
      <h1>Text to Speech</h1>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter" />
      <br />
      <button onClick={handleSynthesize}>Synthesize</button>
      <br />
      {audioSrc && <audio controls autoPlay src={audioSrc} />}
    </div>
  );
}

export default Text2Speech;