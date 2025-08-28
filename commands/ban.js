{
  "name": "ban",
  "description": "Ban a user from the server.",
  "type": "command",
  "usage": "!ban @user [reason]",
  "permissions": "ADMINISTRATOR",
  "code": "$suppressErrors\n$deletecommand\n$if[$isBot[$mentioned[1]]==true;{delete:1}{description:You cannot ban a bot!}{color:RED}]\n$if[$isUser [$mentioned[1]]==false;{delete:1}{description:User  not found!}{color:RED}]\n$ban[$mentioned[1];$noMentionMessage]\n$dm[$mentioned[1];You have been banned from **$serverName** for: $noMentionMessage]\n$embed[{title:User  Banned}{description:$username[$mentioned[1]] has been banned!}{color:RED}]\n$reaction[✅]",
  "cooldown": 5
}
  
