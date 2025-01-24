CREATE TABLE job (
	`id` BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	`title` VARCHAR(45) NOT NULL,
	`job_area` VARCHAR(45) NOT NULL,
	`tecnology` VARCHAR(45) NOT NULL,
	`description` VARCHAR(2000) NOT NULL,
	`level` VARCHAR(45) NOT NULL,
	`model` VARCHAR(45) NOT NULL,
	`salary` VARCHAR(45) NOT NULL,
	`status` VARCHAR(45) NOT NULL,
	`publish_date` DATE NOT NULL,
	`enterprise_id` BIGINT(20) NOT NULL,
	FOREIGN KEY (enterprise_id) REFERENCES enterprise(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO job (id, title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id ) 
	values (1, 'Dev Backend', 'BACKEND' , 'JAVA', 'Atuar como dev', 'JUNIOR', 'PRESENCIAL', 'DE_0_A_2000', 'ABERTA', '2024/11/06', 2);
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
	FOREIGN KEY (candidate_id) REFERENCES candidate(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE professional_history (
	`id`BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	`enterprise_name` VARCHAR(45) NOT NULL,
	`start` DATE NOT NULL,
	`finish` DATE NULL,
	`position` VARCHAR(45) NOT NULL,
	`description` TEXT,
	`candidate_id` BIGINT(20) NOT NULL,
	FOREIGN KEY (candidate_id) REFERENCES candidate(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE job_candidate (
	job_id BIGINT(20),
	candidate_id BIGINT(20),
	PRIMARY KEY (job_id, candidate_id),
	FOREIGN KEY (job_id) REFERENCES job(id),
	FOREIGN KEY (candidate_id) REFERENCES candidate(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE user_history(
	`id`BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	`description` VARCHAR(255) NOT NULL,
	`user_id` BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8


