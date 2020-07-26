# Version 3 Change Log

This is a short overview of the new changes of Kettu for version 3 (V3). V3 is a complete rewrite from version 2 with every command being improved in some way with a few command being removed altogether. V3 also has sharding so Kettu can now scale  beyond 2,500 servers. As always please report bugs or other issues in [Kettu's support server](https://kettu.cc/support).

-----------

## Removed Commands

**deleteban**
This command was removed as it is redundant to the ban command. There are plans to add the deleting functionality to the ban command itself in the future.

**print** aka **log**
This command was removed as its intended use was replaced with the `id` command. Some... odd context was printed onto the console unsurprisingly so this command was locked to the support server in v2.

**report**
This command only was ever used once for its intended use and it was often abused. Needless to say, like the print command this command will not be returning in V3.

## Social Commands Category

This category got quite an update with a lot of the big changes in a different category of commands. This being the user preference options. For example, lets say you do not want to be kissed by anyone. Well you can disable the ability for people to kiss you by changing your preferences. Most social commands get new images and a few commands had images removed from them entirely. Some more commands got new self response acton's. There are no new social commands in this category.

-------

## Miscellaneous Commands

This category has a lot of... well, new miscellaneous commands.

**colorrole** Sets the role of a color using a hexcode augment. Helpful for mobile users.

**enlarge** Enlarges a custom emote so you can see it clearer. Helpful for mobile users.

**nsfw** This command toggles a channels nsfw mode. Helpful for mobile users, especially users on iOS.

**remind** Sets a reminder for you then DMs you when the time has come.

**selfrole** Allows users to give themselves roles that have been preset (setselfrole).

**sync** Syncs a channel with its category. Helpful for mobile users.

----------

## Moderation commands

All commands in this category where greatly improved. Almost all moderation action commands can take a list of users either mentions (@user) or IDs. E.g. /ban @user @user 1234userID 0987userID @user Raiding. Moderation commands also now have mod logs and much more advanced reasons such as images. **NOTE** strikes (aka warns) in Kettu V2 are not stored meaning that any strikes you have given a user will not be present in V3.

**check** This now has more data then before such as if they are muted or not and if they have strikes as well as a link to the users profile.

**history** This shows a users punishments if a user augment is provided and more details about a case if a case number is given.

**mute** Mutes a user for the specified time.

**pardon** Removes/deletes a case.

**raidmode** Manually sets the raidmode.

**purge** Purges the amount of provided of messages with many posable augments.

**lockserver** This command no longer destroys the default roles perms and instead just removes the send messages permissions from the role. Unlock only adds this perm back.

**reason** Sets a new reason for a case. If mod logs are set the mod log message will be edited to reflect the new reason.

---------

## Informational commands

All information commands got a face lift with some new commands.

**roleinfo** Gives useful information about a given role.

**serverinfo** This command gives useful information about the server the command is ran in.

**upvote** Gives you links to vote for Kettu ^^

-------

## User commands

This is a completely new category in Kettu V3. This is where you can set your user preferences and profile options.

**badges** Shows you all of the Kettu badges.

**bio** Sets your bio that gets desplayed with the profile command.

**color** Sets your profile's color using a hex code.

**delete** Clears all of the user data that you have set.

**preferences** Changes a user's preferences.

**profile** Shows you a users profile.

**votetoggle** Toggle if you are reminded for votes or not.

---------

## Settings commands

This category is where all of the server settings can be set and changed. All of these options will be available to be changed with a dashboard that is still in development.

**commanddelete** Sets wether or not to delete the social command inputs for the server.

**configraidmode** Sets the anti raidmode settings.
**modlog** Sets a channel for the mod logs.

**modrole** Sets a mod role for the server.

**muterole** Sets the mute role for the server.

**nitro** Views and sets the nitro boosting event.

**prefix** Change prefix for the guild.

**setselfrole** Sets or removes roles for the selfrole command.
