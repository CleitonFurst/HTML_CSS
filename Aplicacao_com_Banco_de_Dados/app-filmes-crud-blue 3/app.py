from flask import Flask, Blueprint, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
bp = Blueprint('app', __name__)  # o nome da aplicação vai ser app

#Database  conexão
user = 'qjgkpxtd'
password = 'DmvmOS7fkB8gJbxPN0vxpWbwJJ2ZUTCm'
host = 'tuffi.db.elephantsql.com'
database = 'qjgkpxtd'

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{user}:{password}@{host}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'Qualquer string que seja secreta'#para deixar as informações do config mais seguras 
db = SQLAlchemy(app)
#Database  conexão


# Modelos 
class Filmes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255), nullable=False)
    imagem_url = db.Column(db.String(255), nullable=False)
    def __init__(self,nome,imagem_url):
        self.nome = nome
        self.imagem_url = imagem_url
        
    @staticmethod
    def read_all():
        #SELECT * FROMM filmes order by id desc;
        #return Filmes.query.order_by(Filmes.id.desc()).all()
        return Filmes.query.all()

    @staticmethod
    def read_single(filme_id):
        #select * from filmes where id =   <id_de_um_filme>
        return Filmes.query.get(filme_id)

@bp.route('/')
def index():
    return render_template('index.html')


@bp.route('/read')
def listar_filmes():
    registros = Filmes.read_all()
    return render_template('listar_filmes.html',registros = registros)

@bp.route('/read/<filme_id>')
def lista_detalhe_filme(filme_id):   
    filme = Filmes.read_single(filme_id) 
    return render_template('head_single.html', filme = filme)

# pega os dados do blueprint da nossa aplicação (nome do app e as rotas)e registra dentro do app
app.register_blueprint(bp)


if __name__ == '__main__':
    app.run(debug=True)
