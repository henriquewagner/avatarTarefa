import { useState } from "react";
import { Avatar, AvatarService } from "../AvatarService";

export function AvatarCadastro() {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');

    function salvar(event: any) {
        event.preventDefault();

        let avatar: Avatar = {
            nome: nome,
            imagem: imagem
        };

        AvatarService.salvar(avatar);
    }

    return (
        <>

            <h1>Página Avatar Cadastro</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> Nome </label>
                    <input type="email" class="form-control" onChange={(event) => setNome(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> Avatar </label>
                    <input type="email" class="form-control" onChange={(event) => setImagem(event.target.value)} />
                </div>


                <button onClick={salvar}>Salvar</button>
            </form>
        </>
    );
}