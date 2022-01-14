CREATE VIEW historico_reproducao_usuarios AS
    SELECT 
        t3.user AS `usuario`, t1.song AS `nome`
    FROM
        SpotifyClone.songs AS `t1`
            INNER JOIN
        SpotifyClone.history AS `t2` ON t1.song_id = t2.song_id
            INNER JOIN
        SpotifyClone.users AS `t3` ON t2.user_id = t3.user_id
    ORDER BY `usuario` ASC , `nome` ASC;
