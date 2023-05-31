const ShowTitle = (props) => {
  return <h1>{props.season}</h1>;
};

const Episodes = (props) => (
  <>
    <Episode episode={props.episode1} viewsEp={props.viewsEp1} />
    <Episode episode={props.episode2} viewsEp={props.viewsEp2} />
    <Episode episode={props.episode3} viewsEp={props.viewsEp3} />
  </>
);

const Episode = (props) => (
  <p>
    {props.episode} {props.viewsEp.toLocaleString("en-US")}
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

const AppOld = () => {
  const season = "Seinfeld Season 1";
  const episode1 = "Good News, Bad News";
  const viewsEp1 = 6905040;
  const episode2 = "The Stakeout";
  const viewsEp2 = 3905040;
  const episode3 = "The Robbery";
  const viewsEp3 = 4498237;

  return (
    <div>
      <ShowTitle season={season} />
      <Episodes
        episode1={episode1}
        episode2={episode2}
        episode3={episode3}
        viewsEp1={viewsEp1}
        viewsEp2={viewsEp2}
        viewsEp3={viewsEp3}
      />
      <TotalSeasonViews totalViews={viewsEp1 + viewsEp2 + viewsEp3} />
    </div>
  );
};

export default AppOld;
