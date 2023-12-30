# Change log

Here you can find detailed logs of the changes and updates for Kettu. You can follow these logs in your own server if you join our [support server](https://discordapp.com/invite/4Bavumy). Want to take a step back in time and look at previous change logs? [Version 3](https://github.com/kettubot/kettu-docs/blob/v3/Change%20Log.md), [Version 2](https://gideon-foxo.gitbook.io/kettu/change-log).

## Version 4.0.10

Kettu now uses custom status instead of Playing or Watching status and some new status it rotates to

The moderation logs and check command now show a users display avatar, this now will show default Discord avatars instead of nothing

Fixed bug causing the social commands to incorrectly make words plural when it was singular 

Fixed a bug in the mute and unmute commands causing it to display null instead of the moderators tag

Fixed incorrect permissions for the autofeed command allowing any user to setup an autofeed

Fixed bug with the profile command causing it to display the line "moderator permissions" even if the user had none

## Version 4.0.9

Fixed a bug causing anyone to update a case reason by hitting the update case button on a moderation command repones, thanks to Riku for catching this

Fixed a bug causing the member select menu to break if the text command got deleted 

Fixed a bug causing the poll, vote, purge, and source command to error out if it lacked view message history or view channel perms

Fixed a bug with the lock channel command causing it to break if you used the nsfw flag options 

Fixed a bug in the purge command causing it to display "couldn't delete 0."

## Version 4.0.8

Updated an internal library enabling Kettu to see user display names

Updated the social, moderation, and information commands as well as events, and internal handlers to support user display names

Fixed a bug causing the preference command to break if you where trying to enable or disable social or animal

Fixed a bug causing auto unmutes and bans to not log correctly if they where ran with slash commands

## Version 4.0.7

Automatic unmutes and unbans now log in the moderation logs

Fixed a bug causing mog log context link to the channel instead of the message for text commands. This data was still stored correctly in the case itself, simply use the case command to find the correct context

Fixed a bug causing the dashboard to not update settings immediately. This caused issues with setting up nitro boost logging for the first time

Fixed a bug causing mod commands to error out if the server disabled DMs on moderation actions

Fixed a bug causing Kettu to endlessly typing if the command errored out instead of finishing as intended

Fixed a bug with the args handler causing it to error out if a user not in the sever was provided for a member argument 

Fixed a bug causing the args handler to break for custom emote args

Fixed a bug causing Kettu to error out if you deleted the member select menu 

Updated the way Kettu internally handles versions 

Fixed typos in the unmute command saying it muted instead of unmuted

## Version 4.0.6

Added the Hidden Slash command Moderator Responses setting to toggle if slash moderation commands are sent as normal messages or with hidden ephemeral messages

Fixed issues causing the dashboard to fail to load for users with correct permissions

Dashboard/website errors are more clear and verbose

Fixed an exploit allowing users to test nitro boost messages without needing the correct permissions

Added logic to disable text commands if set to disabled. This was set to off by default but that was not intended behavior, text commands are now enabled by default everywhere

Fixed an internal bug causing slash command context not to be added to cases. If you search a case that was created with slash commands it will say "manual action", if you have mod logs enabled the mod logs will correctly point to the channel as the context

Poll and vote now delete the input message if the command is a text command and the bot has permissions to delete it and resend it as an embed. These commands now both display the user display name and avatar

Made the remind, and profile commands server only as they where not intended to work int DMs

Fixed some bugs we caused in user moderation commands, poll, vote, contributors and the settings command causing them to break and error out

Fixed the status command so it can now work in DMs

Fixed a bug a causing the preferences command to break if the user did not have a display avatar 

Fixed bug where the help command would throw an error if you closed the menu and the original command got deleted

Fixed an error with the return purge message

Added a proxy to monitor Kettu's requests to Discord

Some internal logging improvements

## Version 4.0.5

Slash commands now obey disabled categories 

Fixed several bugs with autofeed where it would break if it lacked correct perms

Fixed/improved some internal handling of slash commands to prevent some slash commands (mainly animal commands) from erroring or failing to finish fully

Fixed a bug with editcase where it would just tack on the reason in the mog log instead of correctly replacing it 

Fixed several bugs in the args handler where unexpected args would cause it break instead of return a wrong args error

Fixed a bug with the source command where it would error if it lacked perms to delete the message reactions

Fixed bug where a deleted logging channel would cause the bot to error out instead of post a warn log for member join events

Fixed some typos

## Version 4.0.4

Fixed bug causing the autofeed command to not work if it was not on the shard this server is on

Fixed the id command from breaking if used with slash commands

Fixed the suggest command from breaking without a response caused by the same sharding issue

## Version 4.0.3

Added account creation date 

Improved internal and error logging (again)

Fixed a bug in purge causing it to make default args 100

Fixed a bug causing the bot to error out when a case action ended and the member was no longer in the server

## Version 4.0.2

Fixed bug where the editcase command would delete a case instead of editing it. Please let us know if this happened to you we can revert it

Removed a potentially suggestive snuggle response

Fixed bug with social commands with images casing them to send an error 90 seconds after a social command was ran because of lacking perms

Improved internal error logging

Improved image feedback logging

## Version 4.0.1

Fixed bug causing preference data to be incorrectly transferred from v3 to v4. **All** user preferences have been reverted to the last v3 state

Fixed bug causing slash commands to not populate

Fixed bugs with the bird, cat, dog, ferret, fox, kangaroo, koala, panda, racoon, and redpanda commands causing them to always "failed to fetch image :c"

Fixed bug where the preference command failed to recognize the ferret, kangaroo, and raccoon commands

Fixed the bellyrub, nom, nuzzle, and pounce command from returning bap self responses

Preference command now displays member avatar instead of the user avatar

## Version 4.0.0

### General Improvements

Version 4 is a complete overhaul of how Kettu works internally. Kettu now uses more custom djs fork and a custom built api called KAPI. This gives us a very robust base to build many new features into Kettu with ease while also being into Kettu into the modern Discord bot ara. Almost all Kettu commands now support slash commands, and Kettu also uses and supports buttons, select menus, modals, threads, forms and more! 

Kettu is also now being moved to digital ocean servers for hosting, this should mean more stable and reliable uptime for kettu. No more random uncontrollable disconnects! Because of this change Kettu text commands now respect slash command permissions, meaning you can finally fine tune how you like Kettu commands controlled and operated with ease natively inside of Discord.

Kettu's website has also been fully rebuilt with react.js and nextjs. A clean modern design now with light and gray theme options! Kettu's dashboard has also been completely overhauled and now virtually ever kettu setting is now adjustable online!

We also highly recommend recommend updating Kettu's prefix if it is `/` as this can cause conflicts with Discords slash commands. To updates Kettu prefix simply run `/prefix newPrefixHere!`

### Social Command Updates

By far the social category is Kettu's most used category's and we have showered it with love

- Kettu now uses its own cdn for the social images, this means images should load faster and you should never get an image that never loads! Kettu still check the original image source once a day to make sure it still exists. If it is removed Kettu automatically removes it from the image pool.

- All social commands now support up to 5 users. Group hugs go brrrrr. Kettu now also supports names in addition to mentions and IDs, now you can go k!hug gideon! Hugging your friends has never been easier

- You can react 👍👎 on a social image 90 seconds after its posted to give feedback

- To flag images you now need to use the flag command! This helps us learn more about why uses are flagging images to better help us handle problematic images.

- Image feedback is now stored! Now we can see what images you really do or don't like

- Kettu's image pool has been updated! We now have higher quality standards, expect to see new images slowly be added overtime

- Added new self, general and Kettu responses

- Fixed annoying bug with the preference settings changing themselves for no reason! Now you can disable all your preferences at once while keeping your individual settings in tact!

- You can now view other users preference by doing preference @user, no more guessing what their preferences are!

### Animal Commands

A new category to Kettu is animal commands! From foxes, dogs, ferrets, wolfs, redpands and more, Kettu has 18 animal commands to satisfy! Provide a user argument to send fluffy goodness straight to your friends! Or use the animalfeeds command to follow our animal every hour posts, 100% free! Its fluffin awesome

### Kettu Settings

Gone are the days of trying to remember what command changes what setting, now all of Kettu's settings can be access either with the settings command or Kettu's dashboard! Changing settings has never been easier.

### Moderation Commands

Kettu moderation commands got improvements across the board. They should now act smarter with new features to boot

- All user moderation commands now have a silent option to avoid sending users a DM

- User DMs can be configured to show the moderators tag and list an appeals link

- Mass user moderation commands now tell you the DM status for each user

- Moderation commands had a slight rename to a new coherent naming scheme

- Ban commands now support time for time bans as well as a ban delete option

- Mutes now support timeouts by default, mute roles are still an configurable option

- Raidmode now has a pause invite function

- Check gives more helpful details about users

- Lock channel and lock server now function smartly, remembering what settings it changed to change them back the way it found it

- Caseinfo now gives even more detail about cases

### Misc Updates

- Kettu now has warning logs, sends out a warning message about anything issues that are not a command, e.g. the bot can't send a mod log or join log message

- All information commands have been overhauled with new features and facelifts

- Join and leave logs have been updated to give more info and be more compact. Leave logs also now fire even if a user isn't cached

- Added screened logs

- Profile has been overhauled and now supports server avatars

- Suggest has been overhauled and gives more clear info on the Kettu image guidelines

- selfrole and setselfrole have been update and now provide a role list if no args are given. This is considered a legacy feature and will be removed at some point in the future

### Removed Features

dadjoke, tooglensfw, enlarge, unsupress, feedback, sync, vote reminders, and user settings. Some of these features might be added back later in the future but do to various reasons these commands could not make a return in v4.

## Still need help?

Want to suggest a new feature? Have questions? We would love to hear from you in our [Support Server](https://discordapp.com/invite/4Bavumy)!