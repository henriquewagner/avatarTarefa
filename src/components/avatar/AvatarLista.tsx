import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";

export function AvatarLista() {

    const [avatarList, setAvatarList] = useState<Avatar[]>();

    useEffect(() => {
        setAvatarList(AvatarService.list);
    }, []);

    function excluir(id: string | undefined) {
        console.log('id ', id)
        if (id) {
            AvatarService.excluir(id);
            setAvatarList(AvatarService.list);
        }        
    }

    return (
        <>
            <Link to={'/avatar/cadastro'}>Cadastrar Avatar</Link>

            <h1>Página Avatar Lista</h1>
            <ul>
                {avatarList?.map(avatar => (
                    <li key={avatar.id}>
                        {avatar.nome}

                        <Link to={'/avatar/cadastro/' + avatar.id}> editar </Link> <br />
                        <button onClick={() => excluir(avatar.id)}> excluir</button>
                    </li>
                ))}
            </ul>
        </>
    );
}