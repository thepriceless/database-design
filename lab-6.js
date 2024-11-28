use flashscore

db.createCollection("user")

const users = [
    {
        "_id": "550e8400-e29b-41d4-a716-446655440000",
        "email": "user1@example.com",
        "time_zone_offset": -5,
        "password_hash": "5e884898da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440001",
        "email": "user2@example.com",
        "time_zone_offset": 3,
        "password_hash": "6b3a55e0261b0304143f805a249d6a8f8c3f8e6f8a3f6d0a1e6a2a3c5e884898"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440002",
        "email": "user3@example.com",
        "time_zone_offset": 0,
        "password_hash": "7c3f8e6f8a3f6d0a1e6a2a3c5e884898da28047151d0e56f8dc6292773603d0d"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440003",
        "email": "user4@example.com",
        "time_zone_offset": -2,
        "password_hash": "8a3f6d0a1e6a2a3c5e884898da28047151d0e56f8dc6292773603d0d6aabbdd"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440004",
        "email": "user5@example.com",
        "time_zone_offset": 7,
        "password_hash": "9e6a2a3c5e884898da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440005",
        "email": "user6@example.com",
        "time_zone_offset": 1,
        "password_hash": "a3c5e884898da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440006",
        "email": "user7@example.com",
        "time_zone_offset": -8,
        "password_hash": "b5e884898da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440007",
        "email": "user8@example.com",
        "time_zone_offset": 4,
        "password_hash": "c884898da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440008",
        "email": "user9@example.com",
        "time_zone_offset": -3,
        "password_hash": "d898da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c5"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440009",
        "email": "user10@example.com",
        "time_zone_offset": 6,
        "password_hash": "e8da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c5e8"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440010",
        "email": "user11@example.com",
        "time_zone_offset": -1,
        "password_hash": "f9da28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c5e8"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440011",
        "email": "user12@example.com",
        "time_zone_offset": 2,
        "password_hash": "0a28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c5e884"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440012",
        "email": "user13@example.com",
        "time_zone_offset": -6,
        "password_hash": "1b28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c5e884"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440013",
        "email": "user14@example.com",
        "time_zone_offset": 5,
        "password_hash": "2c28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c5e884"
    },
    {
        "_id": "550e8400-e29b-41d4-a716-446655440014",
        "email": "user15@example.com",
        "time_zone_offset": -4,
        "password_hash": "3d28047151d0e56f8dc6292773603d0d6aabbddc8a3f6d0a1e6a2a3c5e884"
    }
]

db.user.insertMany(users);

-----------------------------------------------------

const tournaments = [
    {
        "id": "8c5cfc87-9e9b-492e-8b86-476b31a7a2c6",
        "title": "FIFA World Cup",
        "start_date": "2023-01-01",
        "end_date": "2023-01-15"
    },
    {
        "id": "b936cd5c-5d7a-4c4a-93be-376405dafb70",
        "title": "UEFA Champions League",
        "start_date": "2023-02-10",
        "end_date": "2023-02-25"
    },
    {
        "id": "010ebc4d-b47f-4a7f-81a3-99578c1c3f04",
        "title": "Copa America",
        "start_date": "2023-03-05",
        "end_date": "2023-03-20"
    },
    {
        "id": "ec2a1892-5daa-40f6-aeb0-347590a31638",
        "title": "AFC Asian Cup",
        "start_date": "2023-04-15",
        "end_date": "2023-04-30"
    },
    {
        "id": "b07a15f6-e64c-4830-99c1-e503b36230b8",
        "title": "CONCACAF Gold Cup",
        "start_date": "2023-05-20",
        "end_date": "2023-06-05"
    },
    {
        "id": "ebe6801c-9ffd-4090-8534-746d09149ee0",
        "title": "Africa Cup of Nations",
        "start_date": "2023-06-10",
        "end_date": "2023-06-25"
    },
    {
        "id": "90f1d538-d13c-4cb6-a7c4-0d6adce4e9a0",
        "title": "UEFA European Championship",
        "start_date": "2023-07-01",
        "end_date": "2023-07-15"
    },
    {
        "id": "d01abee9-3533-4ba9-8a18-4623106a2305",
        "title": "Copa Libertadores",
        "start_date": "2023-08-05",
        "end_date": "2023-08-20"
    },
    {
        "id": "8dce4bd0-b994-4d54-8ebd-7a1b2a0f603c",
        "title": "FIFA Club World Cup",
        "start_date": "2023-09-10",
        "end_date": "2023-09-25"
    },
    {
        "id": "4ad07aa4-cdb6-4f62-9a92-6b1e597a24be",
        "title": "FA Cup",
        "start_date": "2023-10-15",
        "end_date": "2023-10-30"
    },
    {
        "id": "ac9a4b79-a98f-4c60-b430-adabe0f2033d",
        "title": "Copa del Rey",
        "start_date": "2023-11-05",
        "end_date": "2023-11-20"
    },
    {
        "id": "18587ca2-763d-4e53-97e8-0f0fc776adcd",
        "title": "Serie A",
        "start_date": "2023-12-10",
        "end_date": "2023-12-25"
    },
    {
        "id": "d8a53514-645d-4c61-b5da-bb83fdb3be4c",
        "title": "Bundesliga",
        "start_date": "2024-01-15",
        "end_date": "2024-01-30"
    },
    {
        "id": "dd943718-9162-4ddc-b389-1de0390b26d6",
        "title": "Ligue 1",
        "start_date": "2024-02-10",
        "end_date": "2024-02-25"
    },
    {
        "id": "7abbcd3c-795e-4745-ac2d-f7d1a6fbc23b",
        "title": "La Liga",
        "start_date": "2024-03-05",
        "end_date": "2024-03-20"
    }
]

db.tournament.insertMany(tournaments)

-----------------------------------------------------

