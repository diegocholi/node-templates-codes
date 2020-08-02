DROP DATABASE transp_base_db;
CREATE DATABASE transp_base_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;

USE transp_base_db;

/* Tabela: (null) */
CREATE TABLE usuarios (
    id_usuario Integer not null auto_increment,
    nome Varchar(100),
    email Varchar(100) not null,
    senha Varchar(100),
    login_at DateTime DEFAULT NOW(),
    websocket_id Integer DEFAULT null,
	websocket_id_to Integer DEFAULT null,
    id_tipo_usuario Integer not null,
	UNIQUE KEY unique_email (email),
   PRIMARY KEY (id_usuario)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE tipo_usuario (
    id_tipo_usuario Integer not null auto_increment,
    nome Varchar(15),
   PRIMARY KEY (id_tipo_usuario)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE historico_localizacao (
    id_historico_localizacao Integer not null auto_increment,
    latitude Char(15),
    longitude Char(15),
    id_usuario Integer not null,
   PRIMARY KEY (id_historico_localizacao)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE perguntas_diario_bordo (
    id_perguntas_diario_bordo Integer not null auto_increment,
    pergunta Char(10),
    delete_at Date,
    inputType Varchar(10),
    delete_by Integer,
    update_at Date,
    update_by Integer,
    id_caraga Integer not null,
    id_usuario Integer not null,
   PRIMARY KEY (id_perguntas_diario_bordo)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE carga (
    id_carga Integer not null auto_increment,
    latidude_origem Char(15),
    logintude_origem Char(15),
    latitude_destino Char(15),
    longitude_destino Char(15),
    status Char(10),
    id_caminhoneiro Integer,
    update_at Date,
    update_by Integer,
    delete_at Date,
    delete_by Integer,
    id_caraga Integer not null,
    id_usuario Integer not null,
   PRIMARY KEY (id_carga)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE respostas_diario_bordo (
    id_respostas_diario_bordo Integer not null auto_increment, 
    resposta Varchar(1000),
    id_perguntas_diario_bordo Integer not null,
    delete_at Date,
    delete_by Integer,
    update_at Date,
    update_by Integer,
    id_usuario Integer not null,
   PRIMARY KEY (id_respostas_diario_bordo)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE tipo_carga (
    id_caraga Integer not null auto_increment,
   PRIMARY KEY (id_caraga)
) ENGINE = InnoDB;

/* Relacionamentos */
ALTER TABLE usuarios ADD CONSTRAINT FK_usuario_11 FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_usuario(id_tipo_usuario);
ALTER TABLE historico_localizacao ADD CONSTRAINT FK_historico_localizacao_14 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE carga ADD CONSTRAINT FK_carga_17 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE respostas_diario_bordo ADD CONSTRAINT FK_respostas_diario_bordo_18 FOREIGN KEY (id_perguntas_diario_bordo) REFERENCES perguntas_diario_bordo(id_perguntas_diario_bordo);
ALTER TABLE respostas_diario_bordo ADD CONSTRAINT FK_respostas_diario_bordo_19 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE perguntas_diario_bordo ADD CONSTRAINT FK_perguntas_diario_bordo_20 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE carga ADD CONSTRAINT FK_carga_22 FOREIGN KEY (id_caraga) REFERENCES tipo_carga(id_caraga);
ALTER TABLE perguntas_diario_bordo ADD CONSTRAINT FK_perguntas_diario_bordo_23 FOREIGN KEY (id_caraga) REFERENCES tipo_carga(id_caraga);

