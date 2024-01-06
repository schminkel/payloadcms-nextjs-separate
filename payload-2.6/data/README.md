

mongodump --uri='mongodb://localhost:27017/payload_2-6' --archive='payload_2-6.gz'

mongorestore --uri='mongodb://localhost:27017' --archive='payload_2-6.gz'
