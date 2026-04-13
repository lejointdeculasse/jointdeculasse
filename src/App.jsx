export default function App() {
  const youtube = "https://youtube.com/@lejointdeculasse";

  return (
    <div style={{background:"#000", color:"#fff", minHeight:"100vh", padding:"20px", fontFamily:"Arial"}}>

      <h1 style={{fontSize:"40px"}}>
        On a tenté un truc…<br/>franchement on n’aurait peut-être pas dû.
      </h1>

      <p style={{color:"#aaa", maxWidth:"600px"}}>
        Ici on démonte, on teste, on galère… et parfois ça démarre.
      </p>

      <a href={youtube} style={{display:"inline-block", marginTop:"20px", background:"#fff", color:"#000", padding:"10px 20px", borderRadius:"10px"}}>
        Regarder sur YouTube
      </a>

      <h2 style={{marginTop:"50px"}}>Projet principal</h2>
      <iframe width="100%" height="315"
        src="https://www.youtube.com/embed/videoseries?list=VIDEO_ID_MAIN"
        title="playlist"
        allowFullScreen
      ></iframe>

      <h2 style={{marginTop:"50px"}}>Autres projets</h2>

      <div style={{marginTop:"20px"}}>
        <h3>Twingo de Course</h3>
        <iframe width="100%" height="315"
          src="https://www.youtube.com/embed/videoseries?list=VIDEO_ID_1"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{marginTop:"20px"}}>
        <h3>Projet S124</h3>
        <iframe width="100%" height="315"
          src="https://www.youtube.com/embed/videoseries?list=VIDEO_ID_2"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{marginTop:"20px"}}>
        <h3>Remise en route</h3>
        <iframe width="100%" height="315"
          src="https://www.youtube.com/embed/videoseries?list=VIDEO_ID_3"
          allowFullScreen
        ></iframe>
      </div>

      <h2 style={{marginTop:"50px"}}>Contact</h2>
      <p>partenariat@jointdeculasse.fr</p>

    </div>
  );
}
