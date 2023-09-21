import Fixture from "./Fixture";

function Fixtures() {
  const fixtureData = ["Fixture 1", "Fixture 2", "Fixture 3"];

  return (
    <div id="fixtures">
      {fixtureData.map((item) => (
        <Fixture />
      ))}
    </div>
  );
}

export default Fixtures;
