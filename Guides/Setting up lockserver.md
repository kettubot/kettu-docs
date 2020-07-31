
# Setting up lockserver

In this guide will go over how to setup your Discord permissions to effectively use the lockserver command. If you do **not** know Discord permissions very well please read [this Discord guide](https://successofone.com/discord/the-complete-guide-to-discord-permissions/) on permissions. It will help greatly if you know Discords permission system before hand.

## How to Setup the Lockserver Command

In order for this command to work properly you will need to make sure that none of the normal users **do not** have **any** `send message` channel override set to on ✅. The lockserver command works by removing the send messages permission from the @everyone role. Anyone who has a channel override for send messages will not be affected by this command. Make sure that the only uses with this override are the members you want to not be affected by this (e.g. staff and bots). 

[Click here](https://discord.new/8TCrc5qQunRW) for an example server of how Discord permissions should be for this command.
