# Chrome-Extension-Native-Messaging for Python and Nodejs

This is for building chrome extension post and receive native message with Python3 host and Nodejs host.

## Test ENV

## Test ENV for Python

```
Python 3.7.8
pip 20.1.1
```

##Test ENV for Nodejs

```
v12.22.2
```

## Test ENV for Chrome

```
Chrome version: 92.0.4515.131(x86_64)
```



# Host

This is the host app which interacts with Chrome extension. 

The `host` will check receive message from extension and send message to extension every 3s.

## How to build host binary file for Python.

The Python3 script is `host.py`. And the binary file: `host` is in host/python/dist.

```
pip install pyinstaller

cd host

pyinstaller -F ping_pong.py
```

## How to build host binary file for Nodejs.

The Nodejs script is `host.js`. And the binary file: `host` is in host/nodejs.

```
pkg host.js --targets node12-macos-x64
```



# APP

This is the Chrome extension. 

The extension will send message every 5s.



# com.company.app_test.json

The path and allowed_origins need to be updated.



# Issue

## Chrome extension: Native host has exited

The script cannot be used directly. Need to convert script into binary file by `pyintaller` or `pkg`.

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
4. https://github.com/simov/native-messaging
