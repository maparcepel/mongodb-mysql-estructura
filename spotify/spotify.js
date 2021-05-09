print("STARTING SCRIPT");

conn = new Mongo("localhost");

db = conn.getDB("spotify");

db.dropDatabase();


db.createCollection("albums");
db.createCollection("artists");
db.createCollection("playlists");
db.createCollection("tracks");
db.createCollection("users");



print("***********creating albums*********");

album1 = {
        "album_id": 0,
        "title": "dlgjlgjk",
        "year": "1999",
        "image": "dfhh.jpg",
        "artist_id": 0
    },


    album2 = {
        "album_id": 1,
        "title": "jgkgjkghjk",
        "year": "2020",
        "image": "ghjkk.jpg",
        "artist_id": 1
    };

print("***********creating artists*********");

artist1 = {
    "artist_id": 0,
    "name": "ladjflkjs",
    "image": "sfdgdfgdfg.jpg",
    "related_artists": [{
        "artist_id": 1
    }]
};

artist2 = {
    "artist_id": 1,
    "name": "kyukty",
    "image": ".ioñuiojpg",
    "related_artists": [{
        "artist_id": 0
    }]
};


print("***********creating playlists*********");

playlist1 = {
    "playlist_id": 0,
    "title": "mis favoritos 2020",
    "tracks_number": 2,
    "creation_date": new Date("2020-05-18T16:00:00Z"),
    "status": ["deleted", {
        "date": new Date("2021-05-18T16:00:00Z")
    }],
    "user_id": 0,
    "shared": [{
        "user_id": 1
    }],
    "tracks": [{
        "track_id": 0,
        "user_id": 0,
        "date": new Date("2020-05-19T16:00:00Z")
    }, {
        "track_id": 1,
        "user_id": 1,
        "date": new Date("2020-05-20T16:00:00Z")
    }]
};


print("***********creating tracks*********");

track1 = {
    "track_id": 0,
    "title": "sgdhdg",
    "duration": {
        "hours": 0,
        "minutes": 5,
        "seconds": 22
    },
    "plays": 5200,
    "album_id": 0
};

track2 = {
    "track_id": 1,
    "title": "789p8",
    "duration": {
        "hours": 0,
        "minutes": 2,
        "seconds": 33
    },
    "plays": 3334,
    "album_id": 0
};

track3 = {
    "track_id": 2,
    "title": "fhjsdfh",
    "duration": {
        "hours": 0,
        "minutes": 3,
        "seconds": 44
    },
    "plays": 555,
    "album_id": 1
};

track4 = {
    "track_id": 3,
    "title": "hkljklk",
    "duration": {
        "hours": 0,
        "minutes": 4,
        "seconds": 33
    },
    "plays": 555,
    "album_id": 1
};


print("***********creating users*********");

user1 = {
    "user_id": 0,
    "email": "jkgkjk@sdd.com",
    "password": "1234",
    "name": "Marcel Molina",
    "birthday": new Date("1970-10-18T16:00:00Z"),
    "gender": "male",
    "country": "España",
    "zip": "08731",
    "user_type": "premium",
    "subscription": {
        "subscription_date": new Date("2020-10-18T16:00:00Z"),
        "renew_date": new Date("2021-10-18T16:00:00Z"),
        "payment_type": {
            "credit_card": {
                "number": "1236547896325",
                "month": "10",
                "year": "2025",
                "security_code": "235"
            }
        },
        "payments": [{
            "date": new Date("2020-01-18T16:00:00Z"),
            "order_number": "12345",
            "total": 30.99
        }, {
            "date": new Date("2020-04-18T16:00:00Z"),
            "order_number": "12346",
            "total": 30.99
        }]
    },
    "followed_artists": [{
        "artist_id": 0
    }, {
        "artist_id": 1
    }],
    "favorite_albums": [{
        "album_id": 1
    }],
    "favorite_tracks": [{
        "track_id": 0
    }, {
        "track_id": 1
    }]
};

user2 = {
    "user_id": 1,
    "email": "thth@sdhthtd.com",
    "password": "3456",
    "name": "María Soto",
    "birthday": new Date("1980-10-18T16:00:00Z"),
    "gender": "female",
    "country": "España",
    "zip": "08800",
    "user_type": "free",
    "followed_artists": [{
        "artist_id": 1
    }],
    "favorite_albums": [{
        "album_id": 0
    }],
    "favorite_tracks": [{
        "track_id": 0
    }]
};



print("***********saving albums*********");
db.albums.save(album1);
db.albums.save(album2);

print("***********saving artists*********");
db.artists.save(artist1);
db.artists.save(artist2);

print("***********saving playlists*********");
db.playlists.save(playlist1);

print("***********saving tracks*********");
db.tracks.save(track1);
db.tracks.save(track2);
db.tracks.save(track3);
db.tracks.save(track4);

print("***********saving users*********");
db.users.save(user1);
db.users.save(user2);





print("SCRIPT FINISHED");