const news = [
    {
        "id": "9a78039b-787e-418d-93a6-39ea4239b190",
        "title": "Exciting Match Ends in Draw",
        "content": "The match between Team A and Team B ended in a thrilling draw with both teams scoring 2 goals each.",
        "image_link": "http://example.com/image1.jpg"
    },
    {
        "id": "3d446b38-8b3c-485a-8f9c-62eb554def7c",
        "title": "Player X Scores Hat-trick",
        "content": "Player X scored a hat-trick to lead his team to a 3-1 victory.",
        "image_link": "http://example.com/image2.jpg"
    },
    {
        "id": "5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac",
        "title": "Team Y Wins Championship",
        "content": "Team Y clinched the championship title after a hard-fought season.",
        "image_link": "http://example.com/image3.jpg"
    },
    {
        "id": "f0a554f0-4984-42aa-aefc-541a7d04df20",
        "title": "Injury Update on Player Z",
        "content": "Player Z is expected to be out for 6 weeks due to a knee injury.",
        "image_link": "http://example.com/image4.jpg"
    },
    {
        "id": "e007e8aa-f999-4566-b373-3fd718935ab8",
        "title": "Coach A Resigns",
        "content": "Coach A has resigned from his position after a series of poor results.",
        "image_link": "http://example.com/image5.jpg"
    },
    {
        "id": "673116e8-d20b-4c6a-ad26-35353fa922ff",
        "title": "New Signing for Team B",
        "content": "Team B has announced the signing of Player Y from Team C.",
        "image_link": "http://example.com/image6.jpg"
    },
    {
        "id": "05a2c7f5-4ed4-4759-9ace-a07e450253b1",
        "title": "Team C's Winning Streak Continues",
        "content": "Team C continues their winning streak with a 2-0 victory over Team D.",
        "image_link": "http://example.com/image7.jpg"
    },
    {
        "id": "e7f7ca8c-5ef1-404a-b34b-7ce92950d45c",
        "title": "Player W Retires",
        "content": "Player W has announced his retirement from professional football.",
        "image_link": "http://example.com/image8.jpg"
    },
    {
        "id": "6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b",
        "title": "Team E's New Manager",
        "content": "Team E has appointed Manager X as their new head coach.",
        "image_link": "http://example.com/image9.jpg"
    },
    {
        "id": "85e71b30-64d0-4e55-b3eb-a4af1d6da5d6",
        "title": "Player V Breaks Record",
        "content": "Player V has broken the record for most goals scored in a single season.",
        "image_link": "http://example.com/image10.jpg"
    },
    {
        "id": "8e93c166-a811-468a-a3b2-f67a8de546c1",
        "title": "Team F's Youth Academy Success",
        "content": "Team F's youth academy has produced several promising talents this season.",
        "image_link": "http://example.com/image11.jpg"
    },
    {
        "id": "19f0ddb6-47e0-44be-b6da-b64630b073bf",
        "title": "Player U's Charity Work",
        "content": "Player U has been recognized for his charity work off the field.",
        "image_link": "http://example.com/image12.jpg"
    },
    {
        "id": "038740ea-21fe-402c-927b-d17b46291d6f",
        "title": "Team G's Defensive Record",
        "content": "Team G has set a new defensive record with the least goals conceded.",
        "image_link": "http://example.com/image13.jpg"
    },
    {
        "id": "e90a4bb8-ce5f-4906-9c17-299e30e27193",
        "title": "Player T's Transfer Rumors",
        "content": "There are rumors that Player T might be transferring to Team H.",
        "image_link": "http://example.com/image14.jpg"
    },
    {
        "id": "8a11101e-7788-4863-973d-2d0579e9f4a4",
        "title": "Team I's Financial Troubles",
        "content": "Team I is facing financial troubles and might have to sell key players.",
        "image_link": "http://example.com/image15.jpg"
    }
]

db.football_news.insertMany(news)

-----------------------------------------------------

const football_players = [
    {
        "id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "John",
        "last_name": "Doe",
        "country_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1990-01-01",
        "market_value": 5000000,
        "contract_expires": "2025-06-30"
    },
    {
        "id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "Jane",
        "last_name": "Smith",
        "country_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1992-02-02",
        "market_value": 3000000,
        "contract_expires": "2024-12-31"
    },
    {
        "id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "Michael",
        "last_name": "Brown",
        "country_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1988-03-03",
        "market_value": 7000000,
        "contract_expires": "2023-11-30"
    },
    {
        "id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "Emily",
        "last_name": "Davis",
        "country_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1995-04-04",
        "market_value": 2000000,
        "contract_expires": "2026-05-31"
    },
    {
        "id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "Chris",
        "last_name": "Wilson",
        "country_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1991-05-05",
        "market_value": 4500000,
        "contract_expires": "2025-07-31"
    },
    {
        "id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "Jessica",
        "last_name": "Moore",
        "country_id": "7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1993-06-06",
        "market_value": 3500000,
        "contract_expires": "2024-08-31"
    },
    {
        "id": "7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "David",
        "last_name": "Taylor",
        "country_id": "8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1989-07-07",
        "market_value": 6000000,
        "contract_expires": "2023-09-30"
    },
    {
        "id": "8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "Ashley",
        "last_name": "Anderson",
        "country_id": "9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1994-08-08",
        "market_value": 2500000,
        "contract_expires": "2026-10-31"
    },
    {
        "id": "9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "first_name": "Matthew",
        "last_name": "Thomas",
        "country_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "birth_date": "1990-09-09",
        "market_value": 5500000,
        "contract_expires": "2025-12-31"
    },
    {
        "id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "first_name": "Laura",
        "last_name": "Jackson",
        "country_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "birth_date": "1992-10-10",
        "market_value": 4000000,
        "contract_expires": "2024-11-30"
    },
    {
        "id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "first_name": "Daniel",
        "last_name": "White",
        "country_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "birth_date": "1988-11-11",
        "market_value": 6500000,
        "contract_expires": "2023-10-31"
    },
    {
        "id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "first_name": "Sarah",
        "last_name": "Harris",
        "country_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "birth_date": "1995-12-12",
        "market_value": 3000000,
        "contract_expires": "2026-09-30"
    },
    {
        "id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "first_name": "James",
        "last_name": "Martin",
        "country_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "birth_date": "1991-01-13",
        "market_value": 5000000,
        "contract_expires": "2025-08-31"
    },
    {
        "id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "first_name": "Olivia",
        "last_name": "Thompson",
        "country_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "birth_date": "1993-02-14",
        "market_value": 3500000,
        "contract_expires": "2024-07-31"
    },
    {
        "id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "first_name": "Joshua",
        "last_name": "Garcia",
        "country_id": "7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "birth_date": "1989-03-15",
        "market_value": 6000000,
        "contract_expires": "2023-06-30"
    }
]

