const fs = require('fs');

function getMessage () {
    var input = []
    var chunk
    while (chunk = process.stdin.read()) {
        input.push(chunk)
    }
    input = Buffer.concat(input)

    var msgLen = input.readUInt32LE(0)
    var dataLen = msgLen + 4

    if (input.length >= dataLen) {
        var content = input.slice(4, dataLen)
        var json = JSON.parse(content.toString())
        // handleMessage(json)
        return json
    }
    return false
}

function sendMessage (msg) {
    var buffer = Buffer.from(JSON.stringify(msg))

    var header = Buffer.alloc(4)
    header.writeUInt32LE(buffer.length, 0)

    var data = Buffer.concat([header, buffer])
    process.stdout.write(data)
}

process.stdin.on('readable', () => {
    var receivedMessage = getMessage()
    if (receivedMessage) {
        if (receivedMessage) {
            sendMessage("Message is received!");
        }
    }
})

setInterval(() => {
    message = "Host to app!";
    sendMessage(message);
}, 3000);

