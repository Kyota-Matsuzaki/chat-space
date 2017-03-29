json.name @message.user.name
json.message @message.name
json.image @message.image.url
json.time @message.created_at.strftime('%Y/%m/%d %H:%M')