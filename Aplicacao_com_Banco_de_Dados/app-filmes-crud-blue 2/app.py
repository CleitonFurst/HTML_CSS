from flask import Flask, Blueprint, render_template

app = Flask(__name__)
bp = Blueprint('app', __name__)  # o nome da aplicação vai ser app

registros = [{
    "id": 1,
    "nome": "Futurama",
    "imagem_url": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/78/30/52/19784883.jpg"

},
    {
    "id": 2,
    "nome": "Sherlock Holmes",
    "imagem_url": "https://upload.wikimedia.org/wikipedia/pt/4/4e/Sherlock_Holmes_%28poster_de_2009%29.jpg"
},
    {
    "id": 3,
    "nome": "A liga Extraordinária",
    "imagem_url": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ab/The_League_of_Extraordinary_Gentlemen.jpg/240px-The_League_of_Extraordinary_Gentlemen.jpg"

},
{
    "id": 4,
    "nome": "O Medalhão",
    "imagem_url": "https://media.fstatic.com/htfnfWBVp6l3vQbzhQNw2XfaAzg=/268x386/smart/media/movies/covers/2018/02/37174_f1.jpg"

},
{
    "id": 5,
    "nome": "New Police Story",
    "imagem_url": "https://br.web.img3.acsta.net/medias/nmedia/18/63/60/28/18695184.jpg"

}
]


@bp.route('/')
def index():
    return render_template('index.html')


@bp.route('/read')
def listar_filmes():
    return render_template('listar_filmes.html',
                            registros = registros)

@bp.route('/read/<filme_id>')
def lista_detalhe_filme(filme_id):
    return 'Página em construlção para o filme com ID -> ' + filme_id

# pega os dados do blueprint da nossa aplicação (nome do app e as rotas)e registra dentro do app
app.register_blueprint(bp)


if __name__ == '__main__':
    app.run(debug=True)
