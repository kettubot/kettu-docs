# Change log

Here you can find detailed logs of the changes in Kettu. [Click here](https://gideon-foxo.gitbook.io/kettu/change-log) to see all the change logs prior to V3.

## Version 3.1.3

Added some new images to the social commands and removed some poor quality images.

Flags are now supported in the edit command.

Added how many vote points you have in the upvote command.

Removed user status in the profile command as we no longer get that data.

Modified the source command to now give the image key in the footer.

Fixed several small typos and bugs.

-------------

## Version 3.1.2

Fixed a bug that prevented any case from logging in the database if no mod log channel was set.

Fixed the reason command so it now sets the reason for the case in the database as well as mod log. This command also sets the reason even if no mod log is set.

Fixed a few bugs in the nitro command. Now is should say you use an incorrect syntax instead of erroring out.

Updated the website home page.

Fixed a bug in the serverinfo command that prevented it from working in some servers. Some broken markdown was also fixed.

Fixed the bot not correctly sending server stats to a few bot lists.

Updated the `upvote` command removing a defunct bot list and crossing out Arcane center as it does not log votes (that site is not very good).

Fixed several other bugs throughout the bot.

-------------

## Version 3.1.1

Added the command; settings. This displays the servers settings.

Gave the preference command a face lift with new emotes.

Added some new responses to the zap and cookie command.

Tweaked the serverinfo command slightly.

Updated links in the bot to the correct domain.

Fixed a few bugs and typos.

--------

## Version 3.1.0

Added join and leave logs. The command to set this up is `/joinlog [channel]`

Added a new social command; Bellyrubs!

Some commands now work in DMs!

Added the aliases `case` and `cases` to the history command.

Fixed a bug in the check command where it always returned the user having 0 strikes.

Fixed a bug with moderation commands that would throw "No user" when more then 1 user was provided.

Fixed lots of bugs (making commands work in DMs causes a lot of issues).

Fixed several typos.

--------

## Version 3.0.2

Some commands now work in DMs and Kettu no longer sends a message saying you must run commands in a server if you DM Kettu with anything.

Added a new source command that gives you information about the social command images. You may have already noticed this in the footers of social commands.

Changed the way Kettu handle errors a bit.

The suggest command now requires a source.

Fixed bug where the moderation commands would throw an error if you fed them an invalid user.

Changed the badges command to now give a link to our website as the information it displayed was outdated.

Fixed a few bugs in the purge command.

Fixed a few typos and smaller bugs.

--------

## Version 3.0.1

Changed the roleinfo command so if a role has more then 29 users it does not attempt to list all of the users instead giving the user count for that role.

The bot now posts server stats to all of the bot lists.

Fixed bug in the help command with the reactions when the bot lacks manage message permissions.

Removed the `s` alias from the strike command.

Kettu now correctly tracks votes.

Fixed several typos.

Fixed several small bugs.

-------

## Version 3.0.0

### General Improvements

One of the most important changes to come in V3 is support for sharding. This allows Kettu to scale above 2500 servers. Another much needed change was moving to a proper non-relational database. This allows us to store a lot more data than just server prefixes. Some front end improvements include being able to mention the bot as a prefix in addition to the server prefix. The prefix is also no longer case sensitive, meaning if your prefix is `prefix` you can do `prefixping` or `PREFIXping` or for the heck of it `PrEfIxping`.

### New Commands

### Miscellaneous

**colorrole** Sets the color of a role using a hexcode argument. Helpful for mobile users.

**enlarge** Enlarges a custom emote so you can see it clearer. Helpful for mobile users.

**nsfw** This command toggles a channel's nsfw mode. Helpful for mobile users, especially users on iOS.

**remind** Sets a reminder for you then DMs you when the time has come.

**selfrole** Allows users to give themselves roles that have been preset (setselfrole).

**sync** Syncs a channel with its category. Helpful for mobile users.

### Moderation

**history** This shows a user's punishments if a user is provided, or more details about a case if a case number is provided.

**mute** Mutes a user for the specified time.

**pardon** Removes/deletes a case.

**raidmode** Manually sets the raidmode.

**purge** Purges a number of recent messages matching a set of options.

**reason** Sets a new reason for a case. If mod logs are set the mod log message will be edited to reflect the new reason.

### Informational

**roleinfo** Gives useful information about a given role.

**serverinfo** This command gives useful information about the server the command is run in.

**upvote** Gives you links to vote for Kettu ^^

**avatar** displays a users avatar.

**upvote** Gives you some links to upvote Kettu on. Learn more about voting [here](https://kettu.cc/docs/Guides/Voting).

### User

This is a completely new category in Kettu V3. This is where you can set your user preferences and profile options.

**badges** Shows you all of the Kettu badges.

**bio** Sets your bio that gets displayed with the profile command.

**color** Sets your profile's color using a hex code.

**delete** Clears all of the user data that you have set.

**preferences** Changes a user's preferences.

**profile** Shows you a user's profile.

**votetoggle** Toggle if you are reminded for votes or not.

### Settings

**commanddelete** Sets whether or not to delete the social command inputs for the server.

**configraidmode** Sets the anti raidmode settings.

**modlog** Sets a channel for the mod logs.

**modrole** Sets a mod role for the server.

**muterole** Sets the mute role for the server.

**nitro** Views and sets the nitro boosting event.

**setselfrole** Sets or removes roles for the selfrole command.

### Other Improved Commands

**check** shows more data such as whether a user is muted, how many strikes they have, and a link to their profile.

**lockserver** no longer destroys the default roles perms and instead just removes the send messages permissions from the role. Unlock only adds this perm back.

**vote**, **poll** and **id** now all work even if Kettu can not delete the message. In the case of poll and vote it just reacts to that message instead of sending a new one.

**help** A fresh new reaction menu system and a face lifted help for commands.

**ban**, **kick**, **softban** and **strike** all now take more than one user at a time as well as flags and images.

All social commands now have multiple responses and new images.

**lockchannel** and **unlockchannel** now have 2 flag options, NSFW and hide, NSFW marks the channel as NSFW and hide hides the channel.

**suggest** was completely remade and it is used for suggesting new images and responses for the social command.