db.football_player.insertMany(football_players)

-----------------------------------------------------

const football_teams = [
    {
        "id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "name": "Manchester United",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174000",
        "logo_link": "http://example.com/logo1.png"
    },
    {
        "id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "name": "Real Madrid",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174001",
        "logo_link": "http://example.com/logo2.png"
    },
    {
        "id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "name": "Barcelona",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174002",
        "logo_link": "http://example.com/logo3.png"
    },
    {
        "id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "name": "Juventus",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174003",
        "logo_link": "http://example.com/logo4.png"
    },
    {
        "id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "name": "Bayern Munich",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174004",
        "logo_link": "http://example.com/logo5.png"
    },
    {
        "id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "name": "Paris Saint-Germain",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174005",
        "logo_link": "http://example.com/logo6.png"
    },
    {
        "id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "name": "Liverpool",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174006",
        "logo_link": "http://example.com/logo7.png"
    },
    {
        "id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "name": "Manchester City",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174007",
        "logo_link": "http://example.com/logo8.png"
    },
    {
        "id": "39d10960-dabe-4884-985d-6490de46324b",
        "name": "Chelsea",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174008",
        "logo_link": "http://example.com/logo9.png"
    },
    {
        "id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "name": "Arsenal",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174009",
        "logo_link": "http://example.com/logo10.png"
    },
    {
        "id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "name": "Tottenham Hotspur",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174010",
        "logo_link": "http://example.com/logo11.png"
    },
    {
        "id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "name": "AC Milan",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174011",
        "logo_link": "http://example.com/logo12.png"
    },
    {
        "id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "name": "Inter Milan",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174012",
        "logo_link": "http://example.com/logo13.png"
    },
    {
        "id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "name": "Borussia Dortmund",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174013",
        "logo_link": "http://example.com/logo14.png"
    },
    {
        "id": "35936ead-beb8-498a-a254-b163135079e7",
        "name": "Atletico Madrid",
        "home_venue_id": "123e4567-e89b-12d3-a456-426614174014",
        "logo_link": "http://example.com/logo15.png"
    }
]

db.football_team.insertMany(football_teams)

-----------------------------------------------------

const transfers = [
    {
        "id": "ddfb78a3-ed1f-4205-80c5-9f90604e6cbc",
        "source_team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "target_team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "player_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 1,
        "fee": 5000000,
        "date": "2023-01-01"
    },
    {
        "id": "c558150e-d195-4176-ba94-d39b3e2d5ad0",
        "source_team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "target_team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "player_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 2,
        "fee": null,
        "date": "2023-02-02"
    },
    {
        "id": "9cac8a6f-d385-44a3-9ca7-f58da118424a",
        "source_team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "target_team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 1,
        "fee": 7000000,
        "date": "2023-03-03"
    },
    {
        "id": "e40435b2-37b8-4d45-91f7-4bb06a13c04b",
        "source_team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "target_team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "player_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 2,
        "fee": 2000000,
        "date": "2023-04-04"
    },
    {
        "id": "e289a236-1f46-490a-aa66-bf772eb652f5",
        "source_team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "target_team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 1,
        "fee": 4500000,
        "date": "2023-05-05"
    },
    {
        "id": "cc7d9dde-8b69-4a84-9e6e-7160b2860eff",
        "source_team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "target_team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "player_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 2,
        "fee": null,
        "date": "2023-06-06"
    },
    {
        "id": "e0605f17-9853-4b0b-99ad-8f95414ac1c8",
        "source_team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "target_team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "player_id": "7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 1,
        "fee": 6000000,
        "date": "2023-07-07"
    },
    {
        "id": "1b0dd186-bde5-4097-8c61-ee53bf0652c9",
        "source_team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "target_team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "player_id": "8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 2,
        "fee": 2500000,
        "date": "2023-08-08"
    },
    {
        "id": "8962815b-9be8-4345-bbc9-a1f0ee418332",
        "source_team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "target_team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "player_id": "9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "type": 1,
        "fee": 5500000,
        "date": "2023-09-09"
    },
    {
        "id": "d537472f-f550-48bb-8d7f-4175c0c2a92e",
        "source_team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "target_team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "player_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "type": 2,
        "fee": 4000000,
        "date": "2023-10-10"
    },
    {
        "id": "346eacaa-682f-4a73-8e08-9ce04a032be0",
        "source_team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "target_team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "player_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "type": 1,
        "fee": 6500000,
        "date": "2023-11-11"
    },
    {
        "id": "eaa8aae2-3c35-4bfb-a3a2-c48dfde2c8bb",
        "source_team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "target_team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "type": 2,
        "fee": 3000000,
        "date": "2023-12-12"
    },
    {
        "id": "1deffc71-de2e-4171-a904-fb5b5c2276cc",
        "source_team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "target_team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "player_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "type": 1,
        "fee": null,
        "date": "2024-01-13"
    },
    {
        "id": "4b48267f-1b13-4030-81ec-a00581ada452",
        "source_team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "target_team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "type": 2,
        "fee": 3500000,
        "date": "2024-02-14"
    },
    {
        "id": "bdda3f31-4f2d-41db-aff2-235fcf80805f",
        "source_team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "target_team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "player_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "type": 1,
        "fee": 6000000,
        "date": "2024-03-15"
    }
];

