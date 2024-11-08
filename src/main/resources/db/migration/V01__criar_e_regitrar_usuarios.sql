CREATE TABLE `usuario` (
  `id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `tipo_usuario` varchar(1) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario (id, email, senha, tipo_usuario) 
	values (1, 'marlabs@gmail.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO usuario (id, email, senha, tipo_usuario) 
	values (2, 'gislainerosales@ifsp.edu.br', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
	
CREATE TABLE `empresa` (
	`id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
	`nome_empresa` varchar(45) NOT NULL,
	`cnpj` varchar(18) NOT NULL,
	`telefone` varchar(20),
	`descricao` text NULL,
	`link_site` varchar(50) NULL,
	`endereco` varchar(45) NULL,
	`usuario_id`bigint(20) NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES usuario(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO empresa (id, nome_empresa, cnpj, telefone, usuario_id)
	values (1, 'Marlabs', '99.999.999/9999-99', '10000-0000', 1);

CREATE TABLE `pessoa` (
	`id` bigint(20) PRIMARY KEY AUTO_INCREMENT,
	`nome_pessoa` varchar(45) NOT NULL,
	`cpf` varchar(14) NOT NULL,
	`status` varchar(45) NOT NULL,
	`data_nascimento` date NOT NULL,
	`genero` varchar(10) NOT NULL,
	`endereco` varchar(45) NULL,
	`usuario_id` bigint(20) NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES usuario(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pessoa (id, nome_pessoa, cpf, status, data_nascimento, genero, usuario_id)
	values (1, 'Gislaine Rosales', '000.000.000-00', 'TRABALHANDO', '1984/08/08' ,'FEMININO', 2);