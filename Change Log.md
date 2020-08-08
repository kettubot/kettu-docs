# Change log

Here you can find detailed logs of the changes in Kettu. [Click here](https://gideon-foxo.gitbook.io/kettu/change-log) to see all the change logs prier to V3.

## Version 3.0.0

### General Improvements

One of the most important changes to come in V3 is support for sharding. This allows Kettu to scale above 2500 servers. Another much needed change was moving to a rethink database. This allows us to store a lot more data then just server prefixes. Some front end improvements include being able to mention the bot as a prefix in addition to the server prefix. The prefix is also no longer case sensitive meaning if your prefix is `prefix` you can do `prefixping` or `PREFIXping` or for the heck of it `PrEfIxping`.

### New Commands

### Miscellaneous Commands

**colorrole** Sets the role of a color using a hexcode augment. Helpful for mobile users.

**enlarge** Enlarges a custom emote so you can see it clearer. Helpful for mobile users.

**nsfw** This command toggles a channels nsfw mode. Helpful for mobile users, especially users on iOS.

**remind** Sets a reminder for you then DMs you when the time has come.

**selfrole** Allows users to give themselves roles that have been preset (setselfrole).

**sync** Syncs a channel with its category. Helpful for mobile users.

### Moderation commands

**history** This shows a users punishments if a user augment is provided and more details about a case if a case number is given.

**mute** Mutes a user for the specified time.

**pardon** Removes/deletes a case.

**raidmode** Manually sets the raidmode.

**purge** Purges the amount of provided of messages with many posable augments.

**reason** Sets a new reason for a case. If mod logs are set the mod log message will be edited to reflect the new reason.

### Informational commands

**roleinfo** Gives useful information about a given role.

**serverinfo** This command gives useful information about the server the command is ran in.

**upvote** Gives you links to vote for Kettu ^^

**avatar** displays a users avatar.

**upvote** Gives you some links to upvote Kettu on. Learn more about voting [here](https://kettu.cc/docs/Guides/Voting)

### User commands

This is a completely new category in Kettu V3. This is where you can set your user preferences and profile options.

**badges** Shows you all of the Kettu badges.

**bio** Sets your bio that gets displayed with the profile command.

**color** Sets your profile's color using a hex code.

**delete** Clears all of the user data that you have set.

**preferences** Changes a user's preferences.

**profile** Shows you a users profile.

**votetoggle** Toggle if you are reminded for votes or not.

### Settings commands

**commanddelete** Sets whether or not to delete the social command inputs for the server.

**configraidmode** Sets the anti raidmode settings.

**modlog** Sets a channel for the mod logs.

**modrole** Sets a mod role for the server.

**muterole** Sets the mute role for the server.

**nitro** Views and sets the nitro boosting event.

**setselfrole** Sets or removes roles for the selfrole command.

### Improved commands

**check** This now has more data then before such as if they are muted or not and if they have strikes as well as a link to the users profile.

**lockserver**  no longer destroys the default roles perms and instead just removes the send messages permissions from the role. Unlock only adds this perm back.

**vote**, **poll** and **id** now all work even if Kettu can not delete the message. In the case of poll and vote it just reacts to that  message instead of sending a new one.

**help** A fresh new reaction menu system and a face lifted help for commands.

**ban**, **kick**, **softban** and **strike** all now take more then one user at a time as well as flags and images.

All social commands now have multiple responses and new images.

**lockchannel** and **unlockchannel** now have 2 flag options, NSFW and hide, NSFW marks the channel as NSFW and hide hides the channel.

**suggest** was completly remade and it is used for suggesting new images and responses for the social command.
