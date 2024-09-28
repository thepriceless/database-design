CREATE SCHEMA flashscore;

CREATE TABLE flashscore.user (
    id uuid PRIMARY KEY,
    email varchar(100) NOT NULL,
    time_zone_offset integer NOT NULL,
    password_hash varchar(255) NOT NULL
);

CREATE TABLE flashscore.tournament (
    id uuid PRIMARY KEY,
    title varchar(100) NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL
);

CREATE TABLE flashscore.football_news (
    id uuid PRIMARY KEY,
    title varchar(255) NOT NULL,
    content varchar(3000) NOT NULL,
    image_link varchar(150)
);

CREATE TABLE flashscore.football_player (
    id uuid PRIMARY KEY,
    first_name varchar(40),
    last_name varchar(60),
    country_id uuid NOT NULL,
    birth_date date NOT NULL,
    market_value integer,
    contract_expires date
);

CREATE TABLE flashscore.football_team (
    id uuid PRIMARY KEY,
    name varchar(60) NOT NULL,
    home_venue_id uuid,
    logo_link varchar(150)
);

CREATE TABLE flashscore.Football_Transfer (
    id uuid PRIMARY KEY,
    source_team_id uuid REFERENCES flashscore.football_team (id),
    target_team_id uuid REFERENCES flashscore.football_team (id),
    player_id uuid REFERENCES flashscore.football_player (id),
    type integer NOT NULL,
    fee integer,
    date date NOT NULL
);

CREATE TABLE flashscore.football_game (
    id uuid PRIMARY KEY,
    tournament_id uuid NOT NULL REFERENCES flashscore.tournament (id),
    home_team_id uuid NOT NULL REFERENCES flashscore.football_team (id),
    away_team_id uuid NOT NULL REFERENCES flashscore.football_team (id),
    venue_id uuid,
    start_time timestamp,
    tournament_phase varchar(60),
    referee_id uuid,
    state integer NOT NULL,
    attendance integer
);

CREATE TABLE flashscore.football_game_lineup (
    game_id uuid NOT NULL REFERENCES flashscore.football_game (id),
    team_id uuid NOT NULL REFERENCES flashscore.football_team (id),
    formation varchar(15),
	
    PRIMARY KEY (game_id, team_id)
);

CREATE TABLE flashscore.football_game_in_match_player (
    game_id uuid NOT NULL,
    player_id uuid NOT NULL REFERENCES flashscore.football_player (id),
    team_id uuid NOT NULL,
    position_on_field integer NOT NULL,
    rating numeric(2,1),
    comment varchar(40),
    goals integer NOT NULL,
    assists integer NOT NULL,
    minutes_played integer,
	
    CONSTRAINT game_id_player_id_primary_key PRIMARY KEY (game_id, player_id),
    CONSTRAINT game_id_team_id FOREIGN KEY (game_id, team_id) REFERENCES flashscore.football_game_lineup (game_id, team_id)
);

CREATE TABLE flashscore.football_game_team_statistics (
    game_id uuid NOT NULL REFERENCES flashscore.football_game (id),
    team_id uuid NOT NULL,
    ball_possession integer NOT NULL,
    goals integer NOT NULL,
    goal_attempts integer NOT NULL,
    corners integer NOT NULL,
    yellow_cards integer NOT NULL,
    offsides integer NOT NULL,
	
    PRIMARY KEY (game_id, team_id)
);

CREATE TABLE flashscore.football_game_summary_part (
    id uuid PRIMARY KEY,
    game_id uuid NOT NULL REFERENCES flashscore.football_game (id),
    game_minute integer NOT NULL,
    type integer NOT NULL,
    initiator_player_id uuid NOT NULL REFERENCES flashscore.football_player (id),
    support_player_id uuid REFERENCES flashscore.football_player (id),
    foul_reason varchar(60)
);

CREATE TABLE flashscore.user_footballgame_subscription (
    user_id uuid NOT NULL REFERENCES flashscore.user (id),
    football_game_id uuid NOT NULL REFERENCES flashscore.football_game (id),
	
    PRIMARY KEY (user_id, football_game_id)
);

CREATE TABLE flashscore.tournament_user_subscription (
    user_id uuid NOT NULL REFERENCES flashscore.user (id),
    tournament_id uuid NOT NULL REFERENCES flashscore.tournament (id),
	
    PRIMARY KEY (user_id, tournament_id)
);

CREATE TABLE flashscore.footballgame_footballnews (
    football_game_id uuid NOT NULL REFERENCES flashscore.football_game (id),
    football_news_id uuid NOT NULL REFERENCES flashscore.football_news (id),
	
    PRIMARY KEY (football_game_id, football_news_id)
);

CREATE TABLE flashscore.tournament_footballnews (
    tournament_id uuid NOT NULL REFERENCES flashscore.tournament (id),
    football_news_id uuid NOT NULL REFERENCES flashscore.football_news (id),
	
    PRIMARY KEY (tournament_id, football_news_id)
);

