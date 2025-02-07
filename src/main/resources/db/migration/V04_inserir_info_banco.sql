
INSERT INTO user (id, email, name, password, user_type) VALUES ('8', 'contato@techsolutions.com.br', 'Tech Solutions Ltda.', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
INSERT INTO user (id, email, name, password, user_type) VALUES ('9', 'atendimento@securetech.com.br', 'SecureTech Consultoria', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
INSERT INTO user (id, email, name, password, user_type) VALUES ('10', 'iot@innovations.com.br', 'IoT Innovations', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
INSERT INTO user (id, email, name, password, user_type) VALUES ('11', 'suporte@appdevsolutions.com.br', 'AppDev Solutions', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');
INSERT INTO user (id, email, name, password, user_type) VALUES ('12', 'contato@fintechai.com.br', 'FinTech AI Labs', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'E');

INSERT INTO user (id, name, email, password, user_type) VALUES ('13', 'João Silva', 'joao.silva@email.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO user (id, name, email, password, user_type) VALUES ('14', 'Maria Oliveira', 'maria.oliveira@email.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO user (id, name, email, password, user_type) VALUES ('15', 'Ana Costa', 'ana.costa@email.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO user (id, name, email, password, user_type) VALUES ('16', 'Pedro Souza', 'pedro.souza@email.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');
INSERT INTO user (id, name, email, password, user_type) VALUES ('17', 'Lucas Pereira', 'lucas.pereira@email.com', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'P');



INSERT INTO enterprise (cnpj, phone, description, adress, number, city, state) VALUES ('12.345.678/0001-90', '(11) 91234-5678', 'Desenvolvimento de softwares personalizados para empresas.', 'Rua das Inovações', '100', 'São Paulo', 'SP');
INSERT INTO enterprise (cnpj, phone, description, adress, number, city, state) VALUES ('98.765.432/0001-01', '(21) 99876-5432', 'Consultoria em cibersegurança e proteção de dados.', 'Av. Tecnologia', '200', 'Rio de Janeiro', 'RJ');
INSERT INTO enterprise (cnpj, phone, description, adress, number, city, state) VALUES ('34.567.890/0001-23', '(51) 98765-4321', 'Fabricação de dispositivos de IoT (Internet das Coisas).', 'Rua do Futuro', '250', 'Porto Alegre', 'RS');
INSERT INTO enterprise (cnpj, phone, description, adress, number, city, state) VALUES ('56.789.123/0001-56', '(31) 99654-3210', 'Desenvolvimento de aplicativos móveis e soluções em cloud.', 'Av. Digital', '333', 'Belo Horizonte', 'MG');
INSERT INTO enterprise (cnpj, phone, description, adress, number, city, state) VALUES ('76.543.210/0001-78', '(85) 98123-4567', 'Start-up de inteligência artificial aplicada ao mercado financeiro.', 'Rua das Startups', '400', 'Fortaleza', 'CE');

INSERT INTO candidate (cpf, status, phone, birth_date, gender, adress, number, city, state, cep, user_id) VALUES ('123.456.789-00', 'TRABALHANDO', '(11) 98765-4321', '15/03/1990', 'MASCULINO', 'Rua Exemplo', '123', 'São Paulo', 'SP', '01234-567', '13');
INSERT INTO candidate (cpf, status, phone, birth_date, gender, adress, number, city, state, cep, user_id) VALUES ('987.654.321-00', 'SEM EMPREGO', '(21) 99876-5432', '22/08/1985', 'FEMININO', 'Avenida Teste', '456', 'Rio de Janeiro', 'RJ', '23456-789', '14');
INSERT INTO candidate (cpf, status, phone, birth_date, gender, adress, number, city, state, cep, user_id) VALUES ('192.837.465-00', 'TRABALHANDO MAS ACEITO OFERTAS', '(31) 98765-1234', '10/11/1980', 'FEMININO', 'Rua das Flores', '789', 'Belo Horizonte', 'MG', '34567-890', '15');
INSERT INTO candidate (cpf, status, phone, birth_date, gender, adress, number, city, state, cep, user_id) VALUES ('564.738.291-00', 'SEM EMPREGO', '(41) 99876-4321', '05/07/1995', 'MASCULINO', 'Rua do Sol', '101', 'Curitiba', 'PR', '45678-901', '16');
INSERT INTO candidate (cpf, status, phone, birth_date, gender, adress, number, city, state, cep, user_id) VALUES ('738.291.564-00', 'TRABALHANDO MAS ACEITO OFERTAS', '(62) 98765-6789', '30/01/1992', 'MASCULINO', 'Praça Central', '202', 'Goiânia', 'GO', '56789-012', '17');

INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Desenvolvedor(a) Full Stack', 'Desenvolvimento', 'JavaScript, React', 'Desenvolvimento de aplicações web completas.', 'Júnior', 'Híbrido', 'R$ 4.500', 'ABERTA', '10/01/2025', '11');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Engenheiro(a) de Dados', 'Dados', 'Python, SQL', 'Análise e processamento de grandes volumes de dados.', 'Pleno', 'Remoto', 'R$ 7.000', 'ABERTA', '15/01/2025', '12');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Analista de Sistemas', 'Infraestrutura', 'Linux, Docker', 'Manutenção e administração de servidores e sistemas.', 'Pleno', 'Presencial', 'R$ 6.000', 'ABERTA', '18/01/2025', '11');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Desenvolvedor(a) Android', 'Desenvolvimento', 'Kotlin, Android Studio', 'Criação de aplicativos para a plataforma Android.', 'Pleno', 'Remoto', 'R$ 6.500', 'ABERTA', '05/01/2025', '10');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Arquiteto(a) de Software', 'Arquitetura', 'Java, Spring Boot', 'Arquitetura e design de sistemas escaláveis.', 'Sênior', 'Híbrido', 'R$ 12.000', 'ABERTA', '20/12/2024', '8');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Especialista em Cibersegurança', 'Segurança', 'Python, Firewalls', 'Monitoramento e proteção contra ataques cibernéticos.', 'Sênior', 'Remoto', 'R$ 9.500', 'ABERTA', '12/01/2025', '8');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Engenheiro(a) de Machine Learning', 'IA & Machine Learning', 'Python, TensorFlow', 'Desenvolvimento de modelos preditivos e analíticos.', 'Sênior', 'Híbrido', 'R$ 11.000', 'ABERTA', '02/01/2025', '10');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Designer de UX/UI', 'Design', 'Figma, Adobe XD', 'Criação de interfaces e experiências do usuário.', 'Pleno', 'Presencial', 'R$ 5.500', 'ABERTA', '22/12/2024', '9');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Desenvolvedor(a) Front End', 'Desenvolvimento', 'React, Vue.js', 'Desenvolvimento de interfaces de usuário interativas.', 'Júnior', 'Remoto', 'R$ 4.000', 'ABERTA', '16/01/2025', '8');
INSERT INTO job (title, job_area, tecnology, description, level, model, salary, status, publish_date, enterprise_id) VALUES ('Coordenador(a) de TI', 'Gestão de TI', 'ITIL, Microsoft', 'Coordenação das operações e equipe de TI.', 'Sênior', 'Híbrido', 'R$ 14.000', 'ABERTA', '07/01/2025', '12');


INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Universidade XYZ', 'Bacharelado em Ciência da Computação', 'Bacharelado', '01/01/2015', '31/12/2019', '6');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Instituto ABC', 'Técnico em Informática', 'Técnico', '01/02/2013', '31/12/2014', '3');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Universidade de Tecnologia do Sul', 'Mestrado em Inteligência Artificial', 'Mestrado', '01/03/2020', '31/03/2022', '6');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Centro de Treinamento PQR', 'Curso de Desenvolvimento Web', 'Certificação', '01/06/2021', '31/10/2021', '2');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Faculdade LMN', 'Pós-graduação em Segurança da Informação', 'Pós-graduação', '01/02/2023', '31/12/2024', '6');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Instituto DEF', 'Engenharia de Software', 'Bacharelado', '01/03/2010', '30/11/2014', '3');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Universidade ABC', 'MBA em Gestão de Tecnologia da Informação', 'MBA', '01/01/2018', '31/12/2019', '3');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Universidade UVW', 'Especialização em Computação em Nuvem', 'Especialização', '01/04/2022', '31/10/2023', '4');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Centro de Cursos STU', 'Programação em Python', 'Certificação', '01/07/2020', '31/08/2020', '2');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Faculdade QRS', 'Análise e Desenvolvimento de Sistemas', 'Bacharelado', '01/02/2012', '30/11/2015', '2');
INSERT INTO graduation (institution_name, major, degree, start, finish, candidate_id) VALUES ('Universidade PQR', 'Doutorado em Engenharia de Computação', 'Doutorado', '01/08/2022', '31/07/2026', '7');


INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('Tech Solutions Ltda.', '01/01/2021', '31/08/2023', 'Desenvolvimento e manutenção de sistemas corporativos, otimização de infraestrutura e gestão de projetos de TI. Participação em processos de automação e análise de dados.', 'Analista de Sistemas', '4');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('SoftNet Tecnologia', '01/03/2018', '31/12/2020', 'Implementação de soluções de redes e segurança da informação, além de suporte técnico a clientes internos e externos.', 'Engenheiro de Redes', '1');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('InfoTech Solutions', '01/05/2016', '28/02/2018', 'Suporte técnico, configuração de servidores e redes, monitoramento de sistemas e integração de novos serviços para clientes corporativos.', 'Técnico de Suporte', '7');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('DevTech Innovations', '01/09/2014', '30/04/2016', 'Desenvolvimento de software e aplicativos, com foco em criação de soluções customizadas para clientes no setor financeiro.', 'Desenvolvedor Full Stack', '7');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('ByteCorp Technologies', '01/06/2023', '31/12/2024', 'Responsável pela implementação de soluções em cloud computing e integração de sistemas em plataformas escaláveis. Administração de infraestrutura de TI para empresas de grande porte.', 'Arquiteto de Soluções', '5');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('CloudTech Solutions', '01/02/2012', '31/05/2014', 'Desenvolvimento de plataformas de e-commerce e integração de APIs para pagamentos online. Acompanhamento de performance e análise de dados de clientes.', 'Desenvolvedor Backend', '7');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('NetSys Technologies', '01/11/2010', '31/01/2012', 'Suporte técnico a clientes, manutenção de servidores e redes locais, e treinamento de equipes para uso de sistemas corporativos.', 'Suporte Técnico', '4');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('InovaTI Solutions', '01/09/2008', '30/06/2010', 'Desenvolvimento de aplicativos móveis e soluções de integração de sistemas com foco em inovação e experiência do usuário (UX/UI).', 'Desenvolvedor Mobile', '1');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('DataTech Consulting', '01/03/2006', '31/08/2008', 'Projetos de migração de dados, análise e otimização de processos de TI para grandes empresas.', 'Analista de Dados', '5');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('NextGen Systems', '01/04/2022', '31/12/2023', 'Desenvolvimento de soluções de automação e integração de sistemas ERP, gestão de banco de dados e melhorias de desempenho de sistemas.', 'Engenheiro de Software', '4');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('CyberTech Security', '01/07/2017', '31/10/2021', 'Consultoria em segurança da informação, implementação de firewalls, criptografia e prevenção contra ataques cibernéticos.', 'Consultor de Segurança', '3');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('GlobalTech Innovations', '01/01/2015', '31/12/2017', 'Criação de soluções de Big Data e análise preditiva, com foco em empresas do setor de saúde para otimização de processos internos e decisões baseadas em dados.', 'Cientista de Dados', '1');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('WebSys Solutions', '01/08/2013', '31/12/2014', 'Desenvolvimento de sites e plataformas web, com foco em performance e usabilidade. Implementação de sistemas de pagamento online.', 'Desenvolvedor Frontend', '1');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('CodeWave IT Solutions', '01/11/2010', '31/10/2012', 'Projetos de sistemas de gestão empresarial (ERP), análise de requisitos e desenvolvimento de módulos personalizados.', 'Analista de Sistemas', '2');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('MobileX Technologies', '01/06/2009', '31/10/2010', 'Desenvolvimento de aplicativos para dispositivos móveis, integração com APIs e otimização de funcionalidades de sistemas.', 'Desenvolvedor Mobile', '6');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('LogiTech Systems', '01/02/2007', '30/06/2009', 'Implementação de sistemas de rastreamento e logística, com ênfase em otimização de processos e integração com dispositivos de GPS.', 'Engenheiro de Software', '1');
INSERT INTO professional_history (enterprise_name, start, finish, description, position,  candidate_id) VALUES ('CloudTech Solutions', '01/07/2005', '31/12/2006', 'Consultoria e implementação de soluções de cloud computing para pequenas e médias empresas, com foco em migração de sistemas para a nuvem.', 'Consultor de TI', '4');


INSERT INTO job_candidate (job_candidate_id) VALUES ('1', '2');
INSERT INTO job_candidate (job_candidate_id) VALUES ('3', '4');
INSERT INTO job_candidate (job_candidate_id) VALUES ('13', '3');
INSERT INTO job_candidate (job_candidate_id) VALUES ('11', '2');
INSERT INTO job_candidate (job_candidate_id) VALUES ('13', '6');
INSERT INTO job_candidate (job_candidate_id) VALUES ('6', '3');
INSERT INTO job_candidate (job_candidate_id) VALUES ('12', '5');
INSERT INTO job_candidate (job_candidate_id) VALUES ('4', '1');
INSERT INTO job_candidate (job_candidate_id) VALUES ('11', '1');
INSERT INTO job_candidate (job_candidate_id) VALUES ('6', '3');
