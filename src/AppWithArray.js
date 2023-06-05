const ShowTitle = (props) => {
  return <h1>{props.season}</h1>;
};

const Episodes = (props) => (
  <>
    <Episode episode={props.episodes[0]} />
    <Episode episode={props.episodes[1]} />
    <Episode episode={props.episodes[2]} />
  </>
);

const Episode = (props) => (
  <p>
    {props.episode.name} {props.episode.views.toLocaleString("en-US")}
  </p>
);

const TotalSeasonViews = (props) => (
  <p>
    Season 1, Number of Views{" "}
    {(
      props.episodes[0].views +
      props.episodes[1].views +
      props.episodes[2].views
    ).toLocaleString("en-US")}
  </p>
);

const App = () => {
  const season = "Seinfeld Season 1";
  const episodes = [
    { name: "Good News, Bad News", views: 6905040 },
    { name: "The Stakeout", views: 3905040 },
    { name: "The Robbery", views: 4498237 },
  ];

  return (
    <div>
      <ShowTitle season={season} />
      <Episodes episodes={episodes} />
      <TotalSeasonViews episodes={episodes} />
    </div>
  );
};

export default App;
