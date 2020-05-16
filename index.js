const express = require('express'); // express서버(앱/폴더명)요청(현재폴더 > node_module순으로 검색)
const app = express();

const PORT = 4000;

const handleListening = () => {
 console.log(`listening on: http://localhost:${PORT}`)
}

app.listen(PORT, handleListening);