db.football_transfer.insertMany(transfers);

-----------------------------------------------------

const games = [
    {
        "id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "tournament_id": "8c5cfc87-9e9b-492e-8b86-476b31a7a2c6",
        "home_team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "away_team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "venue_id": "123e4567-e89b-12d3-a456-426614174000",
        "start_time": "2023-01-01 15:00:00",
        "tournament_phase": "Group Stage",
        "referee_id": "123e4567-e89b-12d3-a456-426614174015",
        "state": 1,
        "attendance": 50000
    },
    {
        "id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "tournament_id": "b936cd5c-5d7a-4c4a-93be-376405dafb70",
        "home_team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "away_team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "venue_id": "123e4567-e89b-12d3-a456-426614174001",
        "start_time": "2023-02-10 18:00:00",
        "tournament_phase": "Quarter Final",
        "referee_id": null,
        "state": 1,
        "attendance": null
    },
    {
        "id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "tournament_id": "010ebc4d-b47f-4a7f-81a3-99578c1c3f04",
        "home_team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "away_team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "venue_id": "123e4567-e89b-12d3-a456-426614174002",
        "start_time": "2023-03-05 20:00:00",
        "tournament_phase": "Semi Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174017",
        "state": 1,
        "attendance": 55000
    },
    {
        "id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "tournament_id": "ec2a1892-5daa-40f6-aeb0-347590a31638",
        "home_team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "away_team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "venue_id": "123e4567-e89b-12d3-a456-426614174003",
        "start_time": "2023-04-15 17:00:00",
        "tournament_phase": "Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174018",
        "state": 2,
        "attendance": 70000
    },
    {
        "id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "tournament_id": "b07a15f6-e64c-4830-99c1-e503b36230b8",
        "home_team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "away_team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "venue_id": "123e4567-e89b-12d3-a456-426614174004",
        "start_time": "2023-05-20 16:00:00",
        "tournament_phase": "Group Stage",
        "referee_id": "123e4567-e89b-12d3-a456-426614174019",
        "state": 2,
        "attendance": 45000
    },
    {
        "id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "tournament_id": "ebe6801c-9ffd-4090-8534-746d09149ee0",
        "home_team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "away_team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "venue_id": "123e4567-e89b-12d3-a456-426614174005",
        "start_time": "2023-06-10 19:00:00",
        "tournament_phase": "Quarter Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174020",
        "state": 0,
        "attendance": 50000
    },
    {
        "id": "b67ac32c-1766-431a-ab71-684137789b34",
        "tournament_id": "90f1d538-d13c-4cb6-a7c4-0d6adce4e9a0",
        "home_team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "away_team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "venue_id": "123e4567-e89b-12d3-a456-426614174006",
        "start_time": "2023-07-01 21:00:00",
        "tournament_phase": "Semi Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174021",
        "state": 1,
        "attendance": 60000
    },
    {
        "id": "bd1384b8-6888-4979-ab4f-b6d0350d17f8",
        "tournament_id": "d01abee9-3533-4ba9-8a18-4623106a2305",
        "home_team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "away_team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "venue_id": "123e4567-e89b-12d3-a456-426614174007",
        "start_time": "2023-08-05 15:00:00",
        "tournament_phase": "Final",
        "referee_id": null,
        "state": 2,
        "attendance": 70000
    },
    {
        "id": "80138913-36fb-477f-98a8-70f087db0b84",
        "tournament_id": "8dce4bd0-b994-4d54-8ebd-7a1b2a0f603c",
        "home_team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "away_team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "venue_id": "123e4567-e89b-12d3-a456-426614174008",
        "start_time": "2023-09-10 18:00:00",
        "tournament_phase": "Group Stage",
        "referee_id": "123e4567-e89b-12d3-a456-426614174023",
        "state": 1,
        "attendance": 50000
    },
    {
        "id": "497ad638-b577-42cb-8b3e-e78f3518fee8",
        "tournament_id": "4ad07aa4-cdb6-4f62-9a92-6b1e597a24be",
        "home_team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "away_team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "venue_id": "123e4567-e89b-12d3-a456-426614174009",
        "start_time": "2023-10-15 20:00:00",
        "tournament_phase": "Quarter Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174024",
        "state": 1,
        "attendance": null
    },
    {
        "id": "b707621f-315f-4b13-a7ab-f03466b573dc",
        "tournament_id": "ac9a4b79-a98f-4c60-b430-adabe0f2033d",
        "home_team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "away_team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "venue_id": "123e4567-e89b-12d3-a456-426614174010",
        "start_time": "2023-11-05 17:00:00",
        "tournament_phase": "Semi Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174025",
        "state": 1,
        "attendance": 55000
    },
    {
        "id": "4c108766-1782-41b1-a645-59e565728c06",
        "tournament_id": "18587ca2-763d-4e53-97e8-0f0fc776adcd",
        "home_team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "away_team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "venue_id": "123e4567-e89b-12d3-a456-426614174011",
        "start_time": "2023-12-10 19:00:00",
        "tournament_phase": "Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174026",
        "state": 1,
        "attendance": 70000
    },
    {
        "id": "f22fed0e-8a9c-463d-8772-d044d76e849f",
        "tournament_id": "d8a53514-645d-4c61-b5da-bb83fdb3be4c",
        "home_team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "away_team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "venue_id": "123e4567-e89b-12d3-a456-426614174012",
        "start_time": "2024-01-15 15:00:00",
        "tournament_phase": "Group Stage",
        "referee_id": "123e4567-e89b-12d3-a456-426614174027",
        "state": 1,
        "attendance": 50000
    },
    {
        "id": "aa2fed0e-8a9c-463d-8772-d044d76e8492",
        "tournament_id": "dd943718-9162-4ddc-b389-1de0390b26d6",
        "home_team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "away_team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "venue_id": "123e4567-e89b-12d3-a456-426614174013",
        "start_time": "2024-02-10 18:00:00",
        "tournament_phase": "Quarter Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174028",
        "state": 1,
        "attendance": 60000
    },
    {
        "id": "8907621f-315f-4b13-a7ab-f03466b573da",
        "tournament_id": "7abbcd3c-795e-4745-ac2d-f7d1a6fbc23b",
        "home_team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "away_team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "venue_id": "123e4567-e89b-12d3-a456-426614174014",
        "start_time": "2024-03-05 20:00:00",
        "tournament_phase": "Semi Final",
        "referee_id": "123e4567-e89b-12d3-a456-426614174029",
        "state": 2,
        "attendance": null
    }
];

