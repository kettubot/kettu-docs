# Slash default override

Kettu by default lets user use both text or slash commands. Text commands respects slash commands permissions (server settings -> Integrations -> Kettu) as if they where slash commands. When slash default override is **enabled** it allows you to disable the `@everyone` permission without affecting text commands. This allows users to use text commands while effectively disabling slash commands 

## Lets break that down

What does disabling `@everyone` do? It removes the ability for users to use (and see) slash commands unless there is another override that overrides it. If you where to do this without enabling slash default override it would effectively make the commands unusable for anyone but the server admins. Enabling this however lets text commands ignore this permission and continue to operate normally.

![@everyone disabled](https://cdn.discordapp.com/attachments/1089370527518433282/1096855197961166979/Discord_2IpOQvpuXa.png)

What about all the other types of overrides? How are they affected? Enabling slash default override **only** affects the `@everyone` permissions meaning that any **other** overrides you make will still be respected by text commands.

Lets make an example, if you add a channel override in the hug command for `#the-ultimate-hugging-zone` and an override disabling `All Channels` the hug command will only be able to be used in the ultimate hugging zone.

![Hug command with overrides](https://cdn.discordapp.com/attachments/1089370527518433282/1096852389908201533/Discord_im912pjFYg.png)

If a user try's running the command in another channel they will be greeted with an error.

![Hug command returning error message](https://cdn.discordapp.com/attachments/1089370527518433282/1096852693982642206/Discord_EPuG666OSH.png)

This approach lets you fine tune your commands to suit your needs natively in Discord while still allowing you to hide slash commands from users.

## Other things to note

Users with the administrator permissions will always be able to see and use slash commands in all channels. There is no easy or effective way around this. 

You can still allow slash commands to be used if you enable `@everyone` in the command directly.

Still confused or need help? Come ask in our [support server](https://discordapp.com/invite/4Bavumy).