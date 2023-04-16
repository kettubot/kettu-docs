# Setting up lockserver

Kettu's lock server command allows you to lock a server in a moments notice! To achieve this Kettu revokes `Send Messages`, `Send Messages in Threads`, `Create Public Threads`, `Create Private Threads`, and `connect` permissions from the `@everyone` or default role. 

## Lets break that down

As mentioned above, when you run the command Kettu removes the `Send Messages`, `Send Messages in Threads`, `Create Public Threads`, `Create Private Threads`, and `connect` permissions from the `@everyone` or default role. If your permissions are configured correctly, this will revoke the ability for normal users to send any message, create any threads and connect to any voice channel or stage channels. 

For this to work ideally these permissions should only exist on the `@everyone` or default role. Extra roles such as, pronouns, colors, status, ect should not have any permissions attached to them unless the role exists to give the user extra permissions. If this is how your permissions are set up don't fret! Under the `Permissions` tab there is a clear permissions but that magically remove's all permissions from the role.

![Remove permissions button](https://cdn.discordapp.com/attachments/1089370527518433282/1097234190937886720/Discord_DiDsYl69rq.png)

Not only do you have to make sure your role permissions are set correctly your channel permissions are also important too! If you have any channel overrides enabling (that means set to ✅) any of the permissions Kettu revokes then the affect will be lost in that channel. For example if a channel has the `Send Message` permissions override enabled users will still be able to send messages there. Or if a channel has `Connect` override enabled users will still be able to connect to it.

It is a good practice to only set channel overrides where strictly necessary. 

Another common use for roles and channel overrides is to allow roles to give access to top secret channels. The best way to do this is to set the `View Channel` permissions to ❌ and have the role set the same override to ✅. This allows you to hide channels without interfering with the lock server command.

## How to test

Testing the lock channel command in your server might be impractical if it is active, but don't fret! There is an effective way to test the lock channel command without actually locking your server down. 

To do this go to server settings -> Server Template -> Generate Template. After you give it a title and create it hit copy and either paste it into a web browser or into a Discord channel. From there hit create server and presto! You now have a duplicate server with identical permissions.

![Server template menu](https://cdn.discordapp.com/attachments/1089370527518433282/1097244019957964950/Discord_lW1j2bOjBa.png)

From there either [invite Kettu](https://kettu.cc/invite?ref=docs) or simply revoke the permissions from the `@everyone` role. Then right click on the `@everyone` role and hit View Server As Role.

![View Server As Role](https://cdn.discordapp.com/attachments/1089370527518433282/1097244608116838432/Discord_Ky72KnVxj5.png)

From this view you can also add or remove other roles users might have to check they function as expected.

![Select Roles Option](https://cdn.discordapp.com/attachments/1089370527518433282/1097247251627249774/Discord_r60oMNv0Ae.png)

Once finished make sure to apply any changes you made to your sandbox server on your real server! If you forgot what permissions you modified don't fret, simple go into server settings -> audit log. From here you will be able to view any changes you made. Then you are safe to delete the sandbox server and delete the server template.

## Other things to note

- Users with the administrator permission will always be able to speak and view every channel in the server, there is no way around this. 

- Make sure your staff and bot roles have the permissions Kettu revokes so they can continue to function normally during a lockdown.

- Kettu will only restore permissions it revoked when the lock server command was run. It will not enable permissions that where previously not enabled.

- Kettu uses this approach instead of enabling channel overrides and every single channel for speed. This method makes locking a server almost instant and avoids potential issues with ratelimits of modifying so many channels at once.

### Still need help? 

Come join Kettu's [support server](https://discordapp.com/invite/4Bavumy).


