CREATE TABLE `user` (
  `id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `user_type` varchar(1) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user (id, name, email, password, user_type) 
	values (2, 'Marlabs', 'marlabs@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
INSERT INTO user (id, name, email, password, user_type) 
	values (3, 'Gislaine Rosales', 'gislainerosales@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO user (id, name, email, password, user_type) 
	values (4, 'Rose', 'rose@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO user (id, name, email, password, user_type) 
	values (5, 'Carlos', 'carlos@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO user (id, name, email, password, user_type) 
	values (6, 'Shx', 'shx@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
INSERT INTO user (id, name, email, password, user_type) 
	values (7, 'Ibm', 'ibm@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
	
	
CREATE TABLE `enterprise` (
    `id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
	`cnpj` varchar(18) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`description` text NULL,
	`link_site` varchar(50) NULL,
	`address` varchar(45) NULL,
	`number` varchar(5) NULL,
	`complement` varchar (45) NULL,
	`city` varchar (45) NULL,
	`state` varchar (45) NULL,
	`cep` varchar (9) NULL,
	`user_id` bigint(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO enterprise (cnpj, phone, user_id)
	values ('99.999.999/9999-99', '10000-0000', 2);
INSERT INTO enterprise (cnpj, phone, user_id)
	values ('89.999.999/9999-99', '10000-0001', 6);
INSERT INTO enterprise (cnpj, phone, user_id)
	values ('79.999.999/9999-99', '10000-0002', 7);

CREATE TABLE `candidate` (
    `id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
	`cpf` varchar(14) NOT NULL,
	`status` varchar(45) NOT NULL,
    `phone` varchar(20),
	`birth_date` date NOT NULL,
	`gender` varchar(10) NOT NULL,
	`address` varchar(45) NULL,
	`number` varchar(5) NULL,
	`complement` varchar (45) NULL,
	`city` varchar (45) NULL,
	`state` varchar (45) NULL,
	`cep` varchar (9) NULL,
	`user_id` bigint(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO candidate (cpf, status, phone, birth_date, gender, user_id)
	values ('000.000.000-00', 'TRABALHANDO', '20000-0000', '1984/08/08' ,'FEMININO', 3);
INSERT INTO candidate (cpf, status, phone, birth_date, gender, user_id)
	values ('100.000.000-00', 'TRABALHANDO', '30000-0000', '1993/08/08' ,'FEMININO', 4);
INSERT INTO candidate (cpf, status, phone, birth_date, gender, user_id)
	values ('200.000.000-00', 'TRABALHANDO', '40000-0000', '1989/08/08' ,'FEMININO', 5);
