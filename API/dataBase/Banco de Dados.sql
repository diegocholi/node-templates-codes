DROP DATABASE transp_base_db;
CREATE DATABASE transp_base_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;

USE transp_base_db;

/* Tabela: (null) */
CREATE TABLE usuarios (
    id_usuario Integer not null AUTO_INCREMENT,
    nome Varchar(100),
    email Varchar(100) not null,
    senha Varchar(100),
    login_at Date,
    websocket_id Integer,
    id_tipo_usuario Integer not null,
    id_per_usuario Integer not null,
    id_funcionario_transportadora Integer,
   PRIMARY KEY (id_usuario)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE tipo_usuario (
    id_tipo_usuario Integer not null AUTO_INCREMENT,
    nome Varchar(15),
   PRIMARY KEY (id_tipo_usuario)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE historico_localizacao (
    latitude Char(15),
    longitude Char(15),
    id_usuario Integer not null
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE perguntas_diario_bordo (
    id_perguntas_diario_bordo Integer not null AUTO_INCREMENT,
    pergunta Char(10),
    delete_at Date,
    inputType Varchar(10),
    delete_by Integer,
    update_at Date,
    update_by Integer,
    id_usuario Integer not null,
   PRIMARY KEY (id_perguntas_diario_bordo)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE viagens (
    id_carga Integer not null AUTO_INCREMENT,
    latidude_origem Char(15),
    logintude_origem Char(15),
    latitude_destino Char(15),
    longitude_destino Char(15),
    status Char(10),
    update_at Date,
    update_by Integer,
    delete_at Date,
    delete_by Integer,
    id_usuario Integer not null,
    caminhoneiro_id Integer,
   PRIMARY KEY (id_carga)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE respostas_diario_bordo (
    id_respostas_diario_bordo Integer not null AUTO_INCREMENT,
    resposta Varchar(1000),
    delete_at Date,
    delete_by Integer,
    update_at Date,
    update_by Integer,
    id_perguntas_diario_bordo Integer not null,
    id_usuario Integer not null,
   PRIMARY KEY (id_respostas_diario_bordo)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE websocket_to (
    id_to Char(10) not null,
    id_usuario Integer not null,
   PRIMARY KEY (id_to)
) ENGINE = InnoDB;

/* Tabela: (null) */
CREATE TABLE per_usuario (
    id_per_usuario Integer not null AUTO_INCREMENT,
    nome Char(10),
   PRIMARY KEY (id_per_usuario)
) ENGINE = InnoDB;

/* Relacionamentos */
ALTER TABLE usuarios ADD CONSTRAINT FK_usuario_63 FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_usuario(id_tipo_usuario);
ALTER TABLE usuarios ADD CONSTRAINT FK_usuario_64 FOREIGN KEY (id_per_usuario) REFERENCES per_usuario(id_per_usuario);
ALTER TABLE websocket_to ADD CONSTRAINT FK_websocket_to_65 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE viagens ADD CONSTRAINT FK_carga_66 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE historico_localizacao ADD CONSTRAINT FK_historico_localizacao_67 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE perguntas_diario_bordo ADD CONSTRAINT FK_perguntas_diario_bordo_68 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE respostas_diario_bordo ADD CONSTRAINT FK_respostas_diario_bordo_69 FOREIGN KEY (id_perguntas_diario_bordo) REFERENCES perguntas_diario_bordo(id_perguntas_diario_bordo);
ALTER TABLE respostas_diario_bordo ADD CONSTRAINT FK_respostas_diario_bordo_70 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);

/* Hard Codes */

/* Tipo de usuário */
INSERT INTO tipo_usuario (nome) VALUES ('Transportadora');

/* Permissão de usuário */
INSERT INTO per_usuario (nome) VALUES ('Admin');
