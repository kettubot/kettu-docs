# Change log

Here you can find detailed logs of the changes and updates for Kettu. You can follow these logs in your own server if you join our [support server](https://discordapp.com/invite/4Bavumy). Want to take a step back in time and look at previous change logs? [Version 3](https://github.com/kettubot/kettu-docs/blob/v3/Change%20Log.md), [Version 2](https://gideon-foxo.gitbook.io/kettu/change-log).

## Version 4.0.2

Fixed slash commands from not populating

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