db.football_game.insertMany(games);

-----------------------------------------------------

const lineups = [
    {
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "formation": "4-3-3"
    },
    {
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "formation": "4-4-2"
    },
    {
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "formation": "3-5-2"
    },
    {
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "formation": "4-3-3"
    },
    {
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "formation": "4-2-3-1"
    },
    {
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "formation": "4-4-2"
    },
    {
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "formation": "4-3-3"
    },
    {
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "formation": "4-2-3-1"
    },
    {
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "formation": "4-4-2"
    },
    {
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "formation": "3-5-2"
    },
    {
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "formation": "4-3-3"
    },
    {
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "formation": "4-4-2"
    },
    {
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "formation": "4-2-3-1"
    },
    {
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "formation": "4-3-3"
    },
    {
        "game_id": "bd1384b8-6888-4979-ab4f-b6d0350d17f8",
        "team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "formation": "4-4-2"
    }
];

db.football_game_lineup.insertMany(lineups);

-----------------------------------------------------

const playersInMatch = [
    {
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "player_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "position_on_field": 1,
        "rating": 7.5,
        "comment": "Good performance",
        "goals": 1,
        "assists": 0,
        "minutes_played": 90
    },
    {
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "player_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "position_on_field": 2,
        "rating": null,
        "comment": "Solid defense",
        "goals": 0,
        "assists": 1,
        "minutes_played": 85
    },
    {
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "position_on_field": 3,
        "rating": 8.0,
        "comment": null,
        "goals": 2,
        "assists": 1,
        "minutes_played": 90
    },
    {
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "player_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "position_on_field": 4,
        "rating": 7.2,
        "comment": "Good midfield",
        "goals": 0,
        "assists": 2,
        "minutes_played": 88
    },
    {
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "position_on_field": 5,
        "rating": 6.5,
        "comment": "Average game",
        "goals": 0,
        "assists": 0,
        "minutes_played": 75
    },
    {
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "player_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "position_on_field": 6,
        "rating": 7.0,
        "comment": "Good effort",
        "goals": 1,
        "assists": 0,
        "minutes_played": 80
    },
    {
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "player_id": "7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "position_on_field": 7,
        "rating": 7.8,
        "comment": "Great goal",
        "goals": 1,
        "assists": 1,
        "minutes_played": 90
    },
    {
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "player_id": "8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "position_on_field": 8,
        "rating": 6.9,
        "comment": "Decent play",
        "goals": 0,
        "assists": 1,
        "minutes_played": 85
    },
    {
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "player_id": "9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "position_on_field": 9,
        "rating": 7.3,
        "comment": null,
        "goals": 1,
        "assists": 0,
        "minutes_played": 90
    },
    {
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "player_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "position_on_field": 10,
        "rating": 7.1,
        "comment": "Good teamwork",
        "goals": 0,
        "assists": 2,
        "minutes_played": 88
    },
    {
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "player_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "position_on_field": 11,
        "rating": 6.7,
        "comment": "Average performance",
        "goals": 0,
        "assists": 0,
        "minutes_played": 75
    },
    {
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "position_on_field": 1,
        "rating": 7.4,
        "comment": "Good defense",
        "goals": 0,
        "assists": 1,
        "minutes_played": 80
    },
    {
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "player_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "position_on_field": 2,
        "rating": 7.9,
        "comment": null,
        "goals": 2,
        "assists": 0,
        "minutes_played": 90
    },
    {
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "position_on_field": 3,
        "rating": 7.6,
        "comment": "Good effort",
        "goals": 1,
        "assists": 1,
        "minutes_played": 85
    },
    {
        "game_id": "bd1384b8-6888-4979-ab4f-b6d0350d17f8",
        "player_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "position_on_field": 4,
        "rating": 7.2,
        "comment": "Solid game",
        "goals": 0,
        "assists": 2,
        "minutes_played": null
    }
];

db.football_game_in_match_player.insertMany(playersInMatch);

-----------------------------------------------------

