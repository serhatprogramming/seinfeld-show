const ShowTitle = (props) => {
  return <h1>{props.season}</h1>;
};

const Episodes = (props) => (
  <>
    <Episode episode={props.episode1} />
    <Episode episode={props.episode2} />
    <Episode episode={props.episode3} />
  </>
);

const Episode = (props) => (
  <p>
    {props.episode.name} {props.episode.views.toLocaleString("en-US")}
  </p>
);

const TotalSeasonViews = (props) => {
  return (
    <>
      <p>
        Season 1, Number of Views {props.totalViews.toLocaleString("en-US")}
      </p>
    </>
  );
};

const App = () => {
  const season = "Seinfeld Season 1";
  const episode1 = { name: "Good News, Bad News", views: 6905040 };
  const episode2 = { name: "The Stakeout", views: 3905040 };
  const episode3 = { name: "The Robbery", views: 4498237 };

  return (
    <div>
      <ShowTitle season={season} />
      <Episodes episode1={episode1} episode2={episode2} episode3={episode3} />
      <TotalSeasonViews
        totalViews={episode1.views + episode2.views + episode3.views}
      />
    </div>
  );
};

export default App;
