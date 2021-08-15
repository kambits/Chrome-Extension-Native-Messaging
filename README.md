# Python3-Chrome-Extension-Native-Messaging

This is for building chrome extension post and receive native message with Python3 host.

## Test ENV

```
Python 3.7.8
pip 20.1.1

Chrome version: 92.0.4515.131(x86_64)
```





# Host

The Python3 script: `host.py` is here. And the binary file: `host` is in host/dist. This is the host app which interacts with Chrome extension. The `host.py` cannot used to interact with Chrome extension. 

The `host` will check receive message from extension and send message to extension every 3s.

## How to build host binary file.

```
pip install pyinstaller

cd host

pyinstaller -F ping_pong.py
```



# APP

This is the Chrome extension. 

The extension will send message every 5s.



# com.company.app_test.json

The path and allowed_origins need to b updated.



# Issue

## Chrome extension: Native host has exited

The python script cannot be used. Need to convert Python script into binary file by `pyintaller`.

The explination: `Do NOT create an App bundle for your command-line program,` is from https://stackoverflow.com/questions/27785153/how-to-fix-native-host-has-exited-error-in-chrome-browser-extension-native-me.



## Pyinstaller: OSError: Python library not found: Python, Python3, .Python, libpython3.7.dylib, libpython3.7m.dylib

Python3 need to be reinstall with ENV `PYTHON_CONFIGURE_OPTS="--enable-framework"`.

```
PYTHON_CONFIGURE_OPTS="--enable-framework" pyenv install 3.7.8
```

https://github.com/pyenv/pyenv/issues/1095





# Refernce

1. https://developer.chrome.com/docs/apps/nativeMessaging/
2. https://developer.chrome.com/docs/extensions/reference/runtime/#method-connectNative
3. https://github.com/kambits/Python3-Chrome-Extension-Native-Messaging