const teamStatistics = [
    {
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "ball_possession": 55,
        "goals": 2,
        "goal_attempts": 10,
        "corners": 5,
        "yellow_cards": 1,
        "offsides": 3
    },
    {
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "ball_possession": 45,
        "goals": 1,
        "goal_attempts": 8,
        "corners": 4,
        "yellow_cards": 2,
        "offsides": 2
    },
    {
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "ball_possession": 60,
        "goals": 3,
        "goal_attempts": 12,
        "corners": 6,
        "yellow_cards": 0,
        "offsides": 1
    },
    {
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "ball_possession": 40,
        "goals": 1,
        "goal_attempts": 7,
        "corners": 3,
        "yellow_cards": 1,
        "offsides": 4
    },
    {
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "ball_possession": 52,
        "goals": 2,
        "goal_attempts": 9,
        "corners": 5,
        "yellow_cards": 2,
        "offsides": 3
    },
    {
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "ball_possession": 48,
        "goals": 1,
        "goal_attempts": 8,
        "corners": 4,
        "yellow_cards": 1,
        "offsides": 2
    },
    {
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "ball_possession": 57,
        "goals": 3,
        "goal_attempts": 11,
        "corners": 6,
        "yellow_cards": 0,
        "offsides": 1
    },
    {
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "ball_possession": 43,
        "goals": 1,
        "goal_attempts": 7,
        "corners": 3,
        "yellow_cards": 2,
        "offsides": 4
    },
    {
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "ball_possession": 50,
        "goals": 2,
        "goal_attempts": 10,
        "corners": 5,
        "yellow_cards": 1,
        "offsides": 3
    },
    {
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "ball_possession": 50,
        "goals": 2,
        "goal_attempts": 9,
        "corners": 4,
        "yellow_cards": 2,
        "offsides": 2
    },
    {
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "ball_possession": 53,
        "goals": 2,
        "goal_attempts": 10,
        "corners": 5,
        "yellow_cards": 1,
        "offsides": 3
    },
    {
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "ball_possession": 47,
        "goals": 1,
        "goal_attempts": 8,
        "corners": 4,
        "yellow_cards": 2,
        "offsides": 2
    },
    {
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "ball_possession": 55,
        "goals": 3,
        "goal_attempts": 11,
        "corners": 6,
        "yellow_cards": 0,
        "offsides": 1
    },
    {
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "ball_possession": 45,
        "goals": 1,
        "goal_attempts": 7,
        "corners": 3,
        "yellow_cards": 2,
        "offsides": 4
    },
    {
        "game_id": "bd1384b8-6888-4979-ab4f-b6d0350d17f8",
        "team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "ball_possession": 50,
        "goals": 2,
        "goal_attempts": 10,
        "corners": 5,
        "yellow_cards": 1,
        "offsides": 3
    }
];

db.football_game_team_statistics.insertMany(teamStatistics);

-----------------------------------------------------

const gameSummaryParts = [
    {
        "id": "02663165-6236-4fd3-93be-f3f0f96a645a",
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "game_minute": 10,
        "type": 1,
        "initiator_player_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": null,
        "foul_reason": "Handball"
    },
    {
        "id": "a456f292-b04d-4381-ae85-0f61a3262da5",
        "game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "game_minute": 20,
        "type": 2,
        "initiator_player_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "foul_reason": null
    },
    {
        "id": "8d4e176f-6507-4de9-ac12-5ecb9595b7e3",
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "game_minute": 30,
        "type": 3,
        "initiator_player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": null,
        "foul_reason": "Foul"
    },
    {
        "id": "6894b255-6280-49f5-a3a2-50bd9a514935",
        "game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "game_minute": 40,
        "type": 4,
        "initiator_player_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "foul_reason": null
    },
    {
        "id": "be955f2a-7dd4-4177-a8f9-4c5d5a55c4a0",
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "game_minute": 50,
        "type": 1,
        "initiator_player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "foul_reason": "Offside"
    },
    {
        "id": "6cfe828a-968a-41d8-bc86-6216bb86be89",
        "game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "game_minute": 60,
        "type": 2,
        "initiator_player_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": null,
        "foul_reason": null
    },
    {
        "id": "669e339c-f51d-49fe-a12b-1faa37b7381c",
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "game_minute": 70,
        "type": 3,
        "initiator_player_id": "7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": "8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "foul_reason": "Handball"
    },
    {
        "id": "639c214b-09d3-4ce3-a58d-aa9835b4a993",
        "game_id": "94641756-d952-40b5-b56f-2eff719a3bbc",
        "game_minute": 80,
        "type": 4,
        "initiator_player_id": "8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": null,
        "foul_reason": null
    },
    {
        "id": "e86aab76-73e3-4681-8b18-b4eeb098ee38",
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "game_minute": 90,
        "type": 1,
        "initiator_player_id": "9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b",
        "support_player_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "foul_reason": "Foul"
    },
    {
        "id": "7aff6083-2b36-4516-9342-dc37edfbfc31",
        "game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "game_minute": 14,
        "type": 2,
        "initiator_player_id": "1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "support_player_id": null,
        "foul_reason": null
    },
    {
        "id": "899da8ea-5662-4f8d-9f17-1473855ac9d4",
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "game_minute": 43,
        "type": 3,
        "initiator_player_id": "2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "support_player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "foul_reason": "Offside"
    },
    {
        "id": "6c74bb47-aebd-47ce-bd24-3ae856842fab",
        "game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8",
        "game_minute": 42,
        "type": 4,
        "initiator_player_id": "3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "support_player_id": null,
        "foul_reason": null
    },
    {
        "id": "4fcc3a6d-4ddc-4b22-8b73-187c3dd28f62",
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "game_minute": 2,
        "type": 1,
        "initiator_player_id": "4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "support_player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "foul_reason": "Handball"
    },
    {
        "id": "a91a14f8-659d-4870-92a4-3488e62e600f",
        "game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "game_minute": 5,
        "type": 2,
        "initiator_player_id": "5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "support_player_id": null,
        "foul_reason": null
    },
    {
        "id": "fe273978-927c-47be-8f79-516a5305c880",
        "game_id": "bd1384b8-6888-4979-ab4f-b6d0350d17f8",
        "game_minute": 10,
        "type": 3,
        "initiator_player_id": "6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c",
        "support_player_id": null,
        "foul_reason": "Foul"
    }
];

db.football_game_summary_part.insertMany(gameSummaryParts);

-----------------------------------------------------

