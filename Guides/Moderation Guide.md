# The Ultimate Kettu Moderation Guide

Kettu has many powerful moderation commands to help keep your server safe from bad actors, in this guide we will break down all of Kettu's moderation features in depth. If you haven't already, check out our [moderation command reference](https://kettu.cc/docs/command-documentation/moderation-commands) to learn more about individual command syntaxes.

## User Moderation Commands

Unlike most Kettu commands, the user moderation commands act slightly differently between slash and text commands. Slash commands can only support a max of 5 users while text can handle as many as you can fit in 2000 characters (or 4000 for those nitro users). Slash commands also have easy to use options whereas text commands have flags, e.g. --nsfw, --silent, --bandelete=5 ect. 

Flags are a way to add extra options into a command, the current flags you will see:

- --nsfw Marks the user as nsfw, the users avatar will not be shown in the mod log

- --silent Makes the command silent and skips over sending the user a DM about the action

- --image=URLtoImage Lets you add an image from a link instead of uploading a screen shot, make sure to include the = !

- --bandelete=number Lets you set the number of days to delete messages upon a ban. Must be between 0 to 7. By default it is 0, however you can change your server's default ban time

Listed below are Kettu's user mod commands with their general syntax

- Ban [users] [time] [reason] [image] [banDelete] [nsfw] [silent] Bans users from a server, uses do not need to be in a server to be banned. If a time is provided the ban will be removed once the time expires. Default ban delete time is none.

- Kick [users] [reason] [image] [nsfw] [silent] Kicks a member from the server, member needs to be in the server to be kicked. Users can join the server again if they have an invite. This command requires ban members perms to be run, this is because Discords kick members perm also includes the prune members, a very powerful function.

- Softban [users] [reason] [image] [nsfw] [silent] Bans then unbans a user effectively kicking the user while deleting the last day of messages the user sent. User does not need to be in a server to be softbanned.

- Mute [users] [time] [reason] [image] [nsfw] [silent] Mutes a user. By default Kettu will use timeouts but a muted role can be set. If a mute is longer then 30 days (Discords timeout limit) Kettu will automatically extend the mute to the desired time. If no time is given the mute will be infinite.

- Strike [users] [strikes] [reason] [image] [nsfw] [silent] Gives a user a strike. By default it gives out 1 strike but you can give out more strikes by providing a number. Strikes can not be 0 or negative. 

- Unban [users] [reason] [image] [nsfw] Unbans users. No DM is ever sent (because they can't be in the server).

- Unmute [users] [reason] [image] [nsfw] [silent] Unmutes users.

- unstrike  [users] [strikes] [reason] [image] [nsfw] [silent] Unstrikes users. By default it will remove 1 strike but you can remove more by providing a number. If you are removing more strikes then a user has it will make the user have 0 strikes.

If more then one user is provided Kettu will replace the DM status with an emote, they are as follows: ✅ DM sent, ❌ DM not sent (not in server), 🚫 DM failed (closed DMs), 🤐 DM not sent (silent).

By default Kettu will send the user a DM if they are in the server when the action took place. Kettu can also be configured to show the moderator information in the DM as well as send an appeals link, or outright disabled. An example of a user DM with a time, appeals link and moderator tag showing can be found below.

![Example user DM](https://cdn.discordapp.com/attachments/833171605366243330/1109330441367994449/brave_zcphtw05eK.png)

## Kettu Cases

All user moderation commands, with the exception of unmute and unban, create a case. Cases can be viewed, edited and deleted! 

To look at a case use the `caseinfo` command. If a case number is provided it will return useful information such as the reason, the moderator, time, strikes, context, ect. You can also give a user as an argument and it will return any case the user has (that is not deleted).

To edit a case use the `editcase` command. This will allow you to update the reason of a case. If their is a mod log of the case the reason will be edited to reflect the new reason. The user DM and the moderation conformation message will not be edited.

To delete a case use the `deletecase` command. Once a case is deleted you can not edit it or view it with caseinfo, however you can still search for the modlog as it does not get deleted. If a case contains strikes those strikes will be removed from the user.

## User Moderation History

In addition to the caseinfo command Kettu also has a check command to help find pertinent information about a user. This command returns info such as if a user is in a server or not, if they are banned or muted (even outside of Kettu), links to their avatar(s) and how many strikes they have. 

## Channel Moderation Commands

- Slowmode [time] [channel] [reason] Lets you modify a channels slowlow in a moment's notice! Must be between 0 and 21600 seconds.

- Lockchannel [channel] [reason] [nsfw] [hide] Locks down a channel prevent users from speaking, [click here](https://kettu.cc/docs/guides/setting-up-lockchannel) to learn more about how to set this up. If the nsfw flag is added Kettu will mark the channel as nsfw until the channel is unlocked. The hide flag will hide the channel from users until the channel is unlocked.

- Lockserver [reason] Locks down a server from speaking. [Click here](https://dev.kettu.cc/docs/guides/setting-up-lockserver) to learn more about how to set it up

- Unlockchannel [channel] [reason] Unlocks a channel. This will automatically remove any flags that were applied when the channel got locked.

- Unlockserver [reason] Unlocks a server allowing users to speak again.

## Raidmode

Kettu has a raidmode that can stop help handle raids, this can be operated manually or automatically

Use the `raidmode` command to view Kettu's current raidmode status. Kettu has 4 different action options:

- ban
- kick
- pause server invites
- nothing

Raidmode can also be automatically triggered if Kettu is setup to watch for raids if its member join limit gets passed. If passed Kettu will enable the current selected action, if the action is pause invites it will kick all the members that triggered the raidmode. Kettu DOES NOT automatically disable raidmode if it is enabled manually or automatically, and it is highly recommended to enable raidmode notifications if enabled to trigger automatically

Every user that Kettu kicks or bans will be automatically DMed about it. If the action is ban and the server has an appeals link setup that will be sent to the user. An example of a raidmode DM can be found below. 

![raidmode DM](https://cdn.discordapp.com/attachments/833171605366243330/1109328193384624218/brave_1uoIDbwFYX.png)

## Purge

Kettu has a purge command which allows you to purge up to 1000 messages at a time, with a number of filters for which messages to select. When you run purge, a menu will appear with information about your options and how many messages were found to verify that your filtering worked correctly. From this menu, you can choose to cancel the purge or continue.

Due to the complexity of these filters, the syntax for the purge command is different to all other commands. This makes using purge with slash much easier instead of text, since Discord will show you the list of options when you start typing the command.

Kettu will 'search' previous messages in the target channel for messages that match your filters (or all messages if you provided no filters). If you pass a `limit` option Kettu will try to search that many messages, otherwise it will be based on any other limits you provide (for example a duration or message link). The default value with no other limits is 100.

Kettu will stop searching early if it reaches messages older than two weeks, due to Discord's restriction on bulk deleting messages. If this doesn't happen, and Kettu determines there are more messages that can be searched, a button will appear in the purge menu to try and search an extra 100 messages.

**Limits - adjust which range of messages Kettu searches:**

- `limit` adjusts the number of messages to search, between 2 and 1000. If no other limit options are set, this will default to 100.
- `recent` tells Kettu how far back to search in the form of a duration. For example, this could be `2h30m`. In text mode, avoid using `2h 30m` as this won't work.
- `since` tells Kettu how far back to search in the form of a timestamp, in unix milliseconds. In text mode, format this as a Discord timestamp like `<t:1627796314>`.
- `since-message` tells Kettu how far back to search by passing a link to the oldest message that should be searched.

The limits `recent`, `since` and `since-message` can all be used together, and only messages within all 3 ranges will be searched.

**Filters - determine which searched messages should be purged:**

- `bots` will only purge messages from bots.
- `humans` will only purge messages from humans.
- `system` will only purge system messages, such as Discord's native boost & join messages.
- `embeds` will only purge messages with embeds.
- `links` will only purge messages with links.
- `images` or `attachments` will only purge messages with attachments.
- `stickers` will only purge messages with stickers.
- `includepins` will **allow** Kettu to purge pinned messages too. By default, pinned messages are skipped.
- `#channel` instructs Kettu to search & purge messages in a different channel to the current one.
- `@user mention` or a user ID will only purge messages from a certain user.
- `content` will only purge messages that contain specific text. In text mode, indicate `content` by wrapping it in "quotes".
- `regex` will only purge messages matching a regular expression. In text mode, indicate `regex` by wrapping it in \`backticks\`.

Any combination of filters can be used, but some combinations will prevent any messages from passing filters. For example, using `bots` and `humans` together won't work since they are mutually exclusive. Similarly, a `@user mention` will override both of these filters.

**Examples (as text commands):**

Purge the last 250 messages: `k!purge 250`

Purge all system messages in the #boosts channel: `k!purge system #boosts`

Purge all messages from in the past hour and 30 minutes containing "raid": `k!purge 1h "raid"`

Purge all messages from bots with embeds: `k!purge bots embeds`

Running `k!purge` with no arguments will bring up a list of options if you need a quick reference. Or, just use slash :)

### Still need help? 

Come join Kettu's [support server](https://discordapp.com/invite/4Bavumy), we would love to help you with any questions or needs you have!
