# Setting up lockserver

Kettu's lock channel command allows you to lock a channel in a moments notice! To achieve this Kettu revokes `Send Messages`, `Send Messages in Threads`, `Create Public Threads`, `Create Private Threads`, and `connect` permissions from the provided channel.

## Lets break that down

Kettu handles channels smartly, it handles differently based on what channel type it is, e.g. text, category, voice channel ect. The lock channel also has the `nsfw` and `hide` options. The nsfw option marks the channel as nsfw and the hide option revokes `ViewChannel` permissions effectively hiding the channel from users. Useful for locking a channel to report content to Discord!

Down below is a list of all the ways it handles channels

- Text, form, announcement, channels: revokes `SendMessages`, supports nsfw and hide arguments

- Voice channel: revokes `SendMessages` & `Connect`, supports nsfw and hide arguments

- Stage Channel: revokes `Connect`, supports nsfw and hide arguments

- Category Channel: revokes `SendMessages` & `Connect`, supports hide arguments

To make sure Kettu lockchannel is effect make sure no normal user has any of the listed perms above as a channel override. Make sure however, that your staff team, Kettu and any other bots or users you want have these perms set as an override so they can continue speaking normally during a lock down.

## How to test

To test lock channel simple lock a channel down and then go to server settings -> roles right click on the `@everyone` role and hit View Server As Role.

![View Server As Role](https://cdn.discordapp.com/attachments/1089370527518433282/1097244608116838432/Discord_Ky72KnVxj5.png)

From this view you can also add or remove other roles users might have to check they function as expected.

![Select Roles Option](https://cdn.discordapp.com/attachments/1089370527518433282/1097247251627249774/Discord_r60oMNv0Ae.png)

## Other things to note

- Users with the administrator permission will always be able to speak and view every channel in the server, there is no way around this. 

- Make sure your staff and bot roles have the permissions Kettu revokes so they can continue to function normally during a lockdown.

- Kettu will only restore permissions it revoked when the lock server command was run. It will not enable permissions that where previously not enabled.

### Still need help? 

Come join Kettu's [support server](https://discordapp.com/invite/4Bavumy).