---
title: Signing into Linux with a USB stick
date: 2021-04-03T23:00:00Z

---
I'm a student, and a bit stretched on cash, therefore, I didn't see the point in paying £40 for a YubiKey. I couldn't even justify a sum of £15 for a [SoloKey](https://solokeys.com/) hacker. So as you can probably tell, I didn't want to spend any money. I then found [this article](https://blog.kagesenshi.org/2007/07/usb-key-based-authentication-using.html), showing how to use `pam_usb` however it turned out that the article was written in 2007, and `pam_usb` didn't seem to be maintained, or compatible with Fedora.

This lead me to explore other avenues. I have a lot of USB sticks and SD cards, so I ended up settling with a udev rule to lock and unlock the screen when the drive was removed / inserted. I'll show you how I did it.

1. Plug in your drive
2. Run `lsusb` in your terminal
   <br />
   The output should be someyhing like this:
   ```
   Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
   Bus 001 Device 004: ID 8087:0a2b Intel Corp. Bluetooth wireless interface
   Bus 001 Device 013: ID 058f:6366 Alcor Micro Corp. Multi Flash Reader
   Bus 001 Device 003: ID 13d3:56c1 IMC Networks USB2.0 HD UVC WebCam
   Bus 001 Device 006: ID 046d:c52b Logitech, Inc. Unifying Receiver
   Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
   ```