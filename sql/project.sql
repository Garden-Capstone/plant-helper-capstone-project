DROP table if exists progress;
DROP table if exists locker;
DROP table if exists plant;
DROP table if exists profile;


create TABLE if not exists profile (
    profile_id uuid primary key not null,
    profile_username varchar (32) unique ,
    profile_image varchar (255),
    profile_hash char (97),
    profile_activation_token char(32),
    profile_goal varchar (255),
    profile_email varchar (255) unique not null
);

create Table if not exists plant (
    plant_id uuid primary key not null,
    plant_name varchar (97),
    plant_species char (97),
    plant_description varchar (255),
    plant_image_url varchar (255),
    plant_watering varchar (32),
    plant_sunlight varchar (32),
    plant_growth_rate varchar (32),
    plant_toxicity smallint,
    plant_propagation varchar (64),
    plant_maintenance varchar (64)
);

create TABLE if not exists locker (
    locker_id uuid primary key not null,
    locker_profile_id uuid not null,
    locker_plant_id uuid not null,
    locker_image_url varchar (255),
    locker_name varchar(32),
    foreign key (locker_profile_id) references profile(profile_id),
    foreign key (locker_plant_id) references plant(plant_id)
);

create TABLE if not exists progress (
    progress_id uuid primary key not null ,
    progress_locker_id uuid not null ,
    progress_image_url varchar (255),
    progress_note char (32),
    progress_date_time timestamptz,
    foreign key (progress_locker_id) references locker(locker_id)
);
