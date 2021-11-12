import React from 'react';
import Profile from '../../assets/Profile.jpeg'


const About = () => {
  return (
    <section className="px-10 flex items-center min-h-screen">
      <div className="container flex flex-wrap">
          <div className="animate__animated animate__zoomIn max-w-2xl px-5 mx-auto">
            <h2 className="text-primary font-bold text-4xl py-5">SOBRE MIM</h2>
            <p className="text-white text-lg">Primeiramente, obrigado por ter chegado até aqui, é muito importante para mim.</p>
            <p className="text-white text-lg">Prazer, me chamo Pedro e tenho 18 anos. Atualmente, moro no Taboão da Serra, SP. </p>
            <p className="text-white text-lg">A minha história com o desenvolvimento começou muito cedo, tive meu primeiro contato com programação aos 10 anos, quando coloquei online um servidor de Rust, pra quem não conhece, Rust é um jogo de sobrevivência desenvolvido pela Facepunch Studios. As linguagens que tive contato nessa época foram .lua, c# e manipulação de dados com JSON. Embora eu não lembre muita coisa, acredito que ali foi onde me despertou o interesse em ser desenvolvedor e desde então eu tenho decidido o que queria para minha vida. Embora tenha voltado recentemente, hoje considero que tenho 1 ano de experiência, pois faz 1 ano que entrei no mercado como desenvolvedor, com projetos pessoais/freelancer.</p>
            <p className="text-white text-lg">Acredito que você ja deve ter percebido, pelo tema do meu portfolio, sou apaixonado por video games e jogos online, é algo que me faz bem e me diverte bastante nas horas vagas.</p>
            <p className="text-white text-lg">Ajudar as pessoas é algo que me faz bem também, além do meu gosto pela profissão, acredito que esse também seja um dos motivos por eu ter escolhido ela, a tecnologia vai mudar o mundo e eu quero fazer parte dessa mudança podendo ajudar muitas pessoas de diversas maneiras.</p>
            <p className="text-white text-lg">Acho que coloquei bastante coisa por aqui, mas se você quiser saber mais ou quiser bater um papo comigo, não exite em me chamar, você pode encontrar informações de contato <a className="text-primary" href='/contato'> aqui </a> ou em algum icone da navbar, abraço.</p>
          </div>
          <div className="flex items-center max-w-2xl mx-auto py-5 animate__animated animate__backInUp">
            <img className="max-w-lg" src={Profile}></img>
          </div>
      </div>
    </section>
  )
}

export default About;