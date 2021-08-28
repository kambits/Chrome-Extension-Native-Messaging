#!/Users/kambit/.pyenv/shims/python3 -u

import sys
import json
import struct
import time
import logging
logging.basicConfig(filename='host.log', level=logging.DEBUG)

# Python 3.x version
# Read a message from stdin and decode it.
def getMessage():
    rawLength = sys.stdin.buffer.read(4)
    if len(rawLength) == 0:
        # sys.exit(0)
        return ""
    messageLength = struct.unpack('@I', rawLength)[0]
    message = sys.stdin.buffer.read(messageLength).decode('utf-8')
    return message
    # return json.loads(message)

# Encode a message for transmission,
# given its content.
def encodeMessage(messageContent):
    encodedContent = json.dumps(messageContent).encode('utf-8')
    encodedLength = struct.pack('@I', len(encodedContent))
    return {'length': encodedLength, 'content': encodedContent}

# Send an encoded message to stdout
def sendMessage(encodedMessage):
    sys.stdout.buffer.write(encodedMessage['length'])
    sys.stdout.buffer.write(encodedMessage['content'])
    sys.stdout.buffer.flush()


while True:
    time.sleep(3)
    receivedMessage = getMessage()
    logging.info(f"receive message: {receivedMessage}")
    message = "Host to app!"
    logging.info(f"sending message: {message}")
    sendMessage(encodeMessage(message))
