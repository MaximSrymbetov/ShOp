import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../features/ErrorPage/ErrorPage';
import NavBar from '../features/navbar/NavBar';
import MainPage from '../features/mainpage/MainPage';
import AuthorizationPage from '../features/Auth/AuthorizationPage';
import RegistrationPage from '../features/Auth/RegistrationPage';
import Allroducts from '../features/allproducts/Allroducts';
import { useAppDispatch } from '../redux/store';
import { allproducts } from '../features/allproducts/productSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(allproducts())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/allproducts" element={<Allroducts />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit nemo aut beatae quaerat
        officia voluptas doloremque error quas consequatur distinctio magnam odio, quos, minima
        dolores repellat praesentium accusantium cupiditate quidem alias! Fuga tempore inventore eos
        corrupti, porro autem id consectetur nesciunt commodi, debitis repudiandae repellendus ea in
        magni mollitia delectus quae dolor eius. Reprehenderit quam, voluptatibus distinctio
        recusandae enim, eaque beatae veniam, itaque corporis natus voluptatum. Quibusdam ullam eos
        illum? Nam amet et cupiditate officiis natus culpa iste. Minus qui voluptatibus architecto
        culpa repudiandae dicta harum, modi beatae voluptatem perferendis autem, assumenda quos illo
        porro fugit, tenetur expedita corrupti. Libero eligendi voluptatum repellendus cum ratione
        nesciunt tempore, nobis earum accusamus enim asperiores aspernatur nam repudiandae, facere
        voluptas fuga. Atque dolore assumenda sequi perspiciatis dicta, at neque laudantium debitis
        commodi. A, nesciunt quisquam soluta ipsam odio placeat eligendi quo illo. Sit similique
        facere ullam? Animi nobis doloremque esse. Veritatis, tenetur iusto commodi error sint nobis
        natus et, veniam adipisci ipsam molestias saepe? Facilis commodi necessitatibus quas
        officiis, distinctio sequi expedita nostrum, dolor velit exercitationem quos deleniti,
        assumenda laboriosam pariatur optio quisquam dolore illo cupiditate et. Qui ipsam numquam
        similique tempora odit sint reiciendis unde impedit. Omnis quo officiis laudantium repellat
        ut labore enim natus, quaerat nostrum itaque eligendi assumenda dolore inventore eos
        voluptates minima. Perspiciatis quaerat dolore deserunt odio laboriosam. Nulla sapiente
        debitis, beatae animi illum ducimus consectetur rem odio eius incidunt possimus eos nisi
        impedit iure asperiores officiis ipsa eaque ratione atque, quia quidem eum consequuntur
        vitae? Maiores mollitia sunt ut, ipsam nemo voluptate hic est rerum libero necessitatibus in
        debitis inventore atque eius tempore distinctio nihil placeat excepturi sit cupiditate
        voluptas cum. Laborum molestiae nesciunt modi sunt aliquid ab accusamus veniam praesentium
        labore quisquam error iure deleniti nihil, maiores alias earum odit blanditiis. Dolorum vero
        nisi iste molestias dolores maiores aspernatur, asperiores dolorem dolor facere unde dicta
        atque magnam hic natus ab, quae soluta, provident omnis officiis! Labore totam voluptate ea
        natus explicabo, voluptatem aliquam ullam? Eligendi culpa quas expedita aperiam ad
        perferendis maxime reprehenderit. Placeat earum quas atque reiciendis, fuga ducimus ratione
        sit harum veritatis voluptas totam maxime aliquid. Quidem, minima ullam, mollitia distinctio
        repellat sunt deleniti beatae eius aut natus quisquam necessitatibus temporibus? Aperiam
        odio commodi repudiandae! Voluptate, deleniti expedita quidem officiis cumque perferendis?
        Eligendi enim maxime ab tempora recusandae accusantium ex, temporibus, atque eos doloribus
        fugit culpa neque cum in facilis sint non illum voluptas adipisci, ut vero? Cupiditate
        dignissimos reiciendis sequi possimus et impedit maxime repellendus deserunt, aliquam libero
        asperiores perspiciatis atque quia vitae blanditiis laborum illo ducimus officia. Ab
        similique saepe rerum unde! Voluptatem, quo! A quia voluptate optio reprehenderit, maxime
        commodi enim perferendis ullam? Cum dicta debitis totam maiores quasi vel, inventore quo
        fugit iste adipisci itaque voluptate culpa similique eaque, cumque explicabo! Unde nesciunt
        nostrum qui nulla. Inventore et ea nihil assumenda modi. Perferendis facere repudiandae
        dolore laudantium cumque nesciunt labore. Alias repellendus animi ea, culpa voluptatem eaque
        officiis iste error. Quis, eveniet! Rem vero omnis, distinctio, veniam dolorum tempora
        aspernatur aperiam voluptas fugit sunt sint maxime esse minima autem debitis consectetur.
        Debitis, cum sit unde omnis id consectetur fugiat et officia inventore corporis incidunt
        tempora corrupti, quaerat voluptate, ipsum fuga? Quidem, sapiente ad ipsa nemo illum,
        ducimus modi aspernatur quisquam eligendi sequi velit. Architecto vel quam, sunt nemo quia
        consequatur numquam veritatis impedit? Cumque doloribus accusantium saepe quia voluptatum a
        excepturi. Libero animi, reprehenderit ut voluptas exercitationem deleniti illo laborum ab
        totam, itaque, quae quia vitae ex. Repellat, quasi reprehenderit et laborum architecto
        laudantium nesciunt unde assumenda, deleniti ullam ea ut quaerat nostrum recusandae iure
        cumque corporis molestias odit harum repudiandae? Minima, ipsum doloremque impedit ab
        maiores libero sint necessitatibus. Delectus ab adipisci maiores officiis nihil autem sunt
        molestias expedita velit molestiae commodi similique, asperiores, iste voluptatem eligendi
        saepe inventore sapiente assumenda omnis voluptate. Quibusdam voluptatum laboriosam
        reprehenderit accusamus laborum mollitia atque, consectetur exercitationem nostrum, labore
        maiores! Provident iusto blanditiis, maxime voluptas maiores, consequuntur alias ad ut est
        labore eaque placeat deserunt earum sit, vitae natus molestias aperiam quibusdam quisquam.
        Id et commodi cum a harum numquam fuga totam velit, corporis, fugiat itaque amet est quidem
        ea in. Molestiae id eveniet corporis nam, veniam sed nemo praesentium dolore. Consequatur
        assumenda neque reiciendis, consequuntur deleniti quod deserunt, dolor velit dolorem saepe
        laudantium error amet! Architecto quasi itaque voluptate vel dolorum eveniet perspiciatis
        officiis ratione dolor sunt voluptatem unde nesciunt veritatis mollitia fugit maxime
        tenetur, repudiandae nisi dolores! Suscipit obcaecati sit, ipsam cum eligendi, laborum at
        illo voluptatem, voluptatibus officiis totam dicta soluta similique qui? Provident omnis
        voluptatibus optio exercitationem ad rem saepe labore eius? Laborum itaque labore unde
        soluta ipsam inventore quas tempore quibusdam odit blanditiis sint rem, laudantium
        perferendis nihil, neque repellendus ea id, recusandae architecto ullam nostrum. Fuga porro
        debitis, earum amet vero architecto rerum laudantium quos minima iste vitae sapiente, dolor
        delectus doloribus quibusdam, nihil ex nulla? Quo cupiditate voluptate, dolor, officia,
        laudantium neque ex reprehenderit voluptatem alias animi sapiente illum debitis eveniet
        cumque natus? Sit, quisquam laboriosam? Atque sint corporis soluta laudantium dolorum
        quidem, tempora, temporibus nihil inventore voluptatem magni itaque eos vitae, deleniti ex
        distinctio error. Perspiciatis illo nam officiis voluptate porro veniam asperiores unde,
        natus beatae autem quos cupiditate fugit consequatur voluptatibus culpa cumque velit! Porro
        quasi laborum eos at aspernatur et placeat. Explicabo iusto atque blanditiis possimus animi
        consequuntur molestiae tempore quaerat quasi qui dolorum cumque praesentium quos unde totam
        voluptatibus, maxime quas. Nam assumenda odio sequi doloremque quidem recusandae, quod
        excepturi vero expedita ipsa dignissimos temporibus minus ut esse placeat at commodi fugiat!
        Architecto possimus, nihil, autem numquam veritatis similique, odit recusandae quam quis
        alias incidunt porro! Delectus, labore optio facere consequatur doloremque illo porro quia
        reiciendis adipisci, eos, voluptatem voluptas a animi ipsam voluptatum est libero nam
        eveniet totam blanditiis magnam dolore iusto reprehenderit. Dicta ex quidem repellendus
        nobis quasi rem libero aperiam ipsum consequuntur velit ratione, saepe repudiandae optio
        earum quis ipsa. Placeat mollitia eos voluptatem asperiores distinctio modi numquam? Quo
        magnam impedit, atque rem ea nobis deserunt! Corporis, incidunt nesciunt.
      </p> */}
    </div>
  );
}

export default App;
