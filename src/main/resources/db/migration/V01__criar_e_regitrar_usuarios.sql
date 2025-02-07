CREATE TABLE `user` (
  `id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL UNIQUE,
  `password` varchar(150) NOT NULL,
  `user_type` varchar(1) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user (id, name, email, password, user_type) 
	values (2, 'Marlabs', 'marlabs@gmail.com', '$2a$10$sC9.rkoADQh3vzWvJoqMluJb2.w9H73a8xp25vMSRFS6pPreT4NZW', 'E');
INSERT INTO user (id, name, email, password, user_type) 
	values (3, 'Gislaine Rosales', 'gislainerosales@gmail.com', '$2a$10$sC9.rkoADQh3vzWvJoqMluJb2.w9H73a8xp25vMSRFS6pPreT4NZW', 'P');

	
	
CREATE TABLE `enterprise` (
    `user_id` bigint(20) PRIMARY KEY,  
	`cnpj` varchar(18) NOT NULL UNIQUE,
	`phone` varchar(20) NOT NULL,
	`description` TEXT NULL,
	`link_site` varchar(100) NULL,
	`street` varchar(45) NULL,
	`number` varchar(5) NULL,
	`complement` varchar (45) NULL,
	`city` varchar (45) NULL,
	`state` varchar (45) NULL,
	`cep` varchar (9) NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO enterprise (user_id, cnpj, phone, description, link_site, city, state)
	values (2, '85.424.117/0001-55', '10000-0000', 'Somos apaixonados por ajudar as empresas a crescer e ter sucesso. Nossas estruturas comprovadas, baseadas em pessoas, plataformas, objetivos e processos, ajudaram as empresas da Fortune 500 a desbloquear oportunidades de crescimento.

Ao aproveitar nosso ecossistema global de inovação, nossos consultores são os mais adequados para ajudar sua empresa a dar um salto em suas jornadas de inovação. Ajudamos a definir os mercados da empresa, identificar tendências do setor e criar estratégias para melhorar o desempenho e a receita.', 'https://www.marlabs.com/pt-br/', 'São Carlos', 'São Paulo');


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

INSERT INTO candidate (user_id, cpf, status, phone, birth_date, gender, city, state)
	values (3, '000.000.000-00', 'TRABALHANDO', '20000-0000', '1984/08/08' ,'FEMININO', 'Araraquara', 'São Paulo');
