print("STARTING SCRIPT");

conn = new Mongo("localhost");

db = conn.getDB("youtube");

db.dropDatabase();


db.createCollection("channels");
db.createCollection("comments");
db.createCollection("playlist");
db.createCollection("users");
db.createCollection("videos");



print("***********creating channels*********");

channel1 = {
    "channel_id": 0,
    "name": "Canal para reír",
    "description": "Fails",
    "creation_date": "2019-05-18T16:00:00Z",
    "user_id": 0
};


channel2 = {
    "channel_id": 1,
    "name": "Viajes",
    "description": "Consejos para viajeros",
    "creation_date": "2019-08-18T16:00:00Z",
    "user_id": 1
};

print("***********creating comments*********");

comment1 = {
    "comment_id": 0,
    "text": "Jaja qué risa. Muy bueno!!",
    "date_time": "2021-05-18T16:00:00Z",
    "likes": [{
        "user_id": 0,
        "date_time": "2021-05-19T16:00:00Z"
    }],
    "dislikes": [{
        "user_id": 2,
        "date_time": "2021-05-21T16:00:00Z"
    }],
    "video_id": 1,
    "user_id": 1
};

comment2 = {
    "comment_id": 1,
    "text": "UPsss jaja!!",
    "date_time": "2021-05-23T16:00:00Z",
    "likes": [{
        "user_id": 1,
        "date_time": "2021-05-19T16:00:00Z"
    }],
    "dislikes": [{
        "user_id": 2,
        "date_time": "2021-05-21T16:00:00Z"
    }],
    "video_id": 1,
    "user_id": 0
};


print("***********creating playlist*********");

playlist1 = {
    "playlist_id": 0,
    "name": "Mis favoritos",
    "creation_date": "20121-05-18T16:00:00Z",
    "status": "privada",
    "user_id": 0,
    "videos": [{
        "video_id": 0
    }, {
        "video_id": 1
    }]
};

playlist2 = {
    "playlist_id": 1,
    "name": "Rusia",
    "creation_date": "20121-07-22T16:00:00Z",
    "status": "pública",
    "user_id": 1,
    "videos": [{
        "video_id": 0
    }]
};


print("***********creating users*********");

user1 = {
    "user_id": 0,
    "email": "maparcepel@gmail.com",
    "password": "1234",
    "name": "marcel",
    "birthday": "1970-10-05T16:00:00Z",
    "gender": "male",
    "country": "España",
    "zip": "08731",
    "subscriptions": [{
        "channel_id": 0
    }, {
        "channel_id": 1
    }]
};

user2 = {
    "user_id": 1,
    "email": "maria@gmail.com",
    "password": "4569",
    "name": "maria",
    "birthday": "1999-12-05T16:00:00Z",
    "gender": "female",
    "country": "España",
    "zip": "08800",
    "subscriptions": [{
        "channel_id": 1
    }]
};

user3 = {
    "user_id": 2,
    "email": "juan@gmail.com",
    "password": "78563",
    "name": "juan",
    "birthday": "2002-10-05T16:00:00Z",
    "gender": "male",
    "country": "España",
    "zip": "08001",
    "subscriptions": [{
        "channel_id": 0
    }]
};


print("***********creating videos*********");

video1 = {
    "video_id": 0,
    "title": "vacaciones en Rusia",
    "description": "Verano 2019",
    "size": 150.55,
    "file_name": "sdrgerw.mp4",
    "duration": {
        "hours": "0",
        "minutes": "49",
        "seconds": "43"
    },
    "thumbnail": "sregserg.jpg",
    "views": 222,
    "likes": [{
        "user_id": 0,
        "date_time": "2017-10-08T00:22:00.000Z"
    }, {
        "user_id": 1,
        "date_time": "2017-11-08T00:22:00.000Z"
    }],
    "dislikes": [{
        "user_id": 2,
        "date_time": "2017-12-08T00:22:00.000Z"
    }],
    "status": "public",
    "tags": [{
        "tag_id": 0,
        "tag_name": "vacaciones"
    }, {
        "tag_id": 1,
        "tag_name": "Rusia"
    }],
    "user_id": 1,
    "publication_date_time": "2017-10-08T00:22:00.000Z"
};

video2 = {
    "video_id": 1,
    "title": "Fails 2020",
    "description": "mucha risa",
    "size": 222.33,
    "file_name": "ertjtn.mp4",
    "duration": {
        "hours": "0",
        "minutes": "55",
        "seconds": "44"
    },
    "thumbnail": "68.jpg",
    "views": 2346,
    "likes": [{
        "user_id": 1,
        "date_time": "2020-12-08T00:23:00.000Z"
    }],
    "dislikes": [{
        "user_id": 2,
        "date_time": "2020-12-09T00:09:00.000Z"
    }],
    "status": "public",
    "tags": [{
        "tag_id": 0,
        "tag_name": "fails"
    }, {
        "tag_id": 1,
        "tag_name": "2020"
    }],
    "user_id": 0,
    "publication_date_time": "2020-12-08T00:22:00.000Z"
};



print("***********saving channels*********");
db.channels.save(channel1);
db.channels.save(channel2);

print("***********saving comments*********");
db.comments.save(comment1);
db.comments.save(comment2);

print("***********saving playlist*********");
db.playlist.save(playlist1);
db.playlist.save(playlist2);

print("***********saving users*********");
db.users.save(user1);
db.users.save(user2);
db.users.save(user3);

print("***********saving videos*********");
db.videos.save(video1);
db.videos.save(video2);



print("SCRIPT FINISHED");