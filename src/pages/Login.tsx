type LoginProps = {
    username: string;
    password: string;
}

export function Login(props: LoginProps) {
    return (
        <div className="LoginDiv">
            <div className="LoginHeader">
                <h2>Bem Vindo(a)!</h2>
                <h1>Entre na sua conta</h1>
            </div>
            <form className="container">
                <p>
                    <label>E-mail</label>
                    <input type="email" name="email" id="email" placeholder="John.snow@gmail.com"/>
                    {props.username}
                </p>
                <p>
                    <label>Senha</label>
                    <input type="email" name="" id="" placeholder="* * * * * * * *"/>
                    {props.username}
                </p>
                <p className="right">
                    <a>Esqueceu sua senha?</a>
                </p>
                <p>
                    <button>Entrar</button>
                </p>
            </form>
        </div>
    );
}