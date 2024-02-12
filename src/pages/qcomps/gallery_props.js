function Load_Profile({profile}) {
  return (
    <section className="profile">
      <h2>{profile.name}</h2>
      <img
          className="avatar"
          src={'https://i.imgur.com/' + profile.imageId + '.jpg'}
          alt={profile.name}
          width={70}
          height={70}
        />
      <ul>
          <li>
            <b>Profession: </b>
            {profile.profession}
          </li>
          <li>
            <b>Awards: </b>
            {profile.awards} 
          </li>
          <li>
            <b>Discovered: </b>
            {profile.discovered}
          </li>
        </ul>
      </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Load_Profile profile={{name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG',
      profession: 'physicist and chemist', awards: '4 Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
      discovered: 'polonium (element)'}}/>

      <Load_Profile profile={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2', profession: 'geochemist',
    awards: '2 Miyake Prize for geochemistry, Tanaka Prize', discovered: 'a method for measuring carbon dioxide in seawater'}}/>
    </div>
  );
}
