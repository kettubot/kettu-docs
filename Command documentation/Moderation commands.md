# Moderation commands

Moderation commands are for moderators to help protect your sever, from manual actions such as ban or kick or useful utilities such as slowmode. Kettu always logs in the audit log what user was responsible for any given moderation action.

![Example from the audit log](https://cdn.discordapp.com/attachments/691776444283748362/738897183968985179/unknown.png)

## Moderation Logs

You can set moderation logs to log moderation actions against users such as bans, strikes, mutes, etcetera. A screen shot of Kettu's moderation log in action is shown below.

![Kettu's mod log](https://cdn.discordapp.com/attachments/713861338673184858/739563143998472303/unknown.png)

## Command Reference

**/ban <@User/ID> [@User/ID]... [reason] [--nsfw] [--link= / image]**

This command bans bad Fluffballs. The NSFW flag removes the users avatar from the moderation log. The link flag adds an image to the reason, uploading an image also has the same result.

Aliases: `b`, `bean`

Permission Level: `BAN_MEMBERS`

--------

**/check <@User/ID>**

Gives you general current punishment info about a user.

Aliases: `lookup`

Permission Level: `BAN_MEMBERS`

--------

**/history <@User/ID> | <Case#>**

Searches a user for their punishments if a user argument is given and gives more detailed info of a case if a case number is given.

Aliases: `search`, `searchall`, `modlog`, `modlogs`, `warnings`

Permission Level: `BAN_MEMBERS`

--------

**/kick <@User/ID> [@User/ID]... [reason] [--nsfw] [--link= / image]**

This command kicks a bad Fluffball. The NSFW flag removes the users avatar from the moderation log. The link flag adds an image to the reason, uploading an image also has the same result.

Aliase: `k`

Permission Level: `BAN_MEMBERS`

--------

**/lockchannel [#channel/ID] [Reason] [--nsfw] [--hide]**

Locks a channel, preventing people from speaking. [Click here](https://kettu.cc/docs/Guides/setting_up_lockchannel) to read a guide on how to set permissions up. The nsfw flag marks the channel as nsfw. The hide flag hides the channel.

Aliases: `lc`, `lock`

Permission Level: `BAN_MEMBERS`

--------

**/lockserver**

Locks a server, preventing people from speaking. [Click here](https://kettu.cc/docs/Guides/setting_up_lockserver) to read a guide on how to set permissions up.

Aliases: `lc`, `lock`

Permission Level: `MANAGE_GUILD`

--------

**/mute <m/h/d/w/M/y/perm> <@User/ID> [@User/ID]... [reason] [--nsfw] [--link= / image]**

This command mutes a bad Fluffball. The NSFW flag removes the users avatar from the moderation log. The link flag adds an image to the reason, uploading an image also has the same result. An example time might be `2w4d` for 2 weeks and 4 days.

--------

**/pardon <Case#> [reason] [--nsfw] [--link= / image]**

This command deletes a case/strike.

Aliases: `dp`, `deletepunish`, `deletepunishment`

Permission Level: `BAN_MEMBERS`

--------

**/purge <limit> [#channel] [@User/ID] [m/h/d/w] ["content"] [\`regex content`] [bots] [onlyusers] [includepins] [embed] [link] [image]**

Purges messages. Run the command with no arguments to see a list of all arguments.

Permission Level: `MANAGE_MESSAGES`

--------

**/raidmode [kick/ban/on/off]**

Sets the servers raidmode state if args are given, otherwise it returns the current mode.

Permission Level: `BAN_MEMBERS`

--------

**/reason <case> <new reason>**

Changes the reason of a case.

Permission Level: `BAN_MEMBERS`

--------

**/slowmode <second(s)> [#channel/ID] [Reason]**

Sets a slowmode on a channel. If a channel is mentioned the slowmode will be set there.

Aliases: `slow`, `sm`, `setslowmode`

Permission Level: `MANAGE_MESSAGES`

--------

**/softban <@User/ID> [@User/ID]... [reason] [--nsfw] [--link= / image]**

This command bans a bad Fluffball then unbans them deleting their last 24 hours of messages. The NSFW flag removes the users avatar from the moderation log. The link flag adds an image to the reason, uploading an image also has the same result.

Aliases: `sb`, `deletekick`

Permission Level: `BAN_MEMBERS`

--------

**/strike <@User/ID> [@User/ID]... [reason] [--nsfw] [--link= / image] [--strike1-100]**

This command strikes a bad Fluffball. The NSFW flag removes the users avatar from the moderation log. The link flag adds an image to the reason, uploading an image also has the same result.

Aliases: `s`, `w`, `warn`

Permission Level: `BAN_MEMBERS`

--------

**/unban <@User/ID> [@User/ID]... [reason] [--nsfw] [--link= / image]**

This command unbans a Fluffball. The NSFW flag removes the users avatar from the moderation log. The link flag adds an image to the reason, uploading an image also has the same result.

Aliase: `ub`

Permission Level: `BAN_MEMBERS`

--------

**/unlockchannel [#channel/ID] [Reason] [--nsfw] [--hide]**

This command unlocks a channel. The nsfw flag unmarks the channel as nsfw. The unhide flag hides the channel.

Aliases: `unlock`, `uc`

Permission Level: `BAN_MEMBERS`

--------

**/unlockserver**

Unlocks the server.

Aliases: `us`, `unlockdown`

Permission Level: `MANAGE_GUILD`

--------

**/unmute <@User/ID> [@User/ID]... [reason] [--nsfw] [--link= / image]**

This command unmutes a poor Fluffball.

Aliase: `um`

Permission Level: `BAN_MEMBERS`

--------
