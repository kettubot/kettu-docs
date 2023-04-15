# Slash default override

Kettu by default lets user use text or slash commands however, text commands respects slash commands permissions as if they where slash. Slash default override will override the default permissions (@everyone) allowing text commands to be used even if slash is not. 

For example, if you add a channel override for `#the-ultimate-hugging-zone` and an override disabling `all channels` any time a user attempts to run the k!hug command they will get an error message. In this instance the hug slash command will not appear for the user. 

![Hug command with overrides](https://cdn.discordapp.com/attachments/1089370527518433282/1096852389908201533/Discord_im912pjFYg.png)

![Hug command returning error message](https://cdn.discordapp.com/attachments/1089370527518433282/1096852693982642206/Discord_EPuG666OSH.png)

What if you don't want users using slash commands? Thats where slash default override plays in, if enabled you can disable the @everyone permission for slash commands and text commands will continue to function normally! Slash commands will not appear for normal users and text command will still respect all other overrides set. 

![@everyone disabled](https://cdn.discordapp.com/attachments/1089370527518433282/1096855197961166979/Discord_2IpOQvpuXa.png)


For the first example, even with slash default override enabled it will still throw an error if someone try's to run the hug command outside of the `#the-ultimate-hugging-zone.` This approach lets you fine tune your commands to suit your needs natively in Discord while still allowing you to hide slash commands. 

ℹ️ Notice, users with the administrator permissions will still be able to see and use slash commands in all channels, this is a Discord limitation. 