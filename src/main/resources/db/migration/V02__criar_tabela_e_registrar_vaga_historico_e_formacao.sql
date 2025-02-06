CREATE TABLE job (
	`id` BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	`title` VARCHAR(45) NOT NULL,
	`job_area` VARCHAR(45) NOT NULL,
	`tecnology` VARCHAR(45) NOT NULL,
	`description` TEXT NOT NULL,
	`level` VARCHAR(45) NOT NULL,
	`model` VARCHAR(45) NOT NULL,
	`salary` VARCHAR(45) NOT NULL,
	`status` VARCHAR(45) NOT NULL,
	`publish_date` DATE NOT NULL,
	`enterprise_id` BIGINT(20) NOT NULL,
	FOREIGN KEY (enterprise_id) REFERENCES enterprise(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO job (id, title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id ) 
	values (1, 'Dev Backend', 'BACKEND' , 'JAVA', 'A Aiko é uma empresa de tecnologia que se destaca por sua abordagem prática na criação de soluções voltadas para a eficiência, segurança e sustentabilidade em grandes operações.

Especializados no desenvolvimento de sistemas de monitoramento para gestão de frotas, gerenciamento de abastecimento e funcionalidades de segurança, como câmera de fadiga, buscamos constantemente impulsionar a transformação digital de maneira sólida e eficaz.

Contamos com um time incrível, formado por profissionais de diversas áreas, todos unidos pela missão comum de liderar a evolução tecnológica.

Na Aiko, acreditamos em uma abordagem colaborativa e inovadora, ansiosos por acolher novos talentos que compartilhem da nossa visão e queiram fazer parte dessa jornada rumo ao futuro.

Pronto para se juntar a nós?

O Que Você Irá Fazer Aqui Na Aiko

 Analisar especificações funcionais para o desenvolvimento do software;
Analisar problemas/bugs e propor/desenvolver solução para eles;
Desenvolver/programar/codificar soluções de software;
 Realizar testes unitários para garantir a qualidade e a integridade do código desenvolvido; 
 Colaborar com outros membros da equipe de desenvolvimento e qualidade para resolver problemas e implementar novas soluções;
 Responder tecnicamente por dúvidas internas ou de clientes. 

Os Requisitos São

Bacharelado em Ciência da Computação, Engenharia Software ou áreas correlatas;
Experiência prévia com desenvolvimento de software em C# e .Net, mínimo de 3 anos; 
Conhecimento em Banco de dados PostgreSQL;
Excelentes habilidades de trabalho em equipe, organização, visão analítica e gestão do tempo; 
Capacidade de resolver problemas de forma eficaz e eficiente. 

Benefícios

Vale-refeição/alimentação pagos no Caju;
Plano de Saúde: Seguros Unimed;
Plano Odontológico Seguros Unimed;
Day off no seu aniversário; 
Gympass;
Parceria Psicologia Viva;
Conexa Saúde;
Seguro de vida;
Auxilio home office;
Temos várias confraternizações ao longo dos meses :)
Plano de desenvolvimento individual para alavancar sua carreira!!
Curso de Espanhol semanalmente :)
Uma equipe colaborativa e disponível para qualquer troca que você precisar.
Plataformas de cursos online dos mais variados temas, disponíveis para usar e abusar!!', 'JUNIOR', 'PRESENCIAL', 'DE_0_A_2000', 'ABERTA', '2024/11/06', 2);
INSERT INTO job (id, title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id ) 
	values (2, 'Estagiário Full-stack', 'FULLSTACK' , 'JAVASCRIPT', 'Atuar como dev', 'ESTAGIO', 'HOME_OFFICE', 'DE_2000_A_5000', 'ABERTA', '2024/11/06', 2);
INSERT INTO job (id, title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id ) 
	values (3, 'Dev Frontend', 'FRONTEND' , 'HTML5', 'Atuar como dev', 'PLENO', 'PRESENCIAL', 'DE_5000_A_10000', 'ABERTA', '2024/11/06', 2);
INSERT INTO job (id, title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id ) 
	values (4, 'SENIOR PYTHON', 'BACKEND' , 'PYTHON', 'Atuar como dev', 'SENIOR', 'HIBRIDO', 'MAIOR_QUE_20000', 'ABERTA', '2024/11/06', 2);
	
CREATE TABLE graduation (
	`id`BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	`institution_name` VARCHAR(45) NOT NULL,
	`major` VARCHAR(45) NULL,
	`degree` VARCHAR (20) NOT NULL,
	`start` DATE NOT NULL,
	`finish` DATE NULL,
	`candidate_id` BIGINT(20) NOT NULL,
	FOREIGN KEY (candidate_id) REFERENCES candidate(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE professional_history (
	`id`BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	`enterprise_name` VARCHAR(45) NOT NULL,
	`start` DATE NOT NULL,
	`finish` DATE NULL,
	`position` VARCHAR(45) NOT NULL,
	`description` TEXT,
	`candidate_id` BIGINT(20) NOT NULL,
	FOREIGN KEY (candidate_id) REFERENCES candidate(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE job_candidate (
	job_id BIGINT(20),
	candidate_id BIGINT(20),
	PRIMARY KEY (job_id, candidate_id),
	FOREIGN KEY (job_id) REFERENCES job(id),
	FOREIGN KEY (candidate_id) REFERENCES candidate(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE user_history(
	`id`BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	`description` VARCHAR(255) NOT NULL,
	`user_id` BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8