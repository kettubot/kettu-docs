
# Setting up lockchannel

In this guide will go over how to setup your Discord permissions to effectively use the lockchannel command. If you do **not** know Discord permissions very well please read [this Discord guide](https://successofone.com/discord/the-complete-guide-to-discord-permissions/) on permissions. It will help greatly if you know Discord's permission system beforehand.

## How to Setup the Lockchannel Command

In order for this command to work properly you will need to make sure that normal users **do not** have **any** roles with the `send message` channel override set to on ✅. If any user has this they will not be locked out of the channel when the command is ran. Only staff and other user who you want to be able to speak during the lock should have `send messages` overrided. The command works by denying the role `@everyone` from being able to speak. If the bot is unable to speak after locking the channel it will react to the command message with 🔒.

[Click here](https://discord.new/8TCrc5qQunRW) to see an example server of how this works in practice.
