
SELECT * FROM tipo_usuario;
INSERT INTO tipo_usuario (nome) VALUES ('Transportadora');


SELECT * FROM usuarios;
DELETE FROM usuarios WHERE id_usuario >= 1;
INSERT INTO usuarios 
	(nome, email, senha, login_at, websocket_id, id_tipo_usuario) 
VALUES('Diego Choli Conceição', 'diegocholi@gmail.com', '975907', NOW(), null, 1);


SELECT * FROM usuarios WHERE id_usuario = 12;