const subscriptions = [
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "football_game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "football_game_id": "bdd52087-ddb1-4152-9e58-e630df420511"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440002",
        "football_game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440003",
        "football_game_id": "94641756-d952-40b5-b56f-2eff719a3bbc"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440004",
        "football_game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440004",
        "football_game_id": "01c7e9da-c124-4561-b80b-ea0dad982cf8"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440004",
        "football_game_id": "b67ac32c-1766-431a-ab71-684137789b34"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440007",
        "football_game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440008",
        "football_game_id": "80138913-36fb-477f-98a8-70f087db0b84"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440009",
        "football_game_id": "497ad638-b577-42cb-8b3e-e78f3518fee8"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440010",
        "football_game_id": "b707621f-315f-4b13-a7ab-f03466b573dc"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440011",
        "football_game_id": "4c108766-1782-41b1-a645-59e565728c06"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440012",
        "football_game_id": "f22fed0e-8a9c-463d-8772-d044d76e849f"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440013",
        "football_game_id": "aa2fed0e-8a9c-463d-8772-d044d76e8492"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440014",
        "football_game_id": "8907621f-315f-4b13-a7ab-f03466b573da"
    }
];

db.user_footballgame_subscription.insertMany(subscriptions);

-----------------------------------------------------

const tournamentSubscriptions = [
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440000",
        "tournament_id": "8c5cfc87-9e9b-492e-8b86-476b31a7a2c6"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440001",
        "tournament_id": "b936cd5c-5d7a-4c4a-93be-376405dafb70"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440005",
        "tournament_id": "010ebc4d-b47f-4a7f-81a3-99578c1c3f04"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440003",
        "tournament_id": "ec2a1892-5daa-40f6-aeb0-347590a31638"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440004",
        "tournament_id": "b07a15f6-e64c-4830-99c1-e503b36230b8"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440005",
        "tournament_id": "ebe6801c-9ffd-4090-8534-746d09149ee0"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440006",
        "tournament_id": "90f1d538-d13c-4cb6-a7c4-0d6adce4e9a0"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440007",
        "tournament_id": "d01abee9-3533-4ba9-8a18-4623106a2305"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440008",
        "tournament_id": "8dce4bd0-b994-4d54-8ebd-7a1b2a0f603c"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440009",
        "tournament_id": "4ad07aa4-cdb6-4f62-9a92-6b1e597a24be"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440010",
        "tournament_id": "d8a53514-645d-4c61-b5da-bb83fdb3be4c"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440011",
        "tournament_id": "d8a53514-645d-4c61-b5da-bb83fdb3be4c"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440012",
        "tournament_id": "d8a53514-645d-4c61-b5da-bb83fdb3be4c"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440013",
        "tournament_id": "dd943718-9162-4ddc-b389-1de0390b26d6"
    },
    {
        "user_id": "550e8400-e29b-41d4-a716-446655440014",
        "tournament_id": "7abbcd3c-795e-4745-ac2d-f7d1a6fbc23b"
    }
];

db.tournament_user_subscription.insertMany(tournamentSubscriptions);

-----------------------------------------------------

const gameNewsLinks = [
    {
        "football_game_id": "ba0c5f2c-3ba8-4be8-9359-6f70710c942e",
        "football_news_id": "9a78039b-787e-418d-93a6-39ea4239b190"
    },
    {
        "football_game_id": "bdd52087-ddb1-4152-9e58-e630df420511",
        "football_news_id": "3d446b38-8b3c-485a-8f9c-62eb554def7c"
    },
    {
        "football_game_id": "fedc58bd-9528-429a-9e1b-fae33e67c986",
        "football_news_id": "5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac"
    },
    {
        "football_game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "football_news_id": "f0a554f0-4984-42aa-aefc-541a7d04df20"
    },
    {
        "football_game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "football_news_id": "e007e8aa-f999-4566-b373-3fd718935ab8"
    },
    {
        "football_game_id": "b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96",
        "football_news_id": "673116e8-d20b-4c6a-ad26-35353fa922ff"
    },
    {
        "football_game_id": "b67ac32c-1766-431a-ab71-684137789b34",
        "football_news_id": "05a2c7f5-4ed4-4759-9ace-a07e450253b1"
    },
    {
        "football_game_id": "bd1384b8-6888-4979-ab4f-b6d0350d17f8",
        "football_news_id": "e7f7ca8c-5ef1-404a-b34b-7ce92950d45c"
    },
    {
        "football_game_id": "80138913-36fb-477f-98a8-70f087db0b84",
        "football_news_id": "6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b"
    },
    {
        "football_game_id": "497ad638-b577-42cb-8b3e-e78f3518fee8",
        "football_news_id": "85e71b30-64d0-4e55-b3eb-a4af1d6da5d6"
    },
    {
        "football_game_id": "b707621f-315f-4b13-a7ab-f03466b573dc",
        "football_news_id": "8e93c166-a811-468a-a3b2-f67a8de546c1"
    },
    {
        "football_game_id": "4c108766-1782-41b1-a645-59e565728c06",
        "football_news_id": "19f0ddb6-47e0-44be-b6da-b64630b073bf"
    },
    {
        "football_game_id": "f22fed0e-8a9c-463d-8772-d044d76e849f",
        "football_news_id": "038740ea-21fe-402c-927b-d17b46291d6f"
    },
    {
        "football_game_id": "aa2fed0e-8a9c-463d-8772-d044d76e8492",
        "football_news_id": "e90a4bb8-ce5f-4906-9c17-299e30e27193"
    },
    {
        "football_game_id": "8907621f-315f-4b13-a7ab-f03466b573da",
        "football_news_id": "8a11101e-7788-4863-973d-2d0579e9f4a4"
    }
];

db.footballgame_footballnews.insertMany(gameNewsLinks);

-----------------------------------------------------

const tournamentNewsLinks = [
    {
        "tournament_id": "8c5cfc87-9e9b-492e-8b86-476b31a7a2c6",
        "football_news_id": "9a78039b-787e-418d-93a6-39ea4239b190"
    },
    {
        "tournament_id": "b936cd5c-5d7a-4c4a-93be-376405dafb70",
        "football_news_id": "3d446b38-8b3c-485a-8f9c-62eb554def7c"
    },
    {
        "tournament_id": "010ebc4d-b47f-4a7f-81a3-99578c1c3f04",
        "football_news_id": "5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac"
    },
    {
        "tournament_id": "ec2a1892-5daa-40f6-aeb0-347590a31638",
        "football_news_id": "f0a554f0-4984-42aa-aefc-541a7d04df20"
    },
    {
        "tournament_id": "b07a15f6-e64c-4830-99c1-e503b36230b8",
        "football_news_id": "e007e8aa-f999-4566-b373-3fd718935ab8"
    },
    {
        "tournament_id": "ebe6801c-9ffd-4090-8534-746d09149ee0",
        "football_news_id": "673116e8-d20b-4c6a-ad26-35353fa922ff"
    },
    {
        "tournament_id": "90f1d538-d13c-4cb6-a7c4-0d6adce4e9a0",
        "football_news_id": "05a2c7f5-4ed4-4759-9ace-a07e450253b1"
    },
    {
        "tournament_id": "d01abee9-3533-4ba9-8a18-4623106a2305",
        "football_news_id": "e7f7ca8c-5ef1-404a-b34b-7ce92950d45c"
    },
    {
        "tournament_id": "8dce4bd0-b994-4d54-8ebd-7a1b2a0f603c",
        "football_news_id": "6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b"
    },
    {
        "tournament_id": "4ad07aa4-cdb6-4f62-9a92-6b1e597a24be",
        "football_news_id": "85e71b30-64d0-4e55-b3eb-a4af1d6da5d6"
    },
    {
        "tournament_id": "ac9a4b79-a98f-4c60-b430-adabe0f2033d",
        "football_news_id": "8e93c166-a811-468a-a3b2-f67a8de546c1"
    },
    {
        "tournament_id": "18587ca2-763d-4e53-97e8-0f0fc776adcd",
        "football_news_id": "19f0ddb6-47e0-44be-b6da-b64630b073bf"
    },
    {
        "tournament_id": "d8a53514-645d-4c61-b5da-bb83fdb3be4c",
        "football_news_id": "038740ea-21fe-402c-927b-d17b46291d6f"
    },
    {
        "tournament_id": "dd943718-9162-4ddc-b389-1de0390b26d6",
        "football_news_id": "e90a4bb8-ce5f-4906-9c17-299e30e27193"
    },
    {
        "tournament_id": "7abbcd3c-795e-4745-ac2d-f7d1a6fbc23b",
        "football_news_id": "8a11101e-7788-4863-973d-2d0579e9f4a4"
    }
];

db.tournament_footballnews.insertMany(tournamentNewsLinks);

-----------------------------------------------------

const teamNewsLinks = [
    {
        "football_team_id": "f15a90b8-60ef-44d3-a2b5-13a36f31b715",
        "football_news_id": "9a78039b-787e-418d-93a6-39ea4239b190"
    },
    {
        "football_team_id": "8b4468fe-ef7f-451d-aacd-b0b619ca04f8",
        "football_news_id": "3d446b38-8b3c-485a-8f9c-62eb554def7c"
    },
    {
        "football_team_id": "f1abaf7e-1bbb-4a09-90e3-989d97a3d934",
        "football_news_id": "5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac"
    },
    {
        "football_team_id": "b4d71df3-6f2f-4339-be45-a247384d6129",
        "football_news_id": "f0a554f0-4984-42aa-aefc-541a7d04df20"
    },
    {
        "football_team_id": "c8087196-94fc-4f6b-8432-7cd5edf1efb8",
        "football_news_id": "e007e8aa-f999-4566-b373-3fd718935ab8"
    },
    {
        "football_team_id": "9404783a-1c8c-4db9-9422-ec296a2ce14d",
        "football_news_id": "673116e8-d20b-4c6a-ad26-35353fa922ff"
    },
    {
        "football_team_id": "08ac04ba-da3f-42aa-a9e1-a4587d02c5e4",
        "football_news_id": "05a2c7f5-4ed4-4759-9ace-a07e450253b1"
    },
    {
        "football_team_id": "b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1",
        "football_news_id": "e7f7ca8c-5ef1-404a-b34b-7ce92950d45c"
    },
    {
        "football_team_id": "39d10960-dabe-4884-985d-6490de46324b",
        "football_news_id": "6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b"
    },
    {
        "football_team_id": "cc793045-c139-4c65-a2a8-72daf585b0d0",
        "football_news_id": "85e71b30-64d0-4e55-b3eb-a4af1d6da5d6"
    },
    {
        "football_team_id": "22598e16-db68-4f50-9de6-6fab813410cc",
        "football_news_id": "8e93c166-a811-468a-a3b2-f67a8de546c1"
    },
    {
        "football_team_id": "f26eda2b-f221-458d-a1ed-2dd36352f44d",
        "football_news_id": "19f0ddb6-47e0-44be-b6da-b64630b073bf"
    },
    {
        "football_team_id": "401e159d-f0a3-4681-ba24-f72d4693e67c",
        "football_news_id": "038740ea-21fe-402c-927b-d17b46291d6f"
    },
    {
        "football_team_id": "9f347ba0-a3b5-49bd-93b4-2072410f5126",
        "football_news_id": "e90a4bb8-ce5f-4906-9c17-299e30e27193"
    },
    {
        "football_team_id": "35936ead-beb8-498a-a254-b163135079e7",
        "football_news_id": "8a11101e-7788-4863-973d-2d0579e9f4a4"
    }
];

db.footballteam_footballnews.insertMany(teamNewsLinks);

-----------------------------------------------------

db.football_game.createIndex({ tournament_id: 1, start_time: 1 })


db.createView(
    "football_game_summary_view",
    "football_game_summary_part",
    [
        {
            $lookup: {
                from: "football_game",
                localField: "game_id",
                foreignField: "id",
                as: "game_details"
            }
        },
        {
            $unwind: "$game_details"
        },
        {
            $project: {
                home_team_id: "$game_details.home_team_id",
                away_team_id: "$game_details.away_team_id",
                id: 1,
                game_minute: 1,
                type: 1
            }
        }
    ]
);
