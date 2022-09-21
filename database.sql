
create TABLE projects(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    subtitle VARCHAR(255),
    description TEXT,
    img VARCHAR(255),
    date timestamp
);

create TABLE news(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    img VARCHAR(255),
    date timestamp
);

create TABLE us(
    id SERIAL PRIMARY KEY,
    date timestamp,
    beneficiary VARCHAR(255),
    objective VARCHAR(255),
    amount VARCHAR(255)
);

create TABLE we(
    id SERIAL PRIMARY KEY,
    date timestamp,
    benefactor VARCHAR(255),
    objective VARCHAR(255),
    amount VARCHAR(255)
);