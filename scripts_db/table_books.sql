CREATE TABLE d (
    id   SMALLINT NOT NULL PRIMARY KEY,
    idx  SMALLINT NOT NULL,
    book VARCHAR(40) NOT NULL,
    alt  VARCHAR(20) NOT NULL,
    abbr VARCHAR(20) NOT NULL,
    UNIQUE (book, alt, abbr),
    UNIQUE (idx),
    UNIQUE (id)
);