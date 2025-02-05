CREATE TABLE `user` (
  `id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL UNIQUE,
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
    `user_id` bigint(20) PRIMARY KEY,  
	`cnpj` varchar(18) NOT NULL UNIQUE,
	`phone` varchar(20) NOT NULL,
	`description` TEXT NULL,
	`link_site` varchar(50) NULL,
	`street` varchar(45) NULL,
	`number` varchar(5) NULL,
	`complement` varchar (45) NULL,
	`city` varchar (45) NULL,
	`state` varchar (45) NULL,
	`cep` varchar (9) NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO enterprise (user_id, cnpj, phone)
	values (2, '99.999.999/9999-99', '10000-0000');
INSERT INTO enterprise (user_id, cnpj, phone)
	values (6, '89.999.999/9999-99', '10000-0001');
INSERT INTO enterprise (user_id, cnpj, phone)
	values (7, '79.999.999/9999-99', '10000-0002');

CREATE TABLE `candidate` (
    `user_id` bigint(20) PRIMARY KEY,  
    `cpf` varchar(14) NOT NULL UNIQUE,
    `status` varchar(45) NOT NULL,
    `phone` varchar(20),
    `birth_date` date NOT NULL,
    `gender` varchar(10) NOT NULL,
    `title` varchar(45) NULL,
    `description` TEXT NULL,
    `street` varchar(45) NULL,
    `number` varchar(5) NULL,
    `complement` varchar (45) NULL,
    `city` varchar (45) NULL,
    `state` varchar (45) NULL,
    `cep` varchar (9) NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO candidate (user_id, cpf, status, phone, birth_date, gender)
	values (3, '000.000.000-00', 'TRABALHANDO', '20000-0000', '1984/08/08' ,'FEMININO');
INSERT INTO candidate (user_id, cpf, status, phone, birth_date, gender)
	values (4, '100.000.000-00', 'TRABALHANDO', '30000-0000', '1993/08/08' ,'FEMININO');
INSERT INTO candidate (user_id, cpf, status, phone, birth_date, gender)
	values (5, '200.000.000-00', 'TRABALHANDO', '40000-0000', '1989/08/08' ,'FEMININO');