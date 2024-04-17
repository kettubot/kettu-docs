# Moderation Commands

From banning to striking, locking channels down and more, Kettu has powerful tools to help you moderate with ease. It is highly recommended you enable Kettu mod logs if you use Kettu as your primary moderation bot.

Want to learn more about how to use Kettu for moderation? We got you covered, check out our [moderation guide](https://kettu.cc/docs/guides/moderation-guide)!

If you moderate several users Kettu will return an emote to indicate the DM status. ✅ DM sent, ❌ DM not sent (not in server), 🚫 DM failed (closed DMs), 🤐 DM not sent (silent)

User mod commands support 5 users on slash commands and no limit with text commands.

## Command Reference

**k!ban \<@user/id> [users...] [time/#w#d#m] [reason] [--link=linkURL/image] [--bandelete=#] [--nsfw] [--silent]**
**/ban \<user> [users...] [reason] [image] [ban_delete] [minutes] [hours] [days] [silent] [nsfw]**

Bans a bad fluffball. User does not need to be in the server to be banned

Aliases: `b`, `bean`

Permission Level: `BanMembers`

-------

**k! or / caseinfo [@user/ID] [case-id]**

Returns information about a case or a users cases

Aliases: `case`, `cases`, `history`, `warnings`, `search`, `searchall`

Permission Level: `BanMembers`

-------

**k! or / check \<@user/id>**

Gives you useful information about a user and their moderation status/history

Aliases: `lookup`

Permission Level: `BanMembers`

-------

**k! or / deletecase \<case-id>**

Deletes a case

Aliases: `deletepunish`, `deletepunishment`, `dp`, `dc`

Permission Level: `BanMembers`

-------

**k! or / editcase \<case-id> \<new-reason>**

Updates the reason for a case

Aliases: `caseedit`, `edit`, `reason`, `ec`

Permission Level: `BanMembers`

-------

**k!kick \<@user/id> [users...] [time/#w#d#m] [reason] [--link=linkURL/image] [--nsfw] [--silent]**
**/kick \<user> [users...] [reason] [image] [silent] [nsfw]**

Kicks a bad fluffball. User needs to be in the server to be kicked.

Aliases: `k`

Permission Level: `BanMembers`

-------

**k!lockchannel [channel] [reason] [--nsfw] [--hide]**
**/lockchannel [channel] [reason] [nsfw] [hide]**

Locks a channel preventing people from sending messages. [Click here](https://dev.kettu.cc/docs/guides/setting-up-lockchannel) to read our guide on how to set it up. If nsfw flag is provided it marks the channel as nsfw, and if hide flag is added it hides the channel from users.

Aliases: `lc`, `lock`

Permission Level: `BanMembers`

-------

**k! or / lockserver [reason]**

Locks the server so normal users can not speak in it. [Click here](https://dev.kettu.cc/docs/guides/setting-up-lockserver) to read our guide on how to set this up.

Aliases: `ls`, `lockdown`

Permission Level: `ManageGuild`

-------

**k!mute \<@user/id> [users...] [time/#w#d#m] [reason] [--link=linkURL/image] [--nsfw] [--silent]**
**/mute \<user> [users...] [reason] [image] [minutes] [hours] [days] [silent] [nsfw]**

Mutes a bad fluffball. User needs to be in the server to be muted

Aliases: `m`, `muzzle`, `timeout`

Permission Level: `ModerateMembers`

-------

**k! or / purge \<2-1000> [help/args...]**

Purges messages. Run purge help to learn about the commands args.

Aliases: `clean`, `clear`, `purgeall`, `prune`, `p`

Permission Level: `ManageMessages`

-------

**k! or / raidmode [on/off/kick/ban/nothing/pause-invites]**

Lets you see and change the current active raidmode status

Aliases: `raid`

Permission Level: `BanMembers`

-------

**k! or / slowmode \<time> [channel] [reason]**

Sets slowmode on a channel. Useful for making the chat chill out.

Aliases: `slow`, `sm`, `setslowmode`

Permission Level: `ManageMessages`

-------

**k!softban \<@user/id> [users...] [reason] [--link=linkURL/image] [--nsfw] [--silent]**
**/ban \<user> [users...] [reason] [image] [silent] [nsfw]**

Softban bans then unbans deleting a fluffball's messages sent in the last 24 hours.

Aliases: `sb`, `deletekick`

Permission Level: `BanMembers`

-------

**k!strike \<@user/id> [users...] [strikes] [reason] [--link=linkURL/image] [--nsfw] [--silent]**
**/strike \<user> [users...] [strikes] [reason] [image] [silent] [nsfw]**

Strikes a bad fluffball. Check a users strikes with the caseHistory command

Aliases: `w`, `warn`

Permission Level: `BanMembers`

-------

**k!unban \<@user/id> [users...] [reason] [--link=linkURL/image] [--nsfw]**
**/unban \<user> [users...] [reason] [image] [nsfw]**

Unbans a fluffball.

Aliases: `ub`

Permission Level: `BanMembers`

-------

**k!unlockchannel [channel] [reason]**

Unlocks a channel allowing people to sending messages again.

Aliases: `uc`, `unlock`

Permission Level: `BanMembers`

-------

**k!unlockserver [reason]**

Unlocks the server so normal users can speak in it again.

Aliases: `us`, `unlockdown`

Permission Level: `ManageGuild`

-------

**k!unmute \<@user/id> [users...] [reason] [--link=linkURL/image] [--nsfw]**
**/unmute \<user> [users...] [reason] [image] [nsfw]**

Unmutes a fluffball.

Aliases: `um`, `untimeout`

Permission Level: `ModerateMembers`

-------

**k!unstrike  \<@user/id> [users...] [strikes] [reason] [--link=linkURL/image] [--nsfw]**
**/unstrike  \<user> [users...] [strikes] [reason] [image] [nsfw]**

Removes strikes from a user. Use the check command to view a users current amount of strikes.

Aliases: `pardon`, `removewarn`

Permission Level: `BanMembers`

-------