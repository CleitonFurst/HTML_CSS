from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    pokemons_1 = [{
        'valor':'1',
        'nome': 'Lugia',
                'imagem': 'https://img.wattpad.com/dcbf8f7bf5aa8fddea7b594d383963a151863046/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f494f5679616136515677486a48673d3d2d3934393330343637342e3136333236613662643165663139356239333036343831393437342e676966'
    },
        {
             'valor':'2',
        'nome': 'Dragonite',
                'imagem': 'https://qph.fs.quoracdn.net/main-qimg-041f57c01db9dbe460bfbd94efed4336'
    },
        {
            'valor':'3',
        'nome': 'Mega Charizard X',
                'imagem': 'https://i.pinimg.com/originals/a8/a4/56/a8a4561433ee9fd5e4aef69e930bff79.gif'
    }
    ]
    pokemons_2 = [
        {
            'valor':'4',
            'nome': 'Gastly',
                    'imagem': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81addb39-73dc-4884-a438-2a00426bd521/d493rv8-20dab60f-6ada-401f-99bd-f3068f4983fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxYWRkYjM5LTczZGMtNDg4NC1hNDM4LTJhMDA0MjZiZDUyMVwvZDQ5M3J2OC0yMGRhYjYwZi02YWRhLTQwMWYtOTliZC1mMzA2OGY0OTgzZmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEVme08XnSokCF7fup7qEru-jZbaDa9YzjB1DPe8nL8'
        },
        {
            'valor':'5',
            'nome': 'Gengar',
                    'imagem': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb1e1cc4-5814-4eb3-9536-6e06df6d6065/d9ik7wx-c5855354-707e-429d-9c1c-90cd57cc2c16.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiMWUxY2M0LTU4MTQtNGViMy05NTM2LTZlMDZkZjZkNjA2NVwvZDlpazd3eC1jNTg1NTM1NC03MDdlLTQyOWQtOWMxYy05MGNkNTdjYzJjMTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9f0B699bvU1LWxseuM6luPmY2s4I5rEJaifbRx6ERrk'
        },
        {
            'valor':'6',
            'nome': 'Haunter',
                    'imagem': 'https://qph.fs.quoracdn.net/main-qimg-e4c386c979ceb16e2b5a06f7217de945'
        }
    ]
    ataques = [{
        'ataque': 'Lugia',
        'imagem': 'https://archive-media-1.nyafuu.org/vp/image/1486/31/1486318311062.gif'
    },
        {
            'ataque': 'Dragonite',
            'imagem': 'https://i.gifer.com/GI3D.gif'
    },
        {
            'ataque': 'Mega Charizard X',
            'imagem': 'https://2.bp.blogspot.com/-c_rp3918PN0/V9x2oGZ3XxI/AAAAAAAAi4Q/HeyxFEDcV4wYLINy-3kgEXi41SUeAm8VQCEw/s1600/Fire%2BBlast%2Bgif.gif'
    },

    ]
    valor = 1

    return render_template(
        'index.html',
        pokemons_1=pokemons_1,
        pokemons_2=pokemons_2,
        valor=valor,
        ataques=ataques


    )


if __name__ == '__main__':
    app.run(debug=True)