CREATE TABLE flashscore.footballteam_footballnews (
    football_team_id uuid NOT NULL REFERENCES flashscore.football_team (id),
    football_news_id uuid NOT NULL REFERENCES flashscore.football_news (id),
	
    PRIMARY KEY (football_team_id, football_news_id)
);

CREATE TABLE flashscore.footballnews_footballplayer (
    football_player_id uuid NOT NULL REFERENCES flashscore.football_player (id),
    football_news_id uuid NOT NULL REFERENCES flashscore.football_news (id),
	
    PRIMARY KEY (football_player_id, football_news_id)
);

COPY flashscore.User (id, email, time_zone_offset, password_hash)
FROM 'E:\csv\user.csv'
DELIMITER ','
CSV HEADER;

COPY flashscore.tournament (id, title, start_date, end_date)
FROM 'E:\csv\tournament.csv'
DELIMITER ','
CSV HEADER;

COPY flashscore.football_news (id, title, content, image_link)
FROM 'E:\csv\football_news.csv'
DELIMITER ','
CSV HEADER;

COPY flashscore.football_player (id, first_name, last_name, country_id, birth_date, market_value, contract_expires)
FROM 'E:\csv\football_player.csv'
DELIMITER ','
CSV HEADER;

COPY flashscore.football_team (id, name, home_venue_id, logo_link)
FROM 'E:\csv\football_team.csv'
DELIMITER ','
CSV HEADER;

