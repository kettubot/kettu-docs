# Slash default override

Kettu by default lets users use both text or slash commands. Text commands respects slash command permissions (server settings -> Integrations -> Kettu) as if they were slash commands. When slash default override is **enabled** it allows you to disable the `@everyone` permission without affecting text commands. This allows users to use text commands while effectively disabling slash commands. 

## Lets break that down

What does disabling `@everyone` do? It removes the ability for users to use (and see) slash commands unless there is another override that overrides it. If you were to disable `@everyone` without enabling slash default override it would prevent any users from using text or slash commands unless they have admin permissions. Enabling this however lets text commands ignore this permission and continue to operate normally.

![@everyone disabled](https://cdn.kettu.cc/external-assets/kettu-docs-guides-override-1.png)

What about all the other overrides? How are they affected? Enabling slash default override **only** affects the `@everyone` permission meaning that **any other** overrides will still be respected by text commands.

Lets make an example, if you add a channel override in the hug command for `#the-ultimate-hugging-zone` and an override disabling `All Channels` the hug command will only be able to be used in the ultimate hugging zone.

![Hug command with overrides](https://cdn.kettu.cc/external-assets/kettu-docs-guides-override-2.png)

If a user tries running the command in another channel they will be greeted with an error.

![Hug command returning error message](https://cdn.kettu.cc/external-assets/kettu-docs-guides-override-3.png)

This approach lets you fine tune your commands to suit your needs natively in Discord while still allowing you to hide slash commands from users.

## Other things to note

- Users with the Administrator permission will always be able to see and use slash commands in all channels. There is no easy or effective way around this. 

- You can still allow slash commands to be used if you enable `@everyone` in the command directly.

### Still need help? 

Come join Kettu's [support server](https://discordapp.com/invite/4Bavumy).