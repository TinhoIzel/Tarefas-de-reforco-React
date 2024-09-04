// Crie um componente chamado ToggleText.
// Use useState para gerenciar se o texto está visível ou não.
// Adicione um botão que alterne o estado de visibilidade do texto.
// Exiba o texto somente quando estiver visível.

import { useState } from "react";

function AlternarTexto() {
  const [visivel, setVisivel] = useState(false);
  
  const alternar = (event) => {
    // const texto = document.getElementById("texto")
    // texto.hidden = event.target.value == 0 ? true : false 

    visivel = setVisivel(!visivel)

  }

  return (
    <div>
      <button onClick={alternar} value="1">Mostrar texto</button>
      <button onClick={alternar} value="0">Esconder texto</button>

      { visivel ? <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quae
        quaerat facilis ducimus ad ut explicabo in, eaque deleniti iusto
        doloremque molestias ullam voluptatum laborum voluptatibus! Sit
        temporibus voluptatibus et quia, voluptas expedita culpa enim quis
        eligendi inventore dolor necessitatibus blanditiis! Nam culpa esse
        deserunt quis corrupti earum officia voluptatibus sequi, id nesciunt
        ipsum. Porro, dolore. Aliquam ullam cum totam nemo ex accusantium,
        fugiat, eveniet sit a libero quam asperiores, rerum quidem quasi
        veritatis aspernatur! Sint, porro architecto quaerat molestiae, libero
        facere, consequatur dignissimos rerum at aspernatur nemo quas! Aliquam,
        totam provident! Id eum voluptas dignissimos fuga voluptates explicabo
        perspiciatis dolores blanditiis. Repellendus, tempora. Officia, velit
        voluptatum numquam asperiores maxime quasi sint harum necessitatibus sit
        illum quisquam, fugit reprehenderit? Dolor beatae vel porro amet tenetur
        fugiat laborum ab aperiam, sit illum repudiandae minima quae commodi
        quam nulla maiores dolorum quis, excepturi obcaecati recusandae
        inventore rerum hic. Atque quos vel dolor et accusamus accusantium!
        Consectetur blanditiis odit facere, nobis et ipsa, rem itaque ex quis
        placeat quod obcaecati minus, amet perferendis doloribus neque modi. Hic
        omnis odit dolorum, expedita ipsam possimus mollitia maiores recusandae
        temporibus ratione totam ut vero libero. Nulla, consequuntur quasi odit
        alias dolorem a ullam numquam quae quaerat vel iure veritatis omnis ab
        non, quia voluptate temporibus nesciunt. Totam autem voluptatum
        doloremque quibusdam? Autem, at dolor natus facere odit provident
        suscipit aspernatur. Sunt, aut cum sit alias corporis deleniti delectus
        nulla itaque quam excepturi rem sapiente dignissimos consequuntur iste
        ut mollitia cupiditate minima ex suscipit. Sed voluptatem veniam
        reprehenderit molestiae incidunt ad neque hic. Dolore libero debitis
        quisquam ut, nihil nobis magni maxime at enim fuga assumenda officiis
        cumque velit fugit possimus illo ratione ab? Vero sunt blanditiis
        deleniti commodi consectetur quae, aut fugiat! Molestiae aspernatur
        inventore, error nam, expedita incidunt nesciunt eligendi maxime alias
        eos iusto veniam aliquam similique illo nobis ut? Porro ab aperiam culpa
        neque cum. Officiis consequatur soluta eligendi, totam nostrum explicabo
        voluptatem enim possimus, autem unde dolores voluptatibus dicta
        distinctio nisi ipsam quasi reiciendis et exercitationem quia pariatur
        saepe ad ratione eos! Neque dicta commodi assumenda veniam, eum quasi
        ipsam repellendus laudantium mollitia excepturi odit sequi deserunt
        omnis. Distinctio, voluptas illum? Ipsum ipsa sed neque voluptas,
        ducimus nemo qui nesciunt iusto possimus voluptatem placeat quis tenetur
        cum aliquid nam quidem inventore optio labore distinctio perferendis?
        Dolores ad, pariatur alias error ab voluptate magni quam odit dolorum
        ipsa officia fugit excepturi itaque deleniti aut, corrupti doloribus
        dignissimos vel possimus neque cum quo. Adipisci, voluptate debitis?
        Commodi laborum nisi reprehenderit consequatur explicabo alias, quo
        reiciendis voluptatum necessitatibus impedit ad quibusdam non at. Ea, id
        at. Aut labore eius laborum odio fugit alias, vero quis et aliquam
        eligendi iure error? Odit pariatur vero tenetur deserunt officiis hic
        sequi, numquam in, soluta quibusdam quae quia esse, eaque deleniti
        laboriosam nisi quidem quaerat veritatis ut. Voluptate tempora dicta sit
        possimus quam officia minus voluptas repellat fugiat et quod officiis
        magnam, error ipsa quidem assumenda. Placeat nulla quia recusandae
        dolorem? Unde cupiditate eveniet doloribus voluptatum voluptas dolore
        dicta, sit, amet aliquid nobis veniam quas est repellendus. Ducimus
        eaque perferendis id necessitatibus consequatur, fugiat enim et aperiam
        dignissimos perspiciatis, nobis veritatis ipsum dolores, aliquam optio
        neque? Deserunt, voluptate. Amet dolores esse debitis. Maxime tempora
        sed deserunt? Aspernatur laborum minus perspiciatis id reprehenderit
        officiis nesciunt, qui numquam, atque excepturi quia tenetur sunt
        similique tempora cum aliquam? Odio possimus amet voluptate quae!
        Quisquam odit voluptates dignissimos, nobis debitis dolor illo nam
        exercitationem dolorum vitae dolore corrupti vero repudiandae. Enim
        totam quisquam deleniti incidunt dolorum. Natus tempore voluptate neque
        odit corrupti ipsum. Nesciunt unde suscipit explicabo non, maiores alias
        a, impedit, beatae sint voluptas dolore dolorem! Facere dolore,
        consectetur omnis eveniet sint odit sunt voluptates sed eligendi
        adipisci doloribus quisquam eaque natus eius nam deleniti, reiciendis
        rerum aut fugiat. Quisquam neque at iusto officia, quae omnis! Eum
        inventore corrupti nostrum ex harum voluptatibus? Suscipit doloremque
        eos eum nulla eligendi ipsam? Voluptas tempora modi cupiditate, tempore
        cum aliquid, molestiae repellat corrupti neque similique quas qui iusto,
        ex impedit delectus facilis autem! Expedita illo harum quo distinctio.
        Ipsum eum iusto nulla, eveniet recusandae quam voluptates animi modi!
        Exercitationem odit consequuntur delectus maxime quam accusantium libero
        pariatur impedit, blanditiis nemo beatae aperiam recusandae, temporibus
        hic eaque vel, nulla eveniet! Enim libero nam quae explicabo
        exercitationem necessitatibus laboriosam saepe accusantium aliquam
        deserunt est cum rem non eius, ad dolores architecto. Cupiditate ratione
        totam odio doloribus eius magnam alias ducimus distinctio voluptate
        impedit? Quo consequatur facilis porro culpa nemo distinctio officia
        perferendis a architecto beatae? Delectus deserunt doloribus quidem
        aperiam in et ducimus facere explicabo nemo nesciunt ea temporibus
        cumque, suscipit voluptatem eveniet nam ex incidunt quibusdam culpa?
        Omnis explicabo perferendis expedita eos ipsa sunt sit doloribus eaque
        corporis repudiandae quasi commodi pariatur esse autem, minima voluptas,
        at rerum. Unde aperiam obcaecati repellat sint doloremque, veniam
        commodi exercitationem. Amet labore quod harum reprehenderit modi
        numquam fugit! Officia quas, enim necessitatibus dolorum, eaque in eos
        impedit ducimus, excepturi quo blanditiis. Sint amet aut totam corrupti
        porro alias praesentium labore numquam, sunt quod perspiciatis beatae
        dolores, doloribus dolor mollitia consequuntur laboriosam asperiores
        dicta delectus pariatur molestiae voluptates magnam perferendis omnis.
        Quas, doloremque ipsam architecto aspernatur maxime accusamus nesciunt
        nihil exercitationem. Quos in facilis consequuntur dolorum minima enim
        illum delectus sint, dolorem aut ex explicabo, laudantium cupiditate
        eaque impedit asperiores amet eos aliquid tenetur, nostrum suscipit
        atque doloremque ad. In ea voluptatibus minus perspiciatis id molestias
        quidem pariatur earum accusamus nostrum nulla deserunt voluptatem vel ut
        cum aliquid dolorum voluptas mollitia similique, assumenda, sequi
        asperiores debitis nemo quis. Ea repellat tempora officiis laboriosam,
        odit, cupiditate ad repudiandae enim molestias itaque nam sint, minus
        cumque deserunt fuga iure quidem natus non quam inventore illum corporis
        quas commodi modi! Veniam non nulla minima ipsum hic laudantium quidem
        sunt accusamus tempore deleniti nam, quas vitae ex, delectus blanditiis
        quo est perferendis quia. Illo maxime a ipsa neque quos saepe. Assumenda
        totam veniam laborum iste a quia ducimus labore accusamus cum provident?
        Repellendus vel eum excepturi cum, adipisci nulla provident! Aspernatur
        sunt ad cupiditate eum?
      </p> : <p></p>  }
      <h1>Abaixo do texto</h1>
    </div>
  );
}

export default AlternarTexto;