INSERT INTO flashscore.football_transfer (id, source_team_id, target_team_id, player_id, type, fee, "date") VALUES
('ddfb78a3-ed1f-4205-80c5-9f90604e6cbc', 'f15a90b8-60ef-44d3-a2b5-13a36f31b715', '8b4468fe-ef7f-451d-aacd-b0b619ca04f8', '1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 1, 5000000, '2023-01-01'),
('c558150e-d195-4176-ba94-d39b3e2d5ad0', 'f1abaf7e-1bbb-4a09-90e3-989d97a3d934', 'b4d71df3-6f2f-4339-be45-a247384d6129', '2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 2, NULL, '2023-02-02'),
('9cac8a6f-d385-44a3-9ca7-f58da118424a', 'c8087196-94fc-4f6b-8432-7cd5edf1efb8', '9404783a-1c8c-4db9-9422-ec296a2ce14d', '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 1, 7000000, '2023-03-03'),
('e40435b2-37b8-4d45-91f7-4bb06a13c04b', '08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', 'b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', '4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 2, 2000000, '2023-04-04'),
('e289a236-1f46-490a-aa66-bf772eb652f5', '39d10960-dabe-4884-985d-6490de46324b', 'cc793045-c139-4c65-a2a8-72daf585b0d0', '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 1, 4500000, '2023-05-05'),
('cc7d9dde-8b69-4a84-9e6e-7160b2860eff', '22598e16-db68-4f50-9de6-6fab813410cc', 'f26eda2b-f221-458d-a1ed-2dd36352f44d', '6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 2, NULL, '2023-06-06'),
('e0605f17-9853-4b0b-99ad-8f95414ac1c8', '401e159d-f0a3-4681-ba24-f72d4693e67c', '9f347ba0-a3b5-49bd-93b4-2072410f5126', '7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 1, 6000000, '2023-07-07'),
('1b0dd186-bde5-4097-8c61-ee53bf0652c9', '35936ead-beb8-498a-a254-b163135079e7', 'f15a90b8-60ef-44d3-a2b5-13a36f31b715', '8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 2, 2500000, '2023-08-08'),
('8962815b-9be8-4345-bbc9-a1f0ee418332', '8b4468fe-ef7f-451d-aacd-b0b619ca04f8', 'f1abaf7e-1bbb-4a09-90e3-989d97a3d934', '9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 1, 5500000, '2023-09-09'),
('d537472f-f550-48bb-8d7f-4175c0c2a92e', 'b4d71df3-6f2f-4339-be45-a247384d6129', 'c8087196-94fc-4f6b-8432-7cd5edf1efb8', '1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 2, 4000000, '2023-10-10'),
('346eacaa-682f-4a73-8e08-9ce04a032be0', '9404783a-1c8c-4db9-9422-ec296a2ce14d', '08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', '2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 1, 6500000, '2023-11-11'),
('eaa8aae2-3c35-4bfb-a3a2-c48dfde2c8bb', 'b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', '39d10960-dabe-4884-985d-6490de46324b', '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 2, 3000000, '2023-12-12'),
('1deffc71-de2e-4171-a904-fb5b5c2276cc', 'cc793045-c139-4c65-a2a8-72daf585b0d0', '22598e16-db68-4f50-9de6-6fab813410cc', '4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 1, NULL, '2024-01-13'),
('4b48267f-1b13-4030-81ec-a00581ada452', 'f26eda2b-f221-458d-a1ed-2dd36352f44d', '401e159d-f0a3-4681-ba24-f72d4693e67c', '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 2, 3500000, '2024-02-14'),
('bdda3f31-4f2d-41db-aff2-235fcf80805f', '9f347ba0-a3b5-49bd-93b4-2072410f5126', '35936ead-beb8-498a-a254-b163135079e7', '6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 1, 6000000, '2024-03-15');

INSERT INTO flashscore.football_game (id, tournament_id, home_team_id, away_team_id, venue_id, start_time, tournament_phase, referee_id, "state", attendance) VALUES
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', '8c5cfc87-9e9b-492e-8b86-476b31a7a2c6', 'f15a90b8-60ef-44d3-a2b5-13a36f31b715', '8b4468fe-ef7f-451d-aacd-b0b619ca04f8', '123e4567-e89b-12d3-a456-426614174000', '2023-01-01 15:00:00', 'Group Stage', '123e4567-e89b-12d3-a456-426614174015', 1, 50000),
('bdd52087-ddb1-4152-9e58-e630df420511', 'b936cd5c-5d7a-4c4a-93be-376405dafb70', 'f1abaf7e-1bbb-4a09-90e3-989d97a3d934', 'b4d71df3-6f2f-4339-be45-a247384d6129', '123e4567-e89b-12d3-a456-426614174001', '2023-02-10 18:00:00', 'Quarter Final', NULL, 1, NULL),
('fedc58bd-9528-429a-9e1b-fae33e67c986', '010ebc4d-b47f-4a7f-81a3-99578c1c3f04', 'c8087196-94fc-4f6b-8432-7cd5edf1efb8', '9404783a-1c8c-4db9-9422-ec296a2ce14d', '123e4567-e89b-12d3-a456-426614174002', '2023-03-05 20:00:00', 'Semi Final', '123e4567-e89b-12d3-a456-426614174017', 1, 55000),
('94641756-d952-40b5-b56f-2eff719a3bbc', 'ec2a1892-5daa-40f6-aeb0-347590a31638', '08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', 'b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', '123e4567-e89b-12d3-a456-426614174003', '2023-04-15 17:00:00', 'Final', '123e4567-e89b-12d3-a456-426614174018', 2, 70000),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', 'b07a15f6-e64c-4830-99c1-e503b36230b8', '39d10960-dabe-4884-985d-6490de46324b', 'cc793045-c139-4c65-a2a8-72daf585b0d0', '123e4567-e89b-12d3-a456-426614174004', '2023-05-20 16:00:00', 'Group Stage', '123e4567-e89b-12d3-a456-426614174019', 2, 45000),
('01c7e9da-c124-4561-b80b-ea0dad982cf8', 'ebe6801c-9ffd-4090-8534-746d09149ee0', '22598e16-db68-4f50-9de6-6fab813410cc', 'f26eda2b-f221-458d-a1ed-2dd36352f44d', '123e4567-e89b-12d3-a456-426614174005', '2023-06-10 19:00:00', 'Quarter Final', '123e4567-e89b-12d3-a456-426614174020', 0, 50000),
('b67ac32c-1766-431a-ab71-684137789b34', '90f1d538-d13c-4cb6-a7c4-0d6adce4e9a0', '401e159d-f0a3-4681-ba24-f72d4693e67c', '9f347ba0-a3b5-49bd-93b4-2072410f5126', '123e4567-e89b-12d3-a456-426614174006', '2023-07-01 21:00:00', 'Semi Final', '123e4567-e89b-12d3-a456-426614174021', 1, 60000),
('bd1384b8-6888-4979-ab4f-b6d0350d17f8', 'd01abee9-3533-4ba9-8a18-4623106a2305', '35936ead-beb8-498a-a254-b163135079e7', 'f15a90b8-60ef-44d3-a2b5-13a36f31b715', '123e4567-e89b-12d3-a456-426614174007', '2023-08-05 15:00:00', 'Final', NULL, 2, 70000),
('80138913-36fb-477f-98a8-70f087db0b84', '8dce4bd0-b994-4d54-8ebd-7a1b2a0f603c', '8b4468fe-ef7f-451d-aacd-b0b619ca04f8', 'f1abaf7e-1bbb-4a09-90e3-989d97a3d934', '123e4567-e89b-12d3-a456-426614174008', '2023-09-10 18:00:00', 'Group Stage', '123e4567-e89b-12d3-a456-426614174023', 1, 50000),
('497ad638-b577-42cb-8b3e-e78f3518fee8', '4ad07aa4-cdb6-4f62-9a92-6b1e597a24be', 'b4d71df3-6f2f-4339-be45-a247384d6129', 'c8087196-94fc-4f6b-8432-7cd5edf1efb8', '123e4567-e89b-12d3-a456-426614174009', '2023-10-15 20:00:00', 'Quarter Final', '123e4567-e89b-12d3-a456-426614174024', 1, NULL),
('b707621f-315f-4b13-a7ab-f03466b573dc', 'ac9a4b79-a98f-4c60-b430-adabe0f2033d', '9404783a-1c8c-4db9-9422-ec296a2ce14d', '08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', '123e4567-e89b-12d3-a456-426614174010', '2023-11-05 17:00:00', 'Semi Final', '123e4567-e89b-12d3-a456-426614174025', 1, 55000),
('4c108766-1782-41b1-a645-59e565728c06', '18587ca2-763d-4e53-97e8-0f0fc776adcd', 'b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', '39d10960-dabe-4884-985d-6490de46324b', '123e4567-e89b-12d3-a456-426614174011', '2023-12-10 19:00:00', 'Final', '123e4567-e89b-12d3-a456-426614174026', 1, 70000),
('f22fed0e-8a9c-463d-8772-d044d76e849f', 'd8a53514-645d-4c61-b5da-bb83fdb3be4c', 'cc793045-c139-4c65-a2a8-72daf585b0d0', '22598e16-db68-4f50-9de6-6fab813410cc', '123e4567-e89b-12d3-a456-426614174012', '2024-01-15 15:00:00', 'Group Stage', '123e4567-e89b-12d3-a456-426614174027', 1, 50000),
('aa2fed0e-8a9c-463d-8772-d044d76e8492', 'dd943718-9162-4ddc-b389-1de0390b26d6', 'f26eda2b-f221-458d-a1ed-2dd36352f44d', '401e159d-f0a3-4681-ba24-f72d4693e67c', '123e4567-e89b-12d3-a456-426614174013', '2024-02-10 18:00:00', 'Quarter Final', '123e4567-e89b-12d3-a456-426614174028', 1, 60000),
('8907621f-315f-4b13-a7ab-f03466b573da', '7abbcd3c-795e-4745-ac2d-f7d1a6fbc23b', '9f347ba0-a3b5-49bd-93b4-2072410f5126', '35936ead-beb8-498a-a254-b163135079e7', '123e4567-e89b-12d3-a456-426614174014', '2024-03-05 20:00:00', 'Semi Final', '123e4567-e89b-12d3-a456-426614174029', 2, NULL);

INSERT INTO flashscore.football_game_lineup (game_id, team_id, formation) VALUES
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', 'f15a90b8-60ef-44d3-a2b5-13a36f31b715', '4-3-3'),
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', '8b4468fe-ef7f-451d-aacd-b0b619ca04f8', '4-4-2'),
('bdd52087-ddb1-4152-9e58-e630df420511', 'f1abaf7e-1bbb-4a09-90e3-989d97a3d934', '3-5-2'),
('bdd52087-ddb1-4152-9e58-e630df420511', 'b4d71df3-6f2f-4339-be45-a247384d6129', '4-3-3'),
('fedc58bd-9528-429a-9e1b-fae33e67c986', 'c8087196-94fc-4f6b-8432-7cd5edf1efb8', '4-2-3-1'),
('fedc58bd-9528-429a-9e1b-fae33e67c986', '9404783a-1c8c-4db9-9422-ec296a2ce14d', '4-4-2'),
('94641756-d952-40b5-b56f-2eff719a3bbc', '08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', '4-3-3'),
('94641756-d952-40b5-b56f-2eff719a3bbc', 'b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', '4-2-3-1'),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', '39d10960-dabe-4884-985d-6490de46324b', '4-4-2'),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', 'cc793045-c139-4c65-a2a8-72daf585b0d0', '3-5-2'),
('01c7e9da-c124-4561-b80b-ea0dad982cf8', '22598e16-db68-4f50-9de6-6fab813410cc', '4-3-3'),
('01c7e9da-c124-4561-b80b-ea0dad982cf8', 'f26eda2b-f221-458d-a1ed-2dd36352f44d', '4-4-2'),
('b67ac32c-1766-431a-ab71-684137789b34', '401e159d-f0a3-4681-ba24-f72d4693e67c', '4-2-3-1'),
('b67ac32c-1766-431a-ab71-684137789b34', '9f347ba0-a3b5-49bd-93b4-2072410f5126', '4-3-3'),
('bd1384b8-6888-4979-ab4f-b6d0350d17f8', '35936ead-beb8-498a-a254-b163135079e7', '4-4-2');

INSERT INTO flashscore.football_game_in_match_player (game_id, player_id, team_id, position_on_field, rating, comment, goals, assists, minutes_played) VALUES
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', '1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'f15a90b8-60ef-44d3-a2b5-13a36f31b715', 1, 7.5, 'Good performance', 1, 0, 90),
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', '2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '8b4468fe-ef7f-451d-aacd-b0b619ca04f8', 2, NULL, 'Solid defense', 0, 1, 85),
('bdd52087-ddb1-4152-9e58-e630df420511', '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'f1abaf7e-1bbb-4a09-90e3-989d97a3d934', 3, 8.0, NULL, 2, 1, 90),
('bdd52087-ddb1-4152-9e58-e630df420511', '4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'b4d71df3-6f2f-4339-be45-a247384d6129', 4, 7.2, 'Good midfield', 0, 2, 88),
('fedc58bd-9528-429a-9e1b-fae33e67c986', '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'c8087196-94fc-4f6b-8432-7cd5edf1efb8', 5, 6.5, 'Average game', 0, 0, 75),
('fedc58bd-9528-429a-9e1b-fae33e67c986', '6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '9404783a-1c8c-4db9-9422-ec296a2ce14d', 6, 7.0, 'Good effort', 1, 0, 80),
('94641756-d952-40b5-b56f-2eff719a3bbc', '7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', 7, 7.8, 'Great goal', 1, 1, 90),
('94641756-d952-40b5-b56f-2eff719a3bbc', '8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', 8, 6.9, 'Decent play', 0, 1, 85),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', '9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '39d10960-dabe-4884-985d-6490de46324b', 9, 7.3, NULL, 1, 0, 90),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', '1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 'cc793045-c139-4c65-a2a8-72daf585b0d0', 10, 7.1, 'Good teamwork', 0, 2, 88),
('01c7e9da-c124-4561-b80b-ea0dad982cf8', '2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '22598e16-db68-4f50-9de6-6fab813410cc', 11, 6.7, 'Average performance', 0, 0, 75),
('01c7e9da-c124-4561-b80b-ea0dad982cf8', '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 'f26eda2b-f221-458d-a1ed-2dd36352f44d', 1, 7.4, 'Good defense', 0, 1, 80),
('b67ac32c-1766-431a-ab71-684137789b34', '4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '401e159d-f0a3-4681-ba24-f72d4693e67c', 2, 7.9, NULL, 2, 0, 90),
('b67ac32c-1766-431a-ab71-684137789b34', '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '9f347ba0-a3b5-49bd-93b4-2072410f5126', 3, 7.6, 'Good effort', 1, 1, 85),
('bd1384b8-6888-4979-ab4f-b6d0350d17f8', '6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '35936ead-beb8-498a-a254-b163135079e7', 4, 7.2, 'Solid game', 0, 2, NULL);

INSERT INTO flashscore.football_game_team_statistics (game_id, team_id, ball_possession, goals, goal_attempts, corners, yellow_cards, offsides) VALUES
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', 'f15a90b8-60ef-44d3-a2b5-13a36f31b715', 55, 2, 10, 5, 1, 3),
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', '8b4468fe-ef7f-451d-aacd-b0b619ca04f8', 45, 1, 8, 4, 2, 2),
('bdd52087-ddb1-4152-9e58-e630df420511', 'f1abaf7e-1bbb-4a09-90e3-989d97a3d934', 60, 3, 12, 6, 0, 1),
('bdd52087-ddb1-4152-9e58-e630df420511', 'b4d71df3-6f2f-4339-be45-a247384d6129', 40, 1, 7, 3, 1, 4),
('fedc58bd-9528-429a-9e1b-fae33e67c986', 'c8087196-94fc-4f6b-8432-7cd5edf1efb8', 52, 2, 9, 5, 2, 3),
('fedc58bd-9528-429a-9e1b-fae33e67c986', '9404783a-1c8c-4db9-9422-ec296a2ce14d', 48, 1, 8, 4, 1, 2),
('94641756-d952-40b5-b56f-2eff719a3bbc', '08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', 57, 3, 11, 6, 0, 1),
('94641756-d952-40b5-b56f-2eff719a3bbc', 'b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', 43, 1, 7, 3, 2, 4),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', '39d10960-dabe-4884-985d-6490de46324b', 50, 2, 10, 5, 1, 3),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', 'cc793045-c139-4c65-a2a8-72daf585b0d0', 50, 2, 9, 4, 2, 2),
('01c7e9da-c124-4561-b80b-ea0dad982cf8', '22598e16-db68-4f50-9de6-6fab813410cc', 53, 2, 10, 5, 1, 3),
('01c7e9da-c124-4561-b80b-ea0dad982cf8', 'f26eda2b-f221-458d-a1ed-2dd36352f44d', 47, 1, 8, 4, 2, 2),
('b67ac32c-1766-431a-ab71-684137789b34', '401e159d-f0a3-4681-ba24-f72d4693e67c', 55, 3, 11, 6, 0, 1),
('b67ac32c-1766-431a-ab71-684137789b34', '9f347ba0-a3b5-49bd-93b4-2072410f5126', 45, 1, 7, 3, 2, 4),
('bd1384b8-6888-4979-ab4f-b6d0350d17f8', '35936ead-beb8-498a-a254-b163135079e7', 50, 2, 10, 5, 1, 3);

INSERT INTO flashscore.football_game_summary_part (id, game_id, game_minute, type, initiator_player_id, support_player_id, foul_reason) VALUES
('02663165-6236-4fd3-93be-f3f0f96a645a', 'ba0c5f2c-3ba8-4be8-9359-6f70710c942e', 10, 1, '1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', NULL, 'Handball'),
('a456f292-b04d-4381-ae85-0f61a3262da5', 'ba0c5f2c-3ba8-4be8-9359-6f70710c942e', 20, 2, '2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', NULL),
('8d4e176f-6507-4de9-ac12-5ecb9595b7e3', 'bdd52087-ddb1-4152-9e58-e630df420511', 30, 3, '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', NULL, 'Foul'),
('6894b255-6280-49f5-a3a2-50bd9a514935', 'bdd52087-ddb1-4152-9e58-e630df420511', 40, 4, '4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', NULL),
('be955f2a-7dd4-4177-a8f9-4c5d5a55c4a0', 'fedc58bd-9528-429a-9e1b-fae33e67c986', 50, 1, '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'Offside'),
('6cfe828a-968a-41d8-bc86-6216bb86be89', 'fedc58bd-9528-429a-9e1b-fae33e67c986', 60, 2, '6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', NULL, NULL),
('669e339c-f51d-49fe-a12b-1faa37b7381c', '94641756-d952-40b5-b56f-2eff719a3bbc', 70, 3, '7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'Handball'),
('639c214b-09d3-4ce3-a58d-aa9835b4a993', '94641756-d952-40b5-b56f-2eff719a3bbc', 80, 4, '8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', NULL, NULL),
('e86aab76-73e3-4681-8b18-b4eeb098ee38', 'b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', 90, 1, '9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 'Foul'),
('7aff6083-2b36-4516-9342-dc37edfbfc31', 'b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', 14, 2, '1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', NULL, NULL),
('899da8ea-5662-4f8d-9f17-1473855ac9d4', '01c7e9da-c124-4561-b80b-ea0dad982cf8', 43, 3, '2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 'Offside'),
('6c74bb47-aebd-47ce-bd24-3ae856842fab', '01c7e9da-c124-4561-b80b-ea0dad982cf8', 42, 4, '3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', NULL, NULL),
('4fcc3a6d-4ddc-4b22-8b73-187c3dd28f62', 'b67ac32c-1766-431a-ab71-684137789b34', 2, 1, '4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 'Handball'),
('a91a14f8-659d-4870-92a4-3488e62e600f', 'b67ac32c-1766-431a-ab71-684137789b34', 5, 2, '5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', NULL, NULL),
('fe273978-927c-47be-8f79-516a5305c880', 'bd1384b8-6888-4979-ab4f-b6d0350d17f8', 10, 3, '6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', NULL, 'Foul');

INSERT INTO flashscore.user_footballgame_subscription (user_id, football_game_id) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'ba0c5f2c-3ba8-4be8-9359-6f70710c942e'),
('550e8400-e29b-41d4-a716-446655440000', 'bdd52087-ddb1-4152-9e58-e630df420511'),
('550e8400-e29b-41d4-a716-446655440002', 'fedc58bd-9528-429a-9e1b-fae33e67c986'),
('550e8400-e29b-41d4-a716-446655440003', '94641756-d952-40b5-b56f-2eff719a3bbc'),
('550e8400-e29b-41d4-a716-446655440004', 'b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96'),
('550e8400-e29b-41d4-a716-446655440004', '01c7e9da-c124-4561-b80b-ea0dad982cf8'),
('550e8400-e29b-41d4-a716-446655440004', 'b67ac32c-1766-431a-ab71-684137789b34'),
('550e8400-e29b-41d4-a716-446655440007', 'b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96'),
('550e8400-e29b-41d4-a716-446655440008', '80138913-36fb-477f-98a8-70f087db0b84'),
('550e8400-e29b-41d4-a716-446655440009', '497ad638-b577-42cb-8b3e-e78f3518fee8'),
('550e8400-e29b-41d4-a716-446655440010', 'b707621f-315f-4b13-a7ab-f03466b573dc'),
('550e8400-e29b-41d4-a716-446655440011', '4c108766-1782-41b1-a645-59e565728c06'),
('550e8400-e29b-41d4-a716-446655440012', 'f22fed0e-8a9c-463d-8772-d044d76e849f'),
('550e8400-e29b-41d4-a716-446655440013', 'aa2fed0e-8a9c-463d-8772-d044d76e8492'),
('550e8400-e29b-41d4-a716-446655440014', '8907621f-315f-4b13-a7ab-f03466b573da');

INSERT INTO flashscore.tournament_user_subscription (user_id, tournament_id) VALUES
('550e8400-e29b-41d4-a716-446655440000', '8c5cfc87-9e9b-492e-8b86-476b31a7a2c6'),
('550e8400-e29b-41d4-a716-446655440001', 'b936cd5c-5d7a-4c4a-93be-376405dafb70'),
('550e8400-e29b-41d4-a716-446655440005', '010ebc4d-b47f-4a7f-81a3-99578c1c3f04'),
('550e8400-e29b-41d4-a716-446655440003', 'ec2a1892-5daa-40f6-aeb0-347590a31638'),
('550e8400-e29b-41d4-a716-446655440004', 'b07a15f6-e64c-4830-99c1-e503b36230b8'),
('550e8400-e29b-41d4-a716-446655440005', 'ebe6801c-9ffd-4090-8534-746d09149ee0'),
('550e8400-e29b-41d4-a716-446655440006', '90f1d538-d13c-4cb6-a7c4-0d6adce4e9a0'),
('550e8400-e29b-41d4-a716-446655440007', 'd01abee9-3533-4ba9-8a18-4623106a2305'),
('550e8400-e29b-41d4-a716-446655440008', '8dce4bd0-b994-4d54-8ebd-7a1b2a0f603c'),
('550e8400-e29b-41d4-a716-446655440009', '4ad07aa4-cdb6-4f62-9a92-6b1e597a24be'),
('550e8400-e29b-41d4-a716-446655440010', 'd8a53514-645d-4c61-b5da-bb83fdb3be4c'),
('550e8400-e29b-41d4-a716-446655440011', 'd8a53514-645d-4c61-b5da-bb83fdb3be4c'),
('550e8400-e29b-41d4-a716-446655440012', 'd8a53514-645d-4c61-b5da-bb83fdb3be4c'),
('550e8400-e29b-41d4-a716-446655440013', 'dd943718-9162-4ddc-b389-1de0390b26d6'),
('550e8400-e29b-41d4-a716-446655440014', '7abbcd3c-795e-4745-ac2d-f7d1a6fbc23b');

INSERT INTO flashscore.footballgame_footballnews (football_game_id, football_news_id) VALUES
('ba0c5f2c-3ba8-4be8-9359-6f70710c942e', '9a78039b-787e-418d-93a6-39ea4239b190'),
('bdd52087-ddb1-4152-9e58-e630df420511', '3d446b38-8b3c-485a-8f9c-62eb554def7c'),
('fedc58bd-9528-429a-9e1b-fae33e67c986', '5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac'),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', 'f0a554f0-4984-42aa-aefc-541a7d04df20'),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', 'e007e8aa-f999-4566-b373-3fd718935ab8'),
('b58e83f3-5f25-4eb0-ae12-c3a5f0d8bf96', '673116e8-d20b-4c6a-ad26-35353fa922ff'),
('b67ac32c-1766-431a-ab71-684137789b34', '05a2c7f5-4ed4-4759-9ace-a07e450253b1'),
('bd1384b8-6888-4979-ab4f-b6d0350d17f8', 'e7f7ca8c-5ef1-404a-b34b-7ce92950d45c'),
('80138913-36fb-477f-98a8-70f087db0b84', '6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b'),
('497ad638-b577-42cb-8b3e-e78f3518fee8', '85e71b30-64d0-4e55-b3eb-a4af1d6da5d6'),
('b707621f-315f-4b13-a7ab-f03466b573dc', '8e93c166-a811-468a-a3b2-f67a8de546c1'),
('4c108766-1782-41b1-a645-59e565728c06', '19f0ddb6-47e0-44be-b6da-b64630b073bf'),
('f22fed0e-8a9c-463d-8772-d044d76e849f', '038740ea-21fe-402c-927b-d17b46291d6f'),
('aa2fed0e-8a9c-463d-8772-d044d76e8492', 'e90a4bb8-ce5f-4906-9c17-299e30e27193'),
('8907621f-315f-4b13-a7ab-f03466b573da', '8a11101e-7788-4863-973d-2d0579e9f4a4');

INSERT INTO flashscore.tournament_footballnews (tournament_id, football_news_id) VALUES
('8c5cfc87-9e9b-492e-8b86-476b31a7a2c6', '9a78039b-787e-418d-93a6-39ea4239b190'),
('b936cd5c-5d7a-4c4a-93be-376405dafb70', '3d446b38-8b3c-485a-8f9c-62eb554def7c'),
('010ebc4d-b47f-4a7f-81a3-99578c1c3f04', '5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac'),
('ec2a1892-5daa-40f6-aeb0-347590a31638', 'f0a554f0-4984-42aa-aefc-541a7d04df20'),
('b07a15f6-e64c-4830-99c1-e503b36230b8', 'e007e8aa-f999-4566-b373-3fd718935ab8'),
('ebe6801c-9ffd-4090-8534-746d09149ee0', '673116e8-d20b-4c6a-ad26-35353fa922ff'),
('90f1d538-d13c-4cb6-a7c4-0d6adce4e9a0', '05a2c7f5-4ed4-4759-9ace-a07e450253b1'),
('d01abee9-3533-4ba9-8a18-4623106a2305', 'e7f7ca8c-5ef1-404a-b34b-7ce92950d45c'),
('8dce4bd0-b994-4d54-8ebd-7a1b2a0f603c', '6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b'),
('4ad07aa4-cdb6-4f62-9a92-6b1e597a24be', '85e71b30-64d0-4e55-b3eb-a4af1d6da5d6'),
('ac9a4b79-a98f-4c60-b430-adabe0f2033d', '8e93c166-a811-468a-a3b2-f67a8de546c1'),
('18587ca2-763d-4e53-97e8-0f0fc776adcd', '19f0ddb6-47e0-44be-b6da-b64630b073bf'),
('d8a53514-645d-4c61-b5da-bb83fdb3be4c', '038740ea-21fe-402c-927b-d17b46291d6f'),
('dd943718-9162-4ddc-b389-1de0390b26d6', 'e90a4bb8-ce5f-4906-9c17-299e30e27193'),
('7abbcd3c-795e-4745-ac2d-f7d1a6fbc23b', '8a11101e-7788-4863-973d-2d0579e9f4a4');

INSERT INTO flashscore.footballteam_footballnews (football_team_id, football_news_id) VALUES
('f15a90b8-60ef-44d3-a2b5-13a36f31b715', '9a78039b-787e-418d-93a6-39ea4239b190'),
('8b4468fe-ef7f-451d-aacd-b0b619ca04f8', '3d446b38-8b3c-485a-8f9c-62eb554def7c'),
('f1abaf7e-1bbb-4a09-90e3-989d97a3d934', '5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac'),
('b4d71df3-6f2f-4339-be45-a247384d6129', 'f0a554f0-4984-42aa-aefc-541a7d04df20'),
('c8087196-94fc-4f6b-8432-7cd5edf1efb8', 'e007e8aa-f999-4566-b373-3fd718935ab8'),
('9404783a-1c8c-4db9-9422-ec296a2ce14d', '673116e8-d20b-4c6a-ad26-35353fa922ff'),
('08ac04ba-da3f-42aa-a9e1-a4587d02c5e4', '05a2c7f5-4ed4-4759-9ace-a07e450253b1'),
('b2eeb2b4-b7f5-49f2-9f5f-caf98fb06ae1', 'e7f7ca8c-5ef1-404a-b34b-7ce92950d45c'),
('39d10960-dabe-4884-985d-6490de46324b', '6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b'),
('cc793045-c139-4c65-a2a8-72daf585b0d0', '85e71b30-64d0-4e55-b3eb-a4af1d6da5d6'),
('22598e16-db68-4f50-9de6-6fab813410cc', '8e93c166-a811-468a-a3b2-f67a8de546c1'),
('f26eda2b-f221-458d-a1ed-2dd36352f44d', '19f0ddb6-47e0-44be-b6da-b64630b073bf'),
('401e159d-f0a3-4681-ba24-f72d4693e67c', '038740ea-21fe-402c-927b-d17b46291d6f'),
('9f347ba0-a3b5-49bd-93b4-2072410f5126', 'e90a4bb8-ce5f-4906-9c17-299e30e27193'),
('35936ead-beb8-498a-a254-b163135079e7', '8a11101e-7788-4863-973d-2d0579e9f4a4');

INSERT INTO flashscore.footballnews_footballplayer (football_player_id, football_news_id) VALUES
('1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '9a78039b-787e-418d-93a6-39ea4239b190'),
('2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '3d446b38-8b3c-485a-8f9c-62eb554def7c'),
('3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '5fe8669b-dcdc-4725-a9e8-c1cb4c9ac0ac'),
('4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'f0a554f0-4984-42aa-aefc-541a7d04df20'),
('5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'e007e8aa-f999-4566-b373-3fd718935ab8'),
('6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '673116e8-d20b-4c6a-ad26-35353fa922ff'),
('7e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '05a2c7f5-4ed4-4759-9ace-a07e450253b1'),
('8e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', 'e7f7ca8c-5ef1-404a-b34b-7ce92950d45c'),
('9e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3b', '6f9da7d7-e6a6-4240-bf8b-cf647bd9ac7b'),
('1e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '85e71b30-64d0-4e55-b3eb-a4af1d6da5d6'),
('2e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '8e93c166-a811-468a-a3b2-f67a8de546c1'),
('3e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '19f0ddb6-47e0-44be-b6da-b64630b073bf'),
('4e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '038740ea-21fe-402c-927b-d17b46291d6f'),
('5e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', 'e90a4bb8-ce5f-4906-9c17-299e30e27193'),
('6e4d1a2e-4b5f-4a3b-9b6d-1a2e4b5f4a3c', '8a11101e-7788-4863-973d-2d0579e9f4a4');