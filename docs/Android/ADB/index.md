---
title: ADB
lang: en-US
---

Android Debug Bridge (adb) is a versatile command-line tool that lets you communicate with a device.

### Components:
* **client**, which sends commands. The client runs on your development machine. You can invoke a client from a command-line terminal by issuing an adb command.
* **daemon (adbd)**, which runs commands on a device. The daemon runs as a background process on each device.
* **server**, which manages communication between the client and the daemon. The server runs as a background process on your development machine.

## Basic adb commands

### List all devices

List all instances that are connected to the adb server. The `-l` option, the devices command tells you what the device is.

```
adb devices -l
```

Send commands to a specific device. If there's only one emulator running or only one device connected, the adb command is sent to that device by default.

```
$ adb devices
List of devices attached
emulator-5554 device
emulator-5555 device

$ adb -s emulator-5555 install helloWorld.apk
```

### Install an app

```
adb install path_to_apk
```

### Set up port forwarding

```
adb forward tcp:6100 tcp:7100
```

### Copy a file or directory from the device

```
adb pull remote local
```

### Copy a file or directory to the device

```
adb push local remote
```

### Stop the adb server

```
adb kill-server
```

### Issue shell commands

You can use the shell command to issue device commands through adb.

```
adb [-d |-e | -s serial_number] shell shell_command
```

### Start interactive shell on a device

```
adb [-d | -e | -s serial_number] shell
```

### Exit the interactive shell

```
exit
```

## Activity Manager (am)

Issue commands with the activity manager (am) tool to perform various system actions, such as start an activity, force-stop a process, broadcast an intent, modify the device screen properties, and more.

In shell syntax
```
am _command_
```

directly from adb
```
adb shell am start -a android.intent.action.VIEW
```

## Package Manager (pm)

Issue commands with the package manager (pm) tool to perform actions and queries on app packages installed on the device

In shell syntax
```
am _command_
```

directly from adb
```
adb shell pm uninstall com.example.MyApp
```

## Device Policy Manager (dpm)

To help you develop and test your device management (or other enterprise) apps, you can issue commands to the device policy manager (dpm) tool. Use the tool to control the active admin app or change a policy's status data on the device.

In shell syntax
```
dpm _command_
```

directly from adb
```
adb shell dpm command
```

[Read more about ADB](https://developer.android.com/studio/command-line/adb)

