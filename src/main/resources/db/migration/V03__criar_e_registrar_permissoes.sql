CREATE TABLE permission (
	id BIGINT(20) PRIMARY KEY,
	description VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE user_permission (
	user_id BIGINT(20) NOT NULL,
	permission_id BIGINT(20) NOT NULL,
	PRIMARY KEY (user_id, permission_id),
	FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (permission_id) REFERENCES permission(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- senha admin
INSERT INTO user (id, name,email, password) values (1, 'Admin', 'admin@workguru.com', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.');

-- usuario
INSERT INTO permission (id, description) values (1, 'ROLE_REGISTER_USER');
INSERT INTO permission (id, description) values (2, 'ROLE_REMOVE_USER');
INSERT INTO permission (id, description) values (3, 'ROLE_SEARCH_USER');

-- vaga
INSERT INTO permission (id, description) values (4, 'ROLE_REGISTER_JOB');
INSERT INTO permission (id, description) values (5, 'ROLE_REMOVE_JOB');
INSERT INTO permission (id, description) values (6, 'ROLE_SEARCH_JOB');
INSERT INTO permission (id, description) values (7, 'ROLE_APPLY_JOB');

-- admin
INSERT INTO user_permission (user_id, permission_id) values (1, 1);
INSERT INTO user_permission (user_id, permission_id) values (1, 2);
INSERT INTO user_permission (user_id, permission_id) values (1, 3);
INSERT INTO user_permission (user_id, permission_id) values (1, 4);
INSERT INTO user_permission (user_id, permission_id) values (1, 5);
INSERT INTO user_permission (user_id, permission_id) values (1, 6);
INSERT INTO user_permission (user_id, permission_id) values (1, 7);

-- marlabs
INSERT INTO user_permission (user_id, permission_id) values (2, 1);
INSERT INTO user_permission (user_id, permission_id) values (2, 3);
INSERT INTO user_permission (user_id, permission_id) values (2, 4);
INSERT INTO user_permission (user_id, permission_id) values (2, 5);
INSERT INTO user_permission (user_id, permission_id) values (2, 6);

-- gislaine
INSERT INTO user_permission (user_id, permission_id) values (3, 1);
INSERT INTO user_permission (user_id, permission_id) values (3, 3);
INSERT INTO user_permission (user_id, permission_id) values (3, 4);
INSERT INTO user_permission (user_id, permission_id) values (3, 6);
INSERT INTO user_permission (user_id, permission_id) values (3, 7);
