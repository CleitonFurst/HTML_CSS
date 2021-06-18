from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=('GET', 'POST'))
def home():
    valor1 = None
    valor2 = None
    valor3 = None
    imagem1 = None
    imagem2 = None
    imagem3 = None
    imagem4 = None
    imagem5 = None
    imagem6 = None
    imagem7 = None
    imagemAT2 = None
    imagemAT1 = None
    imagemAT3 = None
    pokmon = 'gengar'

    imagem1 = 'https://img.wattpad.com/dcbf8f7bf5aa8fddea7b594d383963a151863046/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f494f5679616136515677486a48673d3d2d3934393330343637342e3136333236613662643165663139356239333036343831393437342e676966'
    imagem2 = 'https://qph.fs.quoracdn.net/main-qimg-041f57c01db9dbe460bfbd94efed4336'
    imagem3 = 'https://i.pinimg.com/originals/a8/a4/56/a8a4561433ee9fd5e4aef69e930bff79.gif'
    imagem4 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb1e1cc4-5814-4eb3-9536-6e06df6d6065/d9ik7wx-c5855354-707e-429d-9c1c-90cd57cc2c16.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiMWUxY2M0LTU4MTQtNGViMy05NTM2LTZlMDZkZjZkNjA2NVwvZDlpazd3eC1jNTg1NTM1NC03MDdlLTQyOWQtOWMxYy05MGNkNTdjYzJjMTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9f0B699bvU1LWxseuM6luPmY2s4I5rEJaifbRx6ERrk'
    imagem5 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81addb39-73dc-4884-a438-2a00426bd521/d493rv8-20dab60f-6ada-401f-99bd-f3068f4983fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxYWRkYjM5LTczZGMtNDg4NC1hNDM4LTJhMDA0MjZiZDUyMVwvZDQ5M3J2OC0yMGRhYjYwZi02YWRhLTQwMWYtOTliZC1mMzA2OGY0OTgzZmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEVme08XnSokCF7fup7qEru-jZbaDa9YzjB1DPe8nL8'
    imagem6 = 'https://qph.fs.quoracdn.net/main-qimg-e4c386c979ceb16e2b5a06f7217de945'
    imagem7 = 'https://i.pinimg.com/originals/f3/3d/05/f33d05ca42e5d1934b120279e1a1c12b.gif'
    imagemAT1 = 'https://archive-media-1.nyafuu.org/vp/image/1486/31/1486318311062.gif'
    imagemAT2 = 'https://i.gifer.com/GI3D.gif'
    imagemAT3 = 'https://2.bp.blogspot.com/-c_rp3918PN0/V9x2oGZ3XxI/AAAAAAAAi4Q/HeyxFEDcV4wYLINy-3kgEXi41SUeAm8VQCEw/s1600/Fire%2BBlast%2Bgif.gif'
    if request.method == 'POST':
        escolha = request.form['escolha']
        print(escolha)
        if escolha == 'gengar':
            valor1 = 10

        valor2 = 200
        valor3 = 200

    return render_template(
        'index.html',
        imagem1=imagem1,
        imagem2=imagem2,
        imagem3=imagem3,
        imagem4=imagem4,
        imagem5=imagem5,
        imagem6=imagem6,
        imagem7=imagem7,
        imagemAT1=imagemAT1,
        imagemAT2=imagemAT2,
        imagemAT3=imagemAT3,
        valor1=valor1,
        valor2=valor2,
        valor3=valor3


    )


if __name__ == '__main__':
    app.run(debug=